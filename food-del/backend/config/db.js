import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pauldipta007:rock.dipta@cluster0.wyjtb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}