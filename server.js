import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import shopify from "./shopify/shopify.js";
import installRouter from "./routes/install.js";
import voucherRouter from "./routes/voucher.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// Shopify OAuth installer
app.use("/api/auth", installRouter);

// Shopify App Proxy Endpoint
app.use("/apps/voucher", voucherRouter);

// Frontend to serve embed file
app.use("/embed", express.static("web/frontend"));

// Root
app.get("/", (req, res) => {
    res.send("Shopify Voucher Public App Running");
});

app.listen(PORT, "0.0.0.0", () =>
    console.log("Server running on port " + PORT)
);
