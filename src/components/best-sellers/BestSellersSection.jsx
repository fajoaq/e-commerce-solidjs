import styles from "./best-sellers.module.scss";

const BestSellerSection = (props) => (
  <div class={styles.container} {...props}>
    <p>Start By Browsing What People Love</p>
    <h2>Best Sellers</h2>

    <div class={styles.inner_container}>
      <div class={styles.item}>
        <img src="/src/assets/bg/featured-sofa.jpg" alt="picture of a sofa/" />
        <h3>Sofa</h3>
        <span>&dollar;1399</span>
        <div class={styles.cta_button}>
          <a>Buy Now</a>
        </div>
      </div>

      <div class={styles.item}>
        <img
          src="/src/assets/bg/featured-table.jpg"
          alt="picture of a table/"
        />
        <h3>Coffee Table </h3>
        <span>&dollar;149</span>
        <div class={styles.cta_button}>
          <a>Buy Now</a>
        </div>
      </div>

      <div class={styles.item}>
        <img src="/src/assets/bg/featured-bed.jpg" alt="picture of a bed/" />
        <h3>Queen Bed</h3>
        <span>&dollar;799</span>
        <div class={styles.cta_button}>
          <a>Buy Now</a>
        </div>
      </div>

      <div class={styles.item}>
        <img
          src="/src/assets/bg/featured-dresser.jpg"
          alt="picture of a dresser drawer/"
        />
        <h3>Dresser</h3>
        <span>&dollar;499</span>
        <div class={styles.cta_button}>
          <a>Buy Now</a>
        </div>
      </div>
    </div>
  </div>
);

export { BestSellerSection };
