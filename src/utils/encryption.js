import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";
const KEY = crypto.createHash("sha256").update(String(process.env.API_KEY)).digest("base64").substr(0, 32);
const IV = Buffer.alloc(16, 0); // Initialization Vector (static for demo; use random IVs in production)

export const encrypt = (data) => {
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
  let encrypted = cipher.update(JSON.stringify(data), "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
};

export const decrypt = (encryptedData) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
  let decrypted = decipher.update(encryptedData, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return JSON.parse(decrypted);
};
