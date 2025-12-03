// shopify.js
import Shopify from '@shopify/shopify-api';
import pkg from '@shopify/shopify-api/adapters/node';
const { nodeAdapter } = pkg;

// Initialize Shopify context
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(','),
  HOST_NAME: process.env.HOST.replace(/https?:\/\//, ''),
  API_VERSION: Shopify.ApiVersion.October25, // change to the version you want
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(), // or your DB storage
  CUSTOM_ADAPTER: nodeAdapter(),
});

export default Shopify;
