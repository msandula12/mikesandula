import React from "react";

import FadeInSection from "./FadeInSection";
import ProjectPreview from "./ProjectPreview";

import * as styles from "./Projects.module.scss";

import { cx, hyphenate } from "../utils";

const PROJECTS = [
  {
    description: "My personal website aka the site you're on right now.",
    href: "https://mikesandula.dev",
    screenshot: "mikesandula.png",
    source: "https://github.com/msandula12/mikesandula",
    tech: ["React", "Gatsby", "Sass", "React Spring"],
    title: "MikeSandula.dev",
  },
  {
    description:
      "A micro app for finding Google Fonts via natural language search.",
    href: "https://fontfinder.netlify.app/",
    screenshot: "fontfinder.png",
    source: "https://github.com/msandula12/font-finder",
    tech: [
      "React",
      "TypeScript",
      "Sass",
      "Vite",
      "Google Fonts API",
      "Open AI API",
    ],
    title: "FontFinder",
  },
];

const Projects = () => {
  return (
    <div className={cx("page", styles.projects)}>
      <FadeInSection>
        <h1>Projects</h1>
        <div className="content">
          {PROJECTS.length > 0 ? (
            <div className={styles.projectsList}>
              {PROJECTS.map((project) => (
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
