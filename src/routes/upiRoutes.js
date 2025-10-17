import express from "express";
import { initiateUPI, getStatus } from "../controllers/upiController.js";

const router = express.Router();

router.post("/initiate", initiateUPI);
router.get("/status/:txnId", getStatus);

export default router;
