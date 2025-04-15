import mongoose from "mongoose";
import { DB_NAME } from "/Users/rugved/Desktop/code/vidtube/src/constants.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env",
});

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `\n MongoDB connected : ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

export default connectDB;
