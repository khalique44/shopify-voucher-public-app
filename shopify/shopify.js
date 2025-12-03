// shopify.js
import ShopifyPkg from '@shopify/shopify-api';
import NodeAdapterPkg from '@shopify/shopify-api/adapters/node';

// Use the `.default` property for CommonJS default export
const Shopify = ShopifyPkg.default || ShopifyPkg;
const ApiVersion = ShopifyPkg.ApiVersion || Shopify.ApiVersion;
const MemorySessionStorage = ShopifyPkg.MemorySessionStorage || Shopify.MemorySessionStorage;
const nodeAdapter = NodeAdapterPkg.default?.nodeAdapter || NodeAdapterPkg.nodeAdapter;

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
