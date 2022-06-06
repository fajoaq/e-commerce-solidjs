import styles from "./product-preview.module.scss";
import appstyles from "../../../styles/App.module.scss";
import { For, splitProps } from "solid-js";

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
  let mainNavContainer = document.getElementById("main-nav-container");
  let iconContainer = document.getElementById("cart-icon-container");
  const [local, rest] = splitProps(props, [
    "children",
    "products",
    "inView",
    "loading",
  ]);

  let DUMMY_DATA = [];

  doXTimes(2, () => DUMMY_DATA.push(DUMMY_PRODUCT));

  function addToCart() {
    let newItem = {
      src: local.src,
      url: local.url,
      alt: local.alt,
      title: local.title,
      price: local.price,
    };
    setCartState([...cartState, newItem]);
    playCartAnim();
  }

  function playCartAnim() {
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
