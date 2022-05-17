import styles from "./room-section.module.css";

const FullRoomSection = (props) => (
  <div class={styles.container} {...props}>
    <div class={styles.room_section}>Living Room</div>
    <div class={styles.room_section}>Bedroom</div>
  </div>
);

export { FullRoomSection };
