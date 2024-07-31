import React from "react";

import FadeInSection from "./FadeInSection";

import * as styles from "./Landing.module.scss";

import { cx, scrollToPage } from "../utils";

const Landing = () => {
  return (
    <div className={cx("page", styles.landing)}>
      <FadeInSection>
        <div className={styles.landingLogo}>
          <div className={styles.splitLogo}>
            <span className="code-operator">{"<"}</span>
            <span className="code-class">{"MikeSandula"}</span>
            <span className="code-operator">{" /> "}</span>
          </div>
          <div className={styles.splitLogo}>
            <span className="code-field">{" {"}</span>
            <span className="code-singleLineComment">
              {"/* Software Engineer */"}
            </span>
            <span className="code-field">{"}"}</span>
          </div>
        </div>
      </FadeInSection>

      <div className={cx("icon", "icon-shadow", styles.scrollDown)}>
        <a
          aria-label="Scroll down"
          href="#/about"
          className="clickable-padding"
          onClick={() => scrollToPage("about")}
        >
          <i className="fas fa-chevron-down" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
