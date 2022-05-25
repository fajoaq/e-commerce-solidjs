import styles from "./main-navigation.module.scss";

const MainNavigation = (props) => (
  <>
    <div class={styles.container_spacer} />
    <div class={styles.container} {...props}>
      <div class={[styles.width_constraint, styles.inner_container].join(" ")}>
        <div class={[styles.item, styles.logo_container].join(" ")}>
          <p>Brand Name</p> {/* logo */}
        </div>

        <div class={[styles.item, styles.links_container].join(" ")}>
          <button>Home</button> {/* nav */}
          <button>About Us</button>
          <button>Shop</button>
          <button>Contact</button>
        </div>

        <div class={[styles.item, styles.cart_container].join(" ")}>
          <span class={styles.cart_item_count}>3</span> {/* cart */}
        </div>
      </div>
    </div>
  </>
);

export { MainNavigation };
