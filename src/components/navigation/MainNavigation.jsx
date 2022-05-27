import styles from "./main-navigation.module.scss";
import appstyles from "../../styles/App.module.scss";

const MainNavigation = (props) => (
  <>
    <div class={styles.container_spacer} />
    <div
      class={[styles.container, appstyles.container__global].join(" ")}
      {...props}
    >
      <nav
        class={[
          styles.inner_container,
          appstyles.width_constraint__global,
        ].join(" ")}
        aria-label="Main"
      >
        <div class={[styles.item, styles.logo_container].join(" ")}>
          <p>Brand Name</p> {/* logo */}
        </div>

        <div class={[styles.item, styles.links_container].join(" ")}>
          <button data-active>Home</button> {/* nav */}
          <button>About Us</button>
          <button>Shop</button>
          <button>Contact</button>
        </div>

        <div class={[styles.item, styles.cart_container].join(" ")}>
          <span class={styles.cart_item_count}>3</span> {/* cart */}
        </div>
      </nav>
    </div>
  </>
);

export { MainNavigation };
