import styles from "./hero.module.scss";
import appstyles from "../../styles/App.module.scss";
import { createSignal, onMount, onCleanup, splitProps } from "solid-js";

import { PreLoadImagesFromArray } from "../../utils/preload-images";
import { CONSTANTS } from "../../utils/constants";

const INTERVAL_TIMER = 4000;

const Hero = (props) => {
  const [local, rest] = splitProps(props, [
    "children",
    "imgUrlList",
    "slidesOn",
    "inView",
  ]);
  const [bgImgUrlOne, setUrlOne] = createSignal("bg/hero/hero-bg-intro.jpg");
  const [bgImgUrlTwo, setUrlTwo] = createSignal("bg/hero/hero-bg-intro.jpg");
  let imgUrlList = [local.imgUrlList[0]];
  let imgIndex = 0;
  let slide1Ref = undefined;
  let slide2Ref = undefined;
  let bgImageInterval = undefined;

  const setSlides = () => {
    if (!local.slidesOn || !slide1Ref || !slide2Ref) return;

    const slide1State = slide1Ref.hasAttribute("data-active");
    const slide2State = slide2Ref.hasAttribute("data-active");
    let index = imgIndex + 1;

    if (index >= imgUrlList.length) index = 0;
    // background slide
    if (slide1State === false) {
      slide1Ref.setAttribute("data-active", true);
      setUrlOne(imgUrlList[index]);
    } else {
      slide1Ref.removeAttribute("data-active");
    }
    // foreground slide
    if (slide2State === false) {
      slide2Ref.setAttribute("data-active", true);
      setUrlTwo(imgUrlList[index]);
    } else {
      slide2Ref.removeAttribute("data-active");
    }

    imgIndex = index;
  };

  function setUrl(resolvedImg, list = imgUrlList ? imgUrlList : []) {
    list.push(resolvedImg);
  }

  function setUrlList(list) {
    let urlList = [];
    if (window.innerWidth > CONSTANTS.mobileSize)
      urlList = list.map((item) => item.url + ".jpg");
    else urlList = list.map((item) => item.url + "-m.jpg");

    return urlList;
  }

  function onFirstImgComplete() {
    slide1Ref.classList.toggle("img-loaded");
    slide2Ref.classList.toggle("img-loaded");
    setSlides();
  }

  onMount(() => {
    const urlList = setUrlList(local.imgUrlList); // img list based on viewport size

    // preload images, onFirstImgComplete runs after first image loaded
    PreLoadImagesFromArray(urlList, setUrl, onFirstImgComplete);

    // set slides in an interval
    bgImageInterval = setInterval(() => setSlides(), INTERVAL_TIMER);

    setTimeout(() => {
      imgUrlList.shift();
    }, INTERVAL_TIMER); // remove the intro image from list
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
        ref={slide1Ref}
        class={[styles.load, styles.slide].join(" ")}
        data-active={true}
      >
        <img src={bgImgUrlOne()} alt="Gallery image one." />
      </div>

      <div ref={slide2Ref} class={[styles.load, styles.slide].join(" ")}>
        <img src={bgImgUrlTwo()} alt="Gallery image two." />
      </div>
    </div>
  );
};

export { Hero };
