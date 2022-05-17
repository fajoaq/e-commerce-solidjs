import styles from "./hero.module.css";

const Hero = (props) => (
  <div class={props.class ? props.class : styles.container}>
    <div class={[styles.width_constraint, styles.inner_container].join(" ")}>
      {props.children}
    </div>
  </div>
);

export { Hero };
