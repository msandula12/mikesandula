import React, { useEffect, useRef, useState } from "react";

import * as styles from "./FadeInSection.module.scss";

import { cx } from "../utils";

const FadeInSection = ({ children, disabled = false }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  const classNames = cx({
    [styles.fade]: !disabled,
    [styles.visible]: isVisible,
  });

  useEffect(() => {
    const section = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <div className={classNames} ref={ref}>
      {children}
    </div>
  );
};

export default FadeInSection;
