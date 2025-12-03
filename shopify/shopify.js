import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import { nodeAdapter } from "@shopify/shopify-api/adapters/node";

export const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  apiVersion: LATEST_API_VERSION,
  scopes: process.env.SCOPES.split(","),
  appUrl: process.env.SHOPIFY_APP_URL,
  isEmbeddedApp: true,
  sessionStorage: new shopifyApi.session.MemorySessionStorage(),
  adapter: nodeAdapter(),     // 🔥 CRITICAL — FIXES YOUR ERROR
});
