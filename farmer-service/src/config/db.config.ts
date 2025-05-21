import mongoose from 'mongoose';
import { loadStates } from '../utils/loadStates';
import dotenv from 'dotenv';
dotenv.config();

const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Farmers";

mongoose
  .connect(dbURI)
  .then(async () => {
    await loadStates();
    console.log("Database connected!");
  }
    
)
  .catch(err => console.error("MongoDB connection error:", err));
