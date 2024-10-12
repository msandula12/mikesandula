import React from "react";
import { animated, config, useTransition } from "react-spring";

import FadeInSection from "./FadeInSection";

import * as styles from "./About.module.scss";

import { cx } from "../utils";

const About = ({ isActive }) => {
  const socialIconsTransition = useTransition(isActive, null, {
    from: { bottom: 40, right: 0, opacity: 0, position: "fixed" },
    enter: { bottom: 40, right: 32, opacity: 1, position: "fixed" },
    leave: { bottom: 40, right: 0, opacity: 0, position: "fixed" },
    config: config.gentle,
  });

  return (
    <div className={cx("page", styles.about)}>
      <FadeInSection>
        <h1>About</h1>
        <div className={cx("content", styles.aboutContent)}>
          <p>
            Hello! My name is Mike Sandula. I am a seasoned software engineer
            with over 8 years of experience crafting high-quality, user-centric
            websites and web applications with the latest technologies (I
            started using TypeScript way before it was cool).
          </p>
          <p>
            I'm a problem-solver (I still do my daily Wordle) with a proven
            track record of figuring things out. I love instilling best
            practices across engineering teams and working alongside product and
            design teams to ensure the best possible product.
          </p>
          <p>
            Prior to entering the tech industry, I worked as a copy editor for
            several newspapers throughout Southeast Michigan, so identifying
            bugs and maintaining clean code is second-nature to me.
          </p>
          <p>
            When I'm away from the keyboard, I can typically be found behind a
            drum set or a book, or beside my wife, our daughter, and our cat.
          </p>
          <p className={styles.contactMe}>
            <i>
              👋 Interested in working together or debating JavaScript vs.
              TypeScript (or, if you're a fellow drummer, Zildjian vs. Sabian)?
              Drop me a line at{" "}
              <a href="mailto:msandula@gmail.com">msandula@gmail.com</a>.
            </i>
          </p>
        </div>
      </FadeInSection>

      {/* SOCIAL ICONS */}
      {socialIconsTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              className={styles.socialIcons}
              key={key}
              style={props}
            >
              <a
                aria-label="LinkedIn"
                className={styles.linkedin}
                href="https://www.linkedin.com/in/mikesandula"
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                aria-label="GitHub"
                className={styles.github}
                href="https://github.com/msandula12"
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
              >
                <i className="fab fa-github-square" />
              </a>
              <a
                aria-label="Codepen"
                className={styles.codepen}
                href="https://codepen.io/msandula"
                rel="noopener noreferrer"
                target="_blank"
                title="CodePen"
              >
                <i className="fab fa-codepen" />
              </a>
            </animated.div>
          )
      )}
    </div>
  );
};

export default About;
