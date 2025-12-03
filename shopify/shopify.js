// shopify.js
import pkg from '@shopify/shopify-api';
import adapterPkg from '@shopify/shopify-api/adapters/node';

const { Shopify, ApiVersion, MemorySessionStorage } = pkg;
const { nodeAdapter } = adapterPkg;

// Initialize Shopify context
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(','),
  HOST_NAME: process.env.HOST.replace(/https?:\/\//, ''),
  API_VERSION: ApiVersion.October25,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new MemorySessionStorage(),
  CUSTOM_ADAPTER: nodeAdapter(),
});

export default Shopify;
