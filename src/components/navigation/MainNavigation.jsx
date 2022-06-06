import styles from "./main-navigation.module.scss";
import appstyles from "../../styles/App.module.scss";

import { CONSTANTS } from "../../utils/constants";
import { appState, setAppState } from "../../store/app.store";
import { cartState, setCartState } from "../../store/cart.store";
import { ShopButton } from "./ShopButton";
import { Burger, MobileMenu } from "./BurgerMenu";

const MainNavigation = (props) => {
  function toggleSubMenu(e) {
    e.currentTarget.toggleAttribute("data-active");
    appState.activeMenu?.toggleAttribute("data-active");
    setAppState({ ...appState, activeMenu: e.currentTarget });
  }

  function handleCartClick() {
    localStorage.removeItem(CONSTANTS.cartStorageKey);
    setCartState({ ...cartState, content: [] });
  }

  return (
    <>
      <div class={styles.container_spacer} />
      <div
        id="main-nav-container"
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
          {/* burger menu */}
          <Burger />
          {/* nav links desktop */}
          <div class={[styles.item, styles.links_container].join(" ")}>
            <button onClick={toggleSubMenu}>Home</button>

            <button onClick={toggleSubMenu}>About Us</button>

            <ShopButton onClick={toggleSubMenu} />

            <button onClick={toggleSubMenu}>Contact</button>
          </div>
          {/* cart */}
          <div
            id="cart-icon-container"
            class={[styles.item, styles.cart_container].join(" ")}
            onClick={handleCartClick}
          >
            <span class={styles.cart_item_count}>
              {cartState.content.length}
            </span>
          </div>
        </nav>
      </div>
      {/* mobile menu */}
      <MobileMenu onClick={toggleSubMenu} />
    </>
  );
};

export { MainNavigation };
