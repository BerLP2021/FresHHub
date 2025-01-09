import mongoose, { Schema } from 'mongoose';
import { UserDB } from '@/types/auth';

const userSchema = new Schema<UserDB>(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
            default: null,
        },
        // @ts-ignore
        phoneNumber: {
            type: String,
            unique: [true, 'Phone number must be unique'],
            sparse: true,
            default: null,
            minLength: 12,
            maxLength: 12,
        },
        password: {
            type: String,
            default: null,
            minLength: 8,
        },
        email: {
            type: String,
            default: null,
            set: (val: string) => (val ? val.toLowerCase() : null),
        },
        image: {
            type: String,
            default: null,
        },
        role: {
            type: String,
            enum: ['admin', 'user', 'superadmin'],
            default: 'user',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.models.User || mongoose.model('User', userSchema);
