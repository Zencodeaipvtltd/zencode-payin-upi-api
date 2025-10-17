import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import upiRoutes from "./routes/upiRoutes.js";
import merchantRoutes from "./routes/merchantRoutes.js";
import webhookRoutes from "./routes/webhookRoutes.js";
import connectDB from "../config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// Routes
app.use("/api/v1/upi", upiRoutes);
app.use("/api/v1/merchant", merchantRoutes);
app.use("/api/v1/webhook", webhookRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("ZENCODE Pay-In UPI API is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
