import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("UPI Pay-In API", () => {
  it("POST /api/v1/upi/initiate -> should initiate a UPI transaction", async () => {
    const payload = {
      merchantId: "ZCODE12345",
      orderId: "ORD123",
      amount: 500,
      upiId: "customer@upi",
    };

    const res = await request(app)
      .post("/api/v1/upi/initiate")
      .send(payload)
      .expect(200);

    expect(res.body).to.have.property("success", true);
    expect(res.body).to.have.property("txnId");
    expect(res.body).to.have.property("amount", 500);
  });

  it("GET /api/v1/upi/status/:txnId -> should return transaction status", async () => {
    const txnId = "TXN_TEST_123";
    const res = await request(app)
      .get(`/api/v1/upi/status/${txnId}`)
      .expect(200);

    expect(res.body).to.have.property("txnId", txnId);
    expect(res.body).to.have.property("status");
  });
});
