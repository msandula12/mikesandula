import React, { useState } from "react";
import { animated, useSpring } from "react-spring";

import * as styles from "./DownloadPdfButton.module.scss";

const DownloadPdfButton = () => {
  const [isHovering, setIsHovering] = useState(false);

  const hoverProps = useSpring({
    boxShadow: isHovering
      ? "0 0 16px 0 rgba(255, 255, 255, 0.3)"
      : "0 0 8px 0 rgba(255, 255, 255, 0.2)",
    transform: isHovering ? "scale(1.1)" : "scale(1)",
  });

  return (
    <animated.a
      className={styles.downloadPdf}
      href="/mike-sandula-resume.pdf"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={hoverProps}
      target="_blank"
    >
      View as PDF
    </animated.a>
  );
};

export default DownloadPdfButton;
