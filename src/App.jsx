import { appState, setAppState } from "./store/app.store";
import { onMount } from "solid-js";

import { CONSTANTS } from "./utils/constants";
import { getScrollDirection } from "./utils/get-scroll-direction";
import { HomePageLayout } from "./layout/homepage/homepage.layout";
import { MainNavigation } from "./components/navigation/MainNavigation";

const toggleDistance = 100;
let navRef = undefined;
let yValue = 0;
let direction = 0;

function App() {
  // set device type
  // this may throw an error if ever rendered on the server
  if (window?.innerWidth > CONSTANTS.mobileSize)
    setAppState({ ...appState, deviceType: CONSTANTS.deviceTypes.desktop });
  else setAppState({ ...appState, deviceType: CONSTANTS.deviceTypes.mobile });

  function toggleNavPopper() {
    navRef.toggleAttribute("data-active");
  }
  function triggerNavPopper() {
    const d = yValue - window.scrollY; // distance between values
    if (Math.abs(d) < toggleDistance) return;

    direction = getScrollDirection(yValue);

    if (direction === -1) navRef.setAttribute("data-show", false);
    else navRef.setAttribute("data-show", true);

    yValue = window.scrollY.toFixed(2);
  }

  onMount(() => {
    document.body.onscroll = triggerNavPopper;
  });

  return (
    <div onScroll={triggerNavPopper}>
      <MainNavigation ref={navRef} />
      {/* nav popper actives/deactivates depending on active state and scroll direction */}
      {/* above/below the fold */}
      <HomePageLayout toggleNavPopper={toggleNavPopper} />
    </div>
  );
}

export default App;
