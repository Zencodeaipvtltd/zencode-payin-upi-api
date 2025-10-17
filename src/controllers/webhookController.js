import { successResponse, errorResponse } from "../utils/apiResponse.js";
import { validateSignature } from "../utils/signatureValidator.js";

export const handleWebhook = async (req, res) => {
  try {
    const signature = req.headers["x-zencode-signature"];
    if (!validateSignature(req.body, process.env.API_KEY, signature))
      return errorResponse(res, "Invalid signature", 401);

    // process webhook...
    return successResponse(res, "Webhook accepted");
  } catch {
    return errorResponse(res, "Webhook processing failed");
  }
};
