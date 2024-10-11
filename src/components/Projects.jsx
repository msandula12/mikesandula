import React from "react";

import FadeInSection from "./FadeInSection";

import * as styles from "./Projects.module.scss";

import { cx, hyphenate } from "../utils";

const PROJECTS = [
  {
    description: (
      <>
        <p>
          My personal website aka the site you're on <em>right now</em>.
        </p>
      </>
    ),
    href: "https://mikesandula.dev",
    source: "https://github.com/msandula12/mikesandula",
    tech: ["React", "Gatsby", "Sass", "React Spring"],
    title: "MikeSandula.dev",
  },
  {
    description: (
      <>
        <p>A micro app for finding Google Fonts via natural language search.</p>
      </>
    ),
    href: "https://fontfinder.netlify.app/",
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
                <div className={styles.project} key={hyphenate(project.title)}>
                  <h4>
                    <a href={project.href} rel="noreferrer" target="_blank">
                      {project.title}
                    </a>
                  </h4>
                  <div className={styles.projectDescription}>
                    {project.description}
                  </div>
                  <ul className={styles.projectTech}>
                    {project.tech.map((tech) => (
                      <li
                        className={styles.projectTechPill}
                        key={`${project.name}-${tech}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={styles.projectSource}
                    href={project.source}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source <i className="fas fa-external-link-alt" />
                  </a>
                </div>
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
