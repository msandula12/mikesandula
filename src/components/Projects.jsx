import React from "react";

import FadeInSection from "./FadeInSection";

import * as styles from "./Projects.module.scss";

import { cx, hyphenate } from "../utils";

const PROJECTS = [
  {
    description: "My personal website aka the site you're on right now.",
    href: "https://mikesandula.dev",
    source: "https://github.com/msandula12/mikesandula",
    tech: ["React", "Gatsby", "Sass", "React Spring"],
    title: "MikeSandula.dev",
  },
  {
    description:
      "A micro app for finding Google Fonts via natural language search.",
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
                <div key={hyphenate(project.title)}>
                  <div>
                    <span className="code-operator">{"<"}</span>
                    <span className="code-class">{"Project"}</span>
                    <div className="indented-1">
                      <span className="code-field">{"name"}</span>
                      <span className="code-operator">{"="}</span>
                      <span className="code-string">{`"${project.title}"`}</span>
                    </div>
                    <div className="indented-1">
                      <span className="code-field">{"url"}</span>
                      <span className="code-operator">{"="}</span>
                      <span className="code-string">
                        "
                        <a href={project.href} rel="noreferrer" target="_blank">
                          {project.href}
                        </a>
                        "
                      </span>
                    </div>
                    <div className="indented-1">
                      <span className="code-field">{"source"}</span>
                      <span className="code-operator">{"="}</span>
                      <span className="code-string">
                        "
                        <a
                          href={project.source}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {project.source}
                        </a>
                        "
                      </span>
                    </div>
                    <div className="indented-1">
                      <span className="code-field">{"tech"}</span>
                      <span className="code-operator">{"="}</span>
                      <span className="code-field">{"{"}</span>
                      <span className="code-method">{"["}</span>
                    </div>
                    {project.tech.map((tech, index) => (
                      <div
                        className="indented-2"
                        key={`${project.title}-${tech}`}
                      >
                        <span className="code-string">{`"${tech}"${
                          index < project.tech.length - 1 ? "," : ""
                        }`}</span>
                      </div>
                    ))}
                    <div className="indented-1">
                      <span className="code-method">{"]"}</span>
                      <span className="code-field">{"}"}</span>
                    </div>
                    <div>
                      <span className="code-operator">{"/>"}</span>
                    </div>
                    <div className="indented-1">
                      <span className="code-operator">{"<"}</span>
                      <span className="code-class">{"Description"}</span>
                      <span className="code-operator">{">"}</span>
                    </div>
                    <div className="indented-2">
                      <span className="code-annotation">
                        {project.description}
                      </span>
                    </div>
                    <div className="indented-1">
                      <span className="code-operator">{"</"}</span>
                      <span className="code-class">{"Description"}</span>
                      <span className="code-operator">{">"}</span>
                    </div>
                    <div>
                      <span className="code-operator">{"</"}</span>
                      <span className="code-class">{"Project"}</span>
                      <span className="code-operator">{">"}</span>
                    </div>
                  </div>
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
