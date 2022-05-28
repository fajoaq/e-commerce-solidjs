import styles from "./mailing-list.module.scss";

const CallToAction = (props) => (
  <div class={styles.cta_container} {...props}>
    <p>Want to Keep Up With Our Latest Deals &amp; Promotions?</p>
    <h2>Join Our Mailing List</h2>
    <input placeholder="Your Email Address" />
    <div class={styles.cta_button}>
      <a>Submit</a>
    </div>
  </div>
);

export { CallToAction };
