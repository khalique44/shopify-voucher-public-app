import express from "express";
import shopify from "../shopify/shopify.js";

const router = express.Router();

router.get("/install", async (req, res) => {
  const authRoute = await shopify.auth.begin({
    shop: req.query.shop,
    callbackPath: "/api/auth/callback",
    isOnline: false,
    rawRequest: req,
    rawResponse: res,
  });

  res.redirect(authRoute);
});

router.get("/callback", async (req, res) => {
  await shopify.auth.callback({
    rawRequest: req,
    rawResponse: res,
  });

  res.redirect(`https://${req.query.shop}/admin/apps`);
});

export default router;
