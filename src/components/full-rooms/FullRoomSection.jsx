import styles from "./room-section.module.scss";
import appStyles from "../../styles/App.module.scss";
import { createEffect, For, splitProps } from "solid-js";

import { CONSTANTS } from "../../utils/constants";
import { SetImagesFromArray } from "../../utils/set-images-from-array";

const startingPriceList = {
  bedrooms: "149.99",
  "living rooms": "200.00",
};

const FullRoomSection = (props) => {
  const [local, others] = splitProps(props, ["featured"]);

  function setUrlList(list) {
    let urlList = [];
    if (window.innerWidth > CONSTANTS.mobileSize)
      urlList = list.map((item) => item.url + ".jpg");
    else urlList = list.map((item) => item.url + "-m.jpg");

    return urlList;
  }

  createEffect(() => {
    let imgNodeList = document.querySelectorAll(".full-room-bg > img");
    const urlList = setUrlList(local.featured);

    // sets the "src" attribute to the nodes in 1st argument, from url list in 2nd argument
    // optionaly takes a callback function
    SetImagesFromArray(imgNodeList, urlList);
  });

  return (
    <div
      class={[styles.container, appStyles.container__global].join(" ")}
      {...others}
    >
      <For each={local.featured}>
        {(item) => (
          <div class={styles.cta_container}>
            <h2>{item.type}</h2>
            <p>From &#36;{startingPriceList[item.type.toLowerCase()]}</p>
            <div
              class={[styles.cta_button, appStyles.cta_button__global].join(
                " "
              )}
            >
              <a href="#">Shop Now</a>
            </div>

            <div class={["full-room-bg", styles.bg].join(" ")}>
              <img
                class={styles.loading}
                src={CONSTANTS.imgPlaceholderSm}
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
