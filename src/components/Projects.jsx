import React from "react";

import FadeInSection from "./FadeInSection";

import * as styles from "./Projects.module.scss";

import { cx, hyphenate } from "../utils";

const PROJECTS = [];

const Projects = () => {
  return (
    <div className={cx("page", styles.projects)}>
      <FadeInSection>
        <h1>Projects</h1>
        <div className="content">
          {PROJECTS.length > 0 ? (
            <ul>
              {PROJECTS.map((project) => (
                <li key={hyphenate(project.title)} />
              ))}
            </ul>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Projects;
