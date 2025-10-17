import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    txnId: { type: String, unique: true, required: true },
    merchantId: { type: String, required: true },
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    upiId: { type: String },
    status: { type: String, enum: ["PENDING", "SUCCESS", "FAILED"], default: "PENDING" },
    referenceNo: { type: String },
    remarks: { type: String },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
