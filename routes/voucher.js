import express from "express";
import { verifyProxy } from "../shopify/verifyProxy.js";
import { createVoucherPDF } from "../utils/pdf.js";

const router = express.Router();

router.get("/", verifyProxy, async (req, res) => {
  const customer = req.query.customer || "Shopify Customer";
  const order_id = req.query.order_id || "TEST";

  const pdf = await createVoucherPDF({ customer, order_id });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=voucher.pdf");

  res.send(pdf);
});

export default router;
