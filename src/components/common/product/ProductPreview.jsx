import styles from "./product-preview.module.scss";

const ProductPreview = (props) => {
  const src = props.src;
  const url = props.url || "";
  const alt = props.alt || "Picture of a featured product";
  const title = props.title;
  const price = props.price;

  return (
    <div class={styles.item} {...props}>
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <span>&dollar;{price}</span>
      <div class={styles.cta_button}>
        <a url={url}>Buy Now</a>
      </div>
    </div>
  );
};

export { ProductPreview };
