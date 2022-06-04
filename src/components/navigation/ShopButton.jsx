import styles from "./main-navigation.module.scss";
import { ButtonWithSubMenu, Button } from "./Buttons";

const ShopButton = (props) => (
  <ButtonWithSubMenu
    class={[styles.button_with_sub, styles.top_menu].join(" ")}
    title="Shop"
    {...props}
  >
    <ButtonWithSubMenu
      title="Living Room"
      class={[styles.button_with_sub, styles.middle_menu].join(" ")}
    >
      <Button title="Sofa" />
      <Button title="Chairs" />
      <Button title="Tables" />
    </ButtonWithSubMenu>

    <ButtonWithSubMenu
      title="Bedrooms"
      class={[styles.button_with_sub, styles.middle_menu].join(" ")}
    >
      <Button title="Beds" />
      <Button title="Dressers" />
    </ButtonWithSubMenu>

    <ButtonWithSubMenu
      title="Dining"
      class={[styles.button_with_sub, styles.middle_menu].join(" ")}
    >
      <Button title="Dining Tables" />
      <Button title="Dining Chairs" />
    </ButtonWithSubMenu>

    <ButtonWithSubMenu
      title="Office"
      class={[styles.button_with_sub, styles.middle_menu].join(" ")}
    >
      <Button title="Desks" />
      <Button title="Office Chairs" />
    </ButtonWithSubMenu>

    <Button title="Outdoors" />
  </ButtonWithSubMenu>
);

export { ShopButton };
