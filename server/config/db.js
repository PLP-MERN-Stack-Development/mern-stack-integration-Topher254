import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Blog Database Conected successfully...");
        
        
    } catch (error) {
        console.log("Database connection error",error.message);
        
        
    }
}

export default connectDb;