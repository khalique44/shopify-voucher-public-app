// shopify.js
import ShopifyPkg from '@shopify/shopify-api';
import NodeAdapterPkg from '@shopify/shopify-api/adapters/node';

// Destructure from the default import (because it's CommonJS)
const { Shopify, ApiVersion, MemorySessionStorage } = ShopifyPkg;
const { nodeAdapter } = NodeAdapterPkg;

// Initialize Shopify Context
Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(','),
  HOST_NAME: process.env.HOST.replace(/^https?:\/\//, ''),
  API_VERSION: ApiVersion.October25,
  IS_EMBEDDED_APP: true,
  SESSION_STORAGE: new MemorySessionStorage(),
  CUSTOM_ADAPTER: nodeAdapter(),
});

export default Shopify;
