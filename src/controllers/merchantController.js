import { successResponse, errorResponse } from "../utils/apiResponse.js";

export const registerMerchant = async (req, res) => {
  try {
    const { merchantName, email } = req.body;
    if (!merchantName || !email) return errorResponse(res, "merchantName & email required", 400);
    const merchantId = "ZCODE" + Date.now();
    return successResponse(res, "Merchant registered", { merchantId });
  } catch {
    return errorResponse(res, "Registration failed");
  }
};
