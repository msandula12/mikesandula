import React from "react";

import * as styles from "./Footer.module.scss";

import SimpleAnalyticsBadge from "./SimpleAnalyticsBadge";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.siteDetails}>
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
        </p>
        <p>Copyright &copy;{year} Mike Sandula.</p>
      </div>
      <div>
        <SimpleAnalyticsBadge />
      </div>
    </footer>
  );
};

export default Footer;
