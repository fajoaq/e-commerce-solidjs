import styles from "./footer.module.scss";
import appstyles from "../../styles/App.module.scss";

const Footer = (props) => (
  <div
    class={[styles.container, appstyles.container__global].join(" ")}
    {...props}
  >
    <div class={styles.inner_container}>
      <article class={styles.item}>
        <h3>Business Name</h3>
        <p>
          Shop furniture the smart way by choosing elegant, stylish furniture
          designs that are free to deliver and easy to assemble. Furnish your
          home the way you've always dreamed.
        </p>
      </article>

      <article class={styles.item}>
        <h3>Contact</h3>
        <address>
          123 Rich Street, Suite 221
          <br /> Miami, Florida 33101
          <br /> United States
          <br /> <a href="tel:123-456-7890">(123)-456-7890</a>
          <br /> <a href="mailto: business@email.com">business@email.com</a>
        </address>
      </article>

      <article class={[styles.item, styles.footer_nav_container].join(" ")}>
        <h3>Menu</h3>
        <nav aria-label="Main">
          <button data-active>Home</button> {/* nav */}
          <button>About Us</button>
          <button>Shop</button>
          <button>Contact</button>
        </nav>
      </article>

      <article class={styles.item}>
        <h3>Follow Us</h3>
        <div class={styles.icons_container}>
          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/facebook.svg);" />
          </div>

          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/twitter.svg);" />
          </div>

          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/instagram.svg);" />
          </div>

          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/youtube.svg);" />
          </div>

          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/linkedin.svg);" />
          </div>

          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/yelp.svg);" />
          </div>

          <div class={styles.icon}>
            <span style="--bgImg: url(/icons/pinterest.svg);" />
          </div>
        </div>
      </article>
    </div>
  </div>
);

export { Footer };
