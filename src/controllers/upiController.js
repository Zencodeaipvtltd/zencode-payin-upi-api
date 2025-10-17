export const initiateUPI = async (req, res) => {
  try {
    const { merchantId, orderId, amount, upiId } = req.body;
    // Mock response — integrate your real PSP/UPI API later
    const txnId = "TXN" + Date.now();
    res.json({ success: true, message: "Transaction initiated", txnId, amount });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error initiating UPI" });
  }
};

export const getStatus = async (req, res) => {
  try {
    const { txnId } = req.params;
    // Mock response
    res.json({ txnId, status: "SUCCESS", updatedAt: new Date() });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching status" });
  }
};
