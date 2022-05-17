import styles from "./service-banner.module.css";

const ServiceBanner = (props) => (
  <div class={props.class ? props.class : styles.container}>
    <div class={[styles.width_constraint, styles.inner_container].join(" ")}>
      Service Banner
    </div>
  </div>
);

export { ServiceBanner };
