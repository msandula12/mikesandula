import React from "react";

import * as styles from "./ProjectPreview.module.scss";

const ProjectPreview = ({ project }) => {
  return (
    <div className={styles.projectPreview}>
      <div className={styles.paneHeader}>App.jsx</div>
      <div className={styles.paneHeader}>Preview</div>
      <div className={styles.leftPane}>
        <div className="code-operator">
          {"<"}
          <span className="code-class">{"Project"}</span>
        </div>
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
            <a href={project.source} rel="noreferrer" target="_blank">
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
          <div className="indented-2" key={`${project.title}-${tech}`}>
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
          <span className="code-annotation">{project.description}</span>
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
      <div className={styles.rightPane}>
        <a href={project.href} rel="noreferrer" target="_blank">
          <img alt={project.description} src={`/${project.screenshot}`} />
        </a>
      </div>
    </div>
  );
};

export default ProjectPreview;
