import styles from "./room-section.module.scss";
import appstyles from "../../styles/App.module.scss";

const FullRoomSection = (props) => (
  <div
    class={[styles.container, appstyles.container__global].join(" ")}
    {...props}
  >
    <div class={styles.cta_container} {...props}>
      <h2>Bedrooms</h2>
      <p>From 149.99</p>
      <div class={styles.cta_button}>
        <a>Shop Now</a>
      </div>

      <div class={styles.bg}>
        <img src="bg/bedroom-full-room.jpg" alt="Gallery image one." />
      </div>
    </div>

    <div class={styles.cta_container} {...props}>
      <h2>Living Rooms</h2>
      <p>From 149.99</p>
      <div class={styles.cta_button}>
        <a>Shop Now</a>
      </div>

      <div class={styles.bg}>
        <img src="bg/living-room-full-room.jpg" alt="Gallery image two." />
      </div>
    </div>
  </div>
);

export { FullRoomSection };
