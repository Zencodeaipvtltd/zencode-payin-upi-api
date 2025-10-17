import express from "express";
import { initiateUPI, getStatus } from "../controllers/upiController.js";

const router = express.Router();

// Initiate a new UPI transaction
router.post("/initiate", initiateUPI);

// Check the transaction status
router.get("/status/:txnId", getStatus);

export default router;
