import express from "express";
import cors from "cors";
import mongoose from "mongoose"; // Import mongoose
import adminRoutes from "./routes/admin.routes";

const app = express();

// Connect to MongoDB directly
mongoose
  .connect("mongodb://127.0.0.1:27017/admin") // Replace with your DB URL
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3801", "http://localhost:3803"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/admindata", adminRoutes);

// 404 handler
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// Error handling middleware (optional)
// app.use(errorHandler);

const PORT = process.env.PORT || 3810;
app.listen(PORT, () => {
  console.log(`admin service running on port ${PORT}`);
});

export default app;
