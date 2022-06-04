import { appState, setAppState } from "./store/app.store";
import { HomePageLayout } from "./layout/homepage/homepage.layout";
import { CONSTANTS } from "./utils/constants";

function App() {
  // set device type
  if (window.innerWidth > CONSTANTS.mobileSize)
    setAppState({ ...appState, deviceType: CONSTANTS.deviceTypes.desktop });
  else setAppState({ ...appState, deviceType: CONSTANTS.deviceTypes.mobile });

  return <HomePageLayout />;
}

export default App;
