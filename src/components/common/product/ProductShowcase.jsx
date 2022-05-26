import { For } from "solid-js";
import styles from "./product-preview.module.scss";

import { ProductPreview } from "./ProductPreview";

const ProductShowcase = (props) => (
  <div class={styles.container} {...props}>
    {props.children}

    <div class={styles.inner_container}>
      <For each={props.products}>
        {(item) => (
          <ProductPreview
            src={item.src}
            alt={item.alt}
            title={item.title}
            price={item.price}
          />
        )}
      </For>
    </div>
  </div>
);

export { ProductShowcase };
