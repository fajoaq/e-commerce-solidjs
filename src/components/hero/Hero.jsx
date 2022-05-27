import { createSignal, createEffect, onCleanup } from "solid-js";
import styles from "./hero.module.scss";
import appstyles from "../../styles/App.module.scss";

// props- imgUrlList - Array of strings

const Hero = (props) => {
  const imgUrlList = props.imgUrlList;
  const [bgImgUrlOne, setUrlOne] = createSignal(imgUrlList[0]);
  const [bgImgUrlTwo, setUrlTwo] = createSignal(imgUrlList[0]);
  let imgIndex = 0;
  let slide1 = null;
  let slide2 = null;

  createEffect(() => {
    slide1 = document.getElementById("slide-1");
    slide2 = document.getElementById("slide-2");
  });

  const setSlides = () => {
    if (!slide1 || !slide2) return;

    let index = imgIndex + 1;
    let slide1State = slide1.hasAttribute("data-active");
    let slide2State = slide2.hasAttribute("data-active");

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

  const bgImageInterval = setInterval(() => setSlides(), 4200);

  onCleanup(() => clearInterval(bgImageInterval));

  return (
    <div class={[styles.container, appstyles.container__global].join(" ")}>
      <div
        class={[
          styles.inner_container,
          appstyles.width_constraint__global,
        ].join(" ")}
      >
        {props.children}
      </div>

      <div id="slide-1" class={styles.slide} data-active={true}>
        <img src={bgImgUrlOne()} alt="Gallery image one." />
      </div>

      <div id="slide-2" class={styles.slide}>
        <img src={bgImgUrlTwo()} alt="Gallery image two." />
      </div>
    </div>
  );
};

export { Hero };
