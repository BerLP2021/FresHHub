import { notFound } from 'next/navigation';

import CategoryItem from '@/components/categoryItem/CategoryItem';
import { getCategories, getDishesByCategory, getDishesByName } from '@/actions/dishes';
import { basePages } from '@/data/pages';

type Props = {
    params: { category: string };
    searchParams: {
        search?: string;
        sort?: SortType
    };
};

export async function generateMetadata({ params, searchParams }: Props) {
    return {
        title: searchParams?.search
            ? 'Search | FresHHub'
            : `${params.category.charAt(0).toLocaleUpperCase() + params.category.slice(1)
            } | FresHHub`,
    };
}

const isValidSortType = (sort: string | undefined): sort is SortType => {
    return sort === 'asc' || sort === 'desc';
}

export async function generateStaticParams() {
    const categories = await getCategories();
    if (!categories?.length) return [];
    return categories.map((category) => ({
        category: category.path,
    }));
}

export const dynamicParams = true;

export default async function CategoryPage({ params, searchParams }: Props) {
    const { category } = params;
    const categories = await getCategories();

    if (!categories?.length) return null;

    const categoriesPaths = categories.map(p => p.path);

    const pagesPaths = [...categoriesPaths, basePages[0].path /**Path for Search page*/];

    if (!pagesPaths?.some((item) => item === category)) return notFound();

    if (searchParams?.search) {
        const dishes = await getDishesByName(searchParams.search);
        if (!dishes?.length) return;
        return dishes;
    }

    const dishes = await getDishesByCategory(
        category, isValidSortType(searchParams?.sort)
        ? searchParams?.sort
        : undefined);
    if (!dishes?.length) return;

    const title = category === basePages[0].path ?
        `Search for '${searchParams?.search}'` :
        categories.filter((item) => item.path === category)[0].name;
    return <CategoryItem dishes={dishes} title={title} categoryName={category} />;
}
