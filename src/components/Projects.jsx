import React from "react";

import FadeInSection from "./FadeInSection";
import ProjectPreview from "./ProjectPreview";

import * as styles from "./Projects.module.scss";

import projects from "../projects.json";
import { cx, hyphenate } from "../utils";

const Projects = () => {
  return (
    <div className={cx("page", styles.projects)}>
      <FadeInSection>
        <h1>Projects</h1>
        <div className="content">
          {projects.projects.length > 0 ? (
            <div className={styles.projectsList}>
              {projects.projects.map((project) => (
                <ProjectPreview
                  key={hyphenate(project.title)}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Projects;
