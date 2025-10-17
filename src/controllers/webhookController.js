export const handleWebhook = async (req, res) => {
  try {
    console.log("Webhook received:", req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: "Webhook processing failed" });
  }
};
