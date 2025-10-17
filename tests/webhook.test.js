import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("Webhook API", () => {
  it("POST /api/v1/webhook/upi -> should accept webhook payload", async () => {
    const webhookPayload = {
      txnId: "TXN123",
      status: "SUCCESS",
      amount: 500,
      referenceNo: "REF001",
    };

    const res = await request(app)
      .post("/api/v1/webhook/upi")
      .send(webhookPayload)
      .expect(200);

    expect(res.body).to.have.property("success", true);
  });
});
