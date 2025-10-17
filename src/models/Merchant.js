import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema(
  {
    merchantId: { type: String, unique: true, required: true },
    merchantName: { type: String, required: true },
    email: { type: String, required: true },
    apiKey: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Merchant = mongoose.model("Merchant", merchantSchema);
export default Merchant;
