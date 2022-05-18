import styles from "./hero.module.css";

const CallToAction = (props) => (
  <div class={styles.cta_container} {...props}>
    <p>Looking to Shop for Style?</p>
    <h1>Furnish the Home of Your Dreams.</h1>
    <p>
      Shop modern furniture selections that add beauty and elegance to any home.
    </p>
    <div class={styles.cta_button}>
      <a>Shop Now</a>
    </div>
  </div>
);

export { CallToAction };
