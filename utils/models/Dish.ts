import mongoose, { Schema } from 'mongoose';

const dishSchema = new Schema<
    Omit<DishItem, '_id' | 'categoryId'> & {
        _id: Schema.Types.ObjectId;
        categoryId: Schema.Types.ObjectId;
    }
>(
    {
        categoryId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Category',
        },
        productName: {
            type: String,
            unique: true,
            require: true,
        },
        photoUrl: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        weight: {
            type: String,
            require: true,
        },
    },
    { timestamps: true },
);

export default mongoose.models.Dish || mongoose.model('Dish', dishSchema);
