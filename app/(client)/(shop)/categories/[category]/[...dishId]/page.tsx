import DishItem from '@/components/dishItem';
import { getAllDishes, getCategories, getDishById } from '@/actions/dishes';

type Props = { params: { dishId: string[]; category: ProductCategory } };

export const dynamicParams = false;

export async function generateStaticParams() {
    const dishes = await getAllDishes();
    const categories = await getCategories();

    if (!dishes?.length || !categories?.length) return [];

    const res = categories.flatMap((category) =>
        dishes
            .filter((dish) => dish.categoryId === category._id)
            .map((dish) => ({
                category: category.path,
                dishId: [dish._id, dish.productName.toLowerCase().replace(/\s+/g, '_')],
            }))
    );
    return res;
}

export async function generateMetadata({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];
    const dishItem = await getDishById(id);

    if (!dishItem) return;

    return {
        title: `${dishItem.productName.length > 59
            ? dishItem.productName.slice(0, 60) + '...'
            : dishItem.productName
            }  | FresHHub`,
    };
}

export default async function DishItemPage({ params }: Props) {
    const { dishId } = params;
    const id = dishId[0];

    const dishItem = await getDishById(id);
    if (!dishItem) return;

    return (
        <DishItem dish={dishItem} />
    );
}
