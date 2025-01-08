'use server';
import connect from '@/utils/db';
import Dish from '@/utils/models/Dish';
import Category from '@/utils/models/Category';

export async function getCategories() {
    try {
        await connect();
        const categoriesData = await Category.find({}).lean<CategoryItem[]>();
        const categories = categoriesData.map((item) => ({
            ...item,
            _id: item._id.toString(),
        }));
        return categories;
    } catch (error) {
        console.log('Some error in getCategories: ', error);
        return [];
    }
}

export async function getPages() {
    try {
        const categories = await getCategories();
        if (!categories) return [];
        const pages = [...categories.map((item) => item.name), 'Search', 'Order page'];
        return pages;
    } catch (error) {
        console.log('Some error in getPages: ', error);
        return [];
    }
}

export async function getAllDishes() {
    try {
        await connect();
        const dishesData = await Dish.find({}).lean<DishItem[]>();
        const dishes: DishItem[] = dishesData.map((item) => ({
            ...item,
            _id: item._id.toString(),
            categoryId: item.categoryId.toString(),
        }));
        return dishes;
    } catch (error) {
        console.log('Some error in getAllDishes: ', error);
        return [];
    }
}

export async function getDishesByCategory(categoryName: string, sort?: SortType) {
    try {
        await connect();
        const categoryData = await Category.find({
            path: categoryName,
        }).lean<CategoryItem[]>();
        const categoryId = categoryData[0]._id.toString();

        const dishesData = await Dish.find({ categoryId }).lean<DishItem[]>();

        let dishes: DishItem[] = dishesData.map((item) => ({
            ...item,
            _id: item._id.toString(),
            categoryId: item.categoryId.toString(),
        }));

        if (sort) {
            dishes.sort((a: DishItem, b: DishItem) => {
                if (sort === 'asc') return a.price - b.price;
                if (sort === 'desc') return b.price - a.price;
                return 0;
            });
        }

        return dishes;
    } catch (error) {
        console.log('Some error in getDishesByCategory: ', error);
        return [];
    }
}

export async function getDishesByName(productName: string) {
    const safeProductName = productName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(safeProductName, 'ig');
    try {
        await connect();
        const dishesData = await Dish.find({
            productName: regex,
        }).lean<DishItem[]>();
        const dishes: DishItem[] = dishesData.map((item) => ({
            ...item,
            _id: item._id.toString(),
            categoryId: item.categoryId.toString(),
        }));
        return dishes;
    } catch (error) {
        console.log('Some error in getDishesByName: ', error);
        return [];
    }
}

export async function getDishById(dishId: string) {
    try {
        await connect();
        const dishData = await Dish.findById(dishId).lean<DishItem>();
        if (!dishData) return;
        const dish = {
            ...dishData,
            _id: dishData?._id.toString(),
            categoryId: dishData?.categoryId.toString(),
        };
        return dish;
    } catch (error) {
        console.log('Some error in getDishById: ', error);
    }
}
