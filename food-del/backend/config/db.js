import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tomatodb:tomatodb-123@cluster0.md4cv.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}