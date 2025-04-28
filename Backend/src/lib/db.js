import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const conn = mongoose.connect(process.env.mongodb_URL);
        console.log(`MongoDB Connected successfull`);
    } catch (error) {
        console.log("mongodb connection error", error);
    }
};