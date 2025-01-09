import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema<Omit<CategoryItem, '_id'> & { _id: Schema.Types.ObjectId }>(
    {
        name: {
            type: String,
            unique: true,
            require: true,
        },
        path: {
            type: String,
            unique: true,
            require: true,
        },
    },
    { timestamps: true },
);

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
