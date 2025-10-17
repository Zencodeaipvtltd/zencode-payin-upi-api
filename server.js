// server.js
import app from "./src/app.js";
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ ZENCODE Pay-In UPI API running on http://localhost:${PORT}`);
});
