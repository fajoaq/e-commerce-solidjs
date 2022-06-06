import styles from "./product-preview.module.scss";
import { splitProps } from "solid-js";

const ProductPreview = (props) => {
  const [local, rest] = splitProps(props, [
    "src",
    "url",
    "alt",
    "title",
    "price",
    "onClick",
    "loading",
  ]);

  function addToCart() {
    local.onClick({
      src: local.src,
      url: local.url,
      alt: local.alt,
      title: local.title,
      price: local.price,
    });
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
        <a url={local.url || "#"} onClick={addToCart}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export { ProductPreview };
