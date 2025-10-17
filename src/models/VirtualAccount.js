import mongoose from "mongoose";

const virtualAccountSchema = new mongoose.Schema(
  {
    accountId: { type: String, unique: true, required: true },
    merchantId: { type: String, required: true },
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    ifscCode: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const VirtualAccount = mongoose.model("VirtualAccount", virtualAccountSchema);
export default VirtualAccount;
