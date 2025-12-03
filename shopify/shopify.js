// shopify.js
import { Shopify, ApiVersion, MemorySessionStorage } from '@shopify/shopify-api';
import pkg from '@shopify/shopify-api/adapters/node';
const { nodeAdapter } = pkg;

// Initialize Shopify context
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(','),
  HOST_NAME: process.env.HOST.replace(/https?:\/\//, ''),
  API_VERSION: ApiVersion.October25, // choose your API version
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new MemorySessionStorage(),
  CUSTOM_ADAPTER: nodeAdapter(),
});

export default Shopify;

