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
        <div className="content">
          <p>
            After graduating from Oakland University with a Bachelor of Arts in
            Journalism in 2010, Mike Sandula worked as a copy editor for several
            newspapers in Southeast Michigan.
          </p>
          <p>
            In 2016, Mike channeled his lifelong love of problem-solving and
            made the switch to programming, where his background as a copy
            editor has proven handy in identifying bugs and maintaining clean
            code. He attended the Front-End Bootcamp at Grand Circus in Detroit,
            landing his first developer job shortly after.
          </p>
          <p>
            Mike specializes in building frontends for large web applications
            using best practices with an eye towards code readability and
            maintainability.
          </p>
          <p>
            When he's not behind a computer, Mike can be found behind either his
            drum set or a book, or beside his wife and their daughter and cat.
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
