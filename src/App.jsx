import { createEffect, createResource, onMount } from "solid-js";

import { getProductData } from "./utils/get-product-data";
import { appState, setAppState } from "./store/app.store";
import { homepageProducts, setHomepageProducts } from "./store/products.store";

const DEFAULT_QUERY = {
  content_type: "product",
  "fields.featuredLocations[exists]": true,
};

import { HomePageLayout } from "./layout/homepage/homepage.layout";
import { CONSTANTS } from "./utils/constants";

function App() {
  const [productData] = createResource(DEFAULT_QUERY, getProductData);

  // set device type
  if (window.innerWidth > CONSTANTS.mobileSize)
    setAppState({ ...appState, deviceType: CONSTANTS.deviceTypes.desktop });
  else setAppState({ ...appState, deviceType: CONSTANTS.deviceTypes.mobile });

  createEffect(async () => {
    // get homepage featured products after init render
    // these items are below the fold
    if (productData.loading || homepageProducts.featuredProducts.length) return;

    let featuredArr = [];
    let bestSellerArr = [];

    productData().forEach((prod) => {
      const reducedLocationsArr = new Set(prod.featuredLocations);
      if (reducedLocationsArr.has("featured_products")) featuredArr.push(prod);

      if (reducedLocationsArr.has("best_sellers")) bestSellerArr.push(prod);
    });

    setHomepageProducts({
      featuredProducts: featuredArr,
      bestSellers: bestSellerArr,
    });
  });

  return (
    <HomePageLayout productData={productData()} loading={productData.loading} />
  );
}

export default App;
