import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://nextblog:qwertyuiop@cluster0nextblog.cvgqatw.mongodb.net/blog-app");
    console.log("DB Connected");
}