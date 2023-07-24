import "@shopify/shopify-api/adapters/node";
import { shopifyApi, ApiVersion, type Shopify } from "@shopify/shopify-api";
import { type RestResources, restResources } from "@shopify/shopify-api/rest/admin/2023-04";
require('dotenv').config();

const createShopifyApiRest = (): Shopify<RestResources> => {
  return shopifyApi({
    adminApiAccessToken: process.env.ADMIN_API_ACCESS_TOKEN!,
    apiSecretKey: process.env.API_SECRET_KEY!,
    hostName: process.env.HOST_NAME!,
    apiVersion: ApiVersion.April23,
    isCustomStoreApp: true,
    isEmbeddedApp: false,
    restResources,
  });
}

export { createShopifyApiRest }
