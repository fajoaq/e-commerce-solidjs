import styles from "./user-reviews.module.scss";

const UserReview = (props) => {
  const alt = props.alt || "Customer picture";
  const src = props.src;
  const name = props.name;
  const quote = props.quote;

  return (
    <article {...props}>
      <img src={src} alt={alt} />

      <div class={styles.quote_container}>
        <h3>{name}</h3>
        <q>{quote}</q>
      </div>
    </article>
  );
};

export { UserReview };
