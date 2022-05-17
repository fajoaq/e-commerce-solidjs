import styles from "./main-navigation.module.css";

const MainNavigation = (props) => (
  <div class={props.class ? props.class : styles.container}>
    <div class={[styles.width_constraint, styles.inner_container].join(" ")}>
      Main Navigation
    </div>
  </div>
);

export { MainNavigation };
