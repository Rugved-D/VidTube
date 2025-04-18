import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();

const app = express();

export { app };
