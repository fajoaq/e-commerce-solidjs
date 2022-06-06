import styles from "./product-preview.module.scss";
import appstyles from "../../../styles/App.module.scss";
import { For, onMount, splitProps } from "solid-js";

import { cartState, setCartState } from "../../../store/cart.store";
import { CONSTANTS } from "../../../utils/constants";
import { doXTimes } from "../../../utils/do-x-times";
import { ProductPreview } from "./ProductPreview";

const DUMMY_PRODUCT = {
  src: CONSTANTS.imgPlaceholderMd,
  alt: "                                ",
  title: "                       ",
  price: "   ",
};

const ProductShowcase = (props) => {
  let mainNavContainer = undefined;
  let iconContainer = undefined;
  if (document) {
    mainNavContainer = document.getElementById("main-nav-container");
    iconContainer = document.getElementById("cart-icon-container");
  }

  const [local, rest] = splitProps(props, [
    "children",
    "products",
    "inView",
    "loading",
  ]);

  let DUMMY_DATA = [];

  doXTimes(2, () => DUMMY_DATA.push(DUMMY_PRODUCT));

  function addToCart(newItem) {
    const newCart = [...cartState.content, newItem];

    localStorage.setItem(
      CONSTANTS.cartStorageKey,
      JSON.stringify({ content: newCart })
    );
    setCartState({ ...cartState, content: newCart });
    playCartAnim();
  }

  function playCartAnim() {
    if (!mainNavContainer || !iconContainer) return;

    mainNavContainer.setAttribute("data-show", true);
    iconContainer.setAttribute("data-pop", false);

    window.requestAnimationFrame(function (time) {
      window.requestAnimationFrame(function (time) {
        iconContainer.setAttribute("data-pop", true);
      });
    });
  }

  return (
    <div
      class={[styles.container, appstyles.container__global].join(" ")}
      {...rest}
    >
      {local.children}

      <div class={styles.inner_container}>
        <For each={local.products || DUMMY_DATA}>
          {(item) => (
            <ProductPreview
              src={item.src}
              alt={item.alt}
              title={item.title}
              price={item.price}
              onClick={addToCart}
              loading={local.loading}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export { ProductShowcase };
