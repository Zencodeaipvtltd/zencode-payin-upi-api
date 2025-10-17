import express from "express";
import { registerMerchant } from "../controllers/merchantController.js";

const router = express.Router();

// Register a new merchant
router.post("/register", registerMerchant);

export default router;
