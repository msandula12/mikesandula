import React from "react";

import * as styles from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        View the source code at{" "}
        <a
          className="code-field"
          href="https://github.com/msandula12/mikesandula"
          rel="noopener noreferrer"
          target="_blank"
        >
          github.com/msandula12/mikesandula
        </a>
        .
      </p>{" "}
      <p>Copyright &copy;{year} Mike Sandula.</p>
    </footer>
  );
};

export default Footer;
