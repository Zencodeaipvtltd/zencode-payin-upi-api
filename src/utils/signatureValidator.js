import crypto from "crypto";

/**
 * Generate HMAC SHA512 signature
 * @param {Object} data - Payload to sign
 * @param {String} secret - Secret key (e.g. process.env.API_KEY)
 */
export const generateSignature = (data, secret) => {
  const payload = JSON.stringify(data);
  return crypto.createHmac("sha512", secret).update(payload).digest("hex");
};

/**
 * Validate signature
 */
export const validateSignature = (data, secret, receivedSignature) => {
  const expectedSignature = generateSignature(data, secret);
  return expectedSignature === receivedSignature;
};
