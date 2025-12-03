import crypto from "crypto";

export const verifyProxy = (req, res, next) => {
  const { signature, ...params } = req.query;

  const message = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("");

  const digest = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
    .update(message)
    .digest("hex");

  if (digest !== signature) {
    return res.status(401).send("Invalid Proxy HMAC");
  }

  next();
};
