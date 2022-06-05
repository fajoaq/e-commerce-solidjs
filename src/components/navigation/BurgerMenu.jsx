import { splitProps } from "solid-js";
import styles from "./main-navigation.module.scss";

import { ShopButton } from "./ShopButton";
import { Footer } from "../footer/Footer";

let burgerRef = undefined;
let mobileMenuRef = undefined;

const Burger = (props) => {
  function toggleMobileMenu() {
    burgerRef.toggleAttribute("data-active");
    setTimeout(() => {
      mobileMenuRef.toggleAttribute("data-active");
      document.body.toggleAttribute("data-disabled");
    }, 260);
  }

  return (
    <div
      class={styles.burger}
      onClick={toggleMobileMenu}
      ref={burgerRef}
      {...props}
    />
  );
};

const MobileMenu = (props) => {
  const [local, rest] = splitProps(props, ["onClick"]);
  return (
    <div class={styles.mobile_menu} ref={mobileMenuRef} {...rest}>
      <button onClick={local.onClick}>Home</button>

      <button onClick={local.onClick}>About Us</button>

      <ShopButton onClick={local.onClick} />

      <button onClick={local.onClick}>Contact</button>

      <Footer isMainNav={true} />
    </div>
  );
};

export { Burger, MobileMenu };
