import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const initiateUPI = async (req, res) => {
  try {
    const { merchantId, orderId, amount, upiId } = req.body;
    if (!merchantId || !orderId || !amount) {
      return errorResponse(res, "Missing required fields", 400);
    }
    const txnId = "TXN" + Date.now();
    return successResponse(res, "Transaction initiated", { txnId, amount, upiId });
  } catch (e) {
    return errorResponse(res, "Error initiating UPI");
  }
};

export const getStatus = async (req, res) => {
  try {
    const { txnId } = req.params;
    return successResponse(res, "Status fetched", { txnId, status: "SUCCESS" });
  } catch {
    return errorResponse(res, "Error fetching status");
  }
};
