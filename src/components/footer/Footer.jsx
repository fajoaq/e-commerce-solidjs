import styles from "./footer.module.scss";
import appstyles from "../../styles/App.module.scss";
import { splitProps } from "solid-js";

const AffiliatedLinks = () => (
  <p>
    Based on{" "}
    <a
      class={[appstyles.dark_bg_link, appstyles.affiliate_link].join(" ")}
      href={import.meta.env.VITE_DASHCLICKS_AFFILIATE_LINK}
      target="_blank"
      rel="noreferrer noopener"
    >
      DashClicks
    </a>{" "}
    design. Built by{" "}
    <a
      class={[appstyles.dark_bg_link, appstyles.affiliate_link].join(" ")}
      href="https://joaquinc.com"
      target="_blank"
      rel="noreferrer noopener"
    >
      Francis Joaquin
    </a>{" "}
    with science &#128640;
  </p>
);

const Footer = (props) => {
  const [local, rest] = splitProps(props, ["isMainNav"]);
  return (
    <div
      class={
        local.isMainNav
          ? [
              styles.container,
              appstyles.container__global,
              styles.main_nav,
            ].join(" ")
          : [styles.container, appstyles.container__global].join(" ")
      }
      {...rest}
    >
      <div class={styles.inner_container}>
        {local.isMainNav ? null : (
          <article class={styles.item}>
            <h3>Business Name</h3>
            <p>
              Shop furniture the smart way by choosing elegant, stylish
              furniture designs that are free to deliver and easy to assemble.
              Furnish your home the way you've always dreamed.
            </p>
          </article>
        )}

        <article class={styles.item}>
          {local.isMainNav ? null : <h3>Contact</h3>}
          <address>
            {local.isMainNav ? (
              <b>Get In Touch</b>
            ) : (
              <>
                213 Success Street, Suite 331
                <br /> Alpha, NJ 08865
                <br /> United States
              </>
            )}
            <br />{" "}
            <a href="tel:123-456-7890" class={appstyles.dark_bg_link}>
              (123)-456-7890
            </a>
            <br />{" "}
            <a href="mailto: business@email.com" class={appstyles.dark_bg_link}>
              business@email.com
            </a>
          </address>
        </article>

        {local.isMainNav ? null : (
          <article class={[styles.item, styles.footer_nav_container].join(" ")}>
            <h3>Menu</h3>
            <nav aria-label="Main">
              <button data-active>Home</button> {/* nav */}
              <button>About Us</button>
              <button>Shop</button>
              <button>Contact</button>
            </nav>
          </article>
        )}

        <article class={styles.item}>
          <h3>Follow Us</h3>
          <div class={styles.icons_container}>
            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/facebook.svg);" />
            </div>

            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/twitter.svg);" />
            </div>

            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/instagram.svg);" />
            </div>

            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/youtube.svg);" />
            </div>

            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/linkedin.svg);" />
            </div>

            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/yelp.svg);" />
            </div>

            <div class={styles.icon}>
              <span style="--bgImg: url(/icons/pinterest.svg);" />
            </div>
          </div>

          <AffiliatedLinks />
        </article>
      </div>
    </div>
  );
};

export { Footer };
