import styles from "./product-preview.module.scss";
import { splitProps } from "solid-js";

import { cartState, setCartState } from "../../../store/cart.store";

const ProductPreview = (props) => {
  const [local, rest] = splitProps(props, [
    "src",
    "url",
    "alt",
    "title",
    "price",
    "loading",
  ]);

  function addToCart() {
    let newItem = {
      src: local.src,
      url: local.url,
      alt: local.alt,
      title: local.title,
      price: local.price,
    };
    setCartState([...cartState, newItem]);
  }

  return (
    <div
      class={[local.loading ? styles.loading : "img-loaded", styles.item].join(
        " "
      )}
      {...rest}
    >
      <img src={local.src} alt={local.alt || "Picture of a featured product"} />
      <h3>{local.title}</h3>
      <span>&dollar;{local.price}</span>
      <div class={styles.cta_button}>
        <a url={local.url || ""} onClick={addToCart}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export { ProductPreview };
