export const registerMerchant = async (req, res) => {
  try {
    const { merchantName, email } = req.body;
    const merchantId = "ZCODE" + Date.now();
    res.json({ success: true, merchantId, message: "Merchant registered" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering merchant" });
  }
};
