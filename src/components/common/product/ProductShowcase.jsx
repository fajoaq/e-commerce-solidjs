import styles from "./product-preview.module.scss";
import appstyles from "../../../styles/App.module.scss";
import { For, splitProps, createResource, createSignal } from "solid-js";

import { CONSTANTS } from "../../../utils/constants";
import { ProductPreview } from "./ProductPreview";
import { getProductData } from "../../../utils/get-product-data";
import { doXTimes } from "../../../utils/do-x-times";

const DUMMY_PRODUCT = {
  src: CONSTANTS.imgPreloadMd,
  alt: "                                ",
  title: "                       ",
  price: "   ",
};

const ProductShowcase = (props) => {
  const [local, rest] = splitProps(props, ["children", "query"]);
  const [query] = createSignal(local.query);
  const [productData] = createResource(query, getProductData);

  let DUMMY_DATA = [];

  doXTimes(2, () => DUMMY_DATA.push(DUMMY_PRODUCT));

  const ProductList = (props) => (
    <For each={props.data}>
      {(item) => (
        <ProductPreview
          src={item.src}
          alt={item.alt}
          title={item.title}
          price={item.price}
          loading={productData.loading}
        />
      )}
    </For>
  );

  return (
    <div
      class={[styles.container, appstyles.container__global].join(" ")}
      {...rest}
    >
      {local.children}

      <div class={styles.inner_container}>
        <ProductList
          data={productData() || DUMMY_DATA}
          loading={productData.loading}
        />
      </div>
    </div>
  );
};

export { ProductShowcase };
