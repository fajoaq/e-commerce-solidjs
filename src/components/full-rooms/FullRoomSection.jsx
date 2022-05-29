import styles from "./room-section.module.scss";
import appstyles from "../../styles/App.module.scss";
import { createEffect, For, splitProps } from "solid-js";

import { CONSTANTS } from "../../utils/constants";
import { SetImagesFromArray } from "../../utils/set-images-from-array";

const startingPriceList = {
  bedrooms: "149.99",
  "living rooms": "200.00",
};

const FullRoomSection = (props) => {
  const [local, others] = splitProps(props, ["featured"]);

  createEffect(() => {
    let imgNodeList = document.querySelectorAll(".full-room-bg > img");
    const urlList = local.featured.map((item) => item.url);

    // sets the "src" attribute to the nodes in 1st argument, from url list in 2nd argument
    // optionaly takes a callback function
    SetImagesFromArray(imgNodeList, urlList);
  });

  return (
    <div
      class={[styles.container, appstyles.container__global].join(" ")}
      {...others}
    >
      <For each={local.featured}>
        {(item) => (
          <div class={styles.cta_container}>
            <h2>{item.type}</h2>
            <p>From &#36;{startingPriceList[item.type.toLowerCase()]}</p>
            <div class={styles.cta_button}>
              <a>Shop Now</a>
            </div>

            <div class={["full-room-bg", styles.bg].join(" ")}>
              <img
                class={styles.loading}
                src={CONSTANTS.imgPreLoad}
                alt={`picture of featured ${item.type}`}
              />
            </div>
          </div>
        )}
      </For>
    </div>
  );
};

export { FullRoomSection };
