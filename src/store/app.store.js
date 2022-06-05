import { createStore } from "solid-js/store";

const [appState, setAppState] = createStore({
  deviceType: undefined,
  activeMenu: undefined,
});

export { appState, setAppState };
