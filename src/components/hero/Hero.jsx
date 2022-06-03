import styles from "./hero.module.scss";
import appstyles from "../../styles/App.module.scss";
import { createSignal, createEffect, onCleanup, splitProps } from "solid-js";

import { PreLoadImagesFromArray } from "../../utils/preload-images";
import { CONSTANTS } from "../../utils/constants";

const Hero = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "imgUrlList",
    "slidesOn",
    "inView",
  ]);
  const [bgImgUrlOne, setUrlOne] = createSignal(CONSTANTS.imgPlaceholderSm);
  const [bgImgUrlTwo, setUrlTwo] = createSignal(CONSTANTS.imgPlaceholderSm);
  let imgUrlList = [];
  let imgIndex = 0;
  let slide1 = undefined;
  let slide2 = undefined;
  let bgImageInterval = undefined;

  const setSlides = () => {
    if (!local.slidesOn || !slide1 || !slide2) return;

    const slide1State = slide1.hasAttribute("data-active");
    const slide2State = slide2.hasAttribute("data-active");
    let index = imgIndex + 1;

    if (index >= imgUrlList.length) index = 0;
    // background slide
    if (slide1State === false) {
      slide1.setAttribute("data-active", true);
      setUrlOne(imgUrlList[index]);
    } else {
      slide1.removeAttribute("data-active");
    }
    // foreground slide
    if (slide2State === false) {
      slide2.setAttribute("data-active", true);
      setUrlTwo(imgUrlList[index]);
    } else {
      slide2.removeAttribute("data-active");
    }

    imgIndex = index;
  };

  function setUrl(resolvedImg, list = imgUrlList ? imgUrlList : []) {
    list.push(resolvedImg);
  }
  function onCompleteImgFetch() {
    slide1.classList.toggle("img-loaded");
    slide2.classList.toggle("img-loaded");
    setSlides();
  }

  createEffect(() => {
    slide1 = document.getElementById("slide-1");
    slide2 = document.getElementById("slide-2");
    const urlList = local.imgUrlList.map((item) => item.url);

    // preload images, onComplete fires after first image is preloaded
    PreLoadImagesFromArray(urlList, setUrl, onCompleteImgFetch);
    bgImageInterval = setInterval(() => setSlides(), 4000);
  });

  onCleanup(() => clearInterval(bgImageInterval));

  return (
    <div
      class={[styles.container, appstyles.container__global].join(" ")}
      {...rest}
    >
      <div
        class={[
          styles.inner_container,
          appstyles.width_constraint__global,
        ].join(" ")}
      >
        {local.children}
      </div>

      <div
        id="slide-1"
        class={[styles.load, styles.slide].join(" ")}
        data-active={true}
      >
        <img src={bgImgUrlOne()} alt="Gallery image one." />
      </div>

      <div id="slide-2" class={[styles.load, styles.slide].join(" ")}>
        <img src={bgImgUrlTwo()} alt="Gallery image two." />
      </div>
    </div>
  );
};

export { Hero };
