import { getClient } from "./get-client";
import { normalizeProductData } from "./normalize-product-data";

async function getProductData(query) {
  if (!query) return null;

  const client = getClient();
  let data = undefined;
  try {
    data = await client.getEntries({
      ...query,
    });
  } catch (error) {
    console.log("Unable to get data", error);
  }
  return normalizeProductData(data.items);
}

export { getProductData };
