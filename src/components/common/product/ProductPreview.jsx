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
        <a url={local.url || "#"} onClick={local.onClick}>
          Buy Now
        </a>
      </div>
    </div>
  );
};

export { ProductPreview };
