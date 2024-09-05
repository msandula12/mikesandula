import React from "react";

import * as styles from "./Menu.module.scss";

import { cx } from "../utils";

const Menu = ({ activePage, onMenuClose, onPageNav, pages }) => {
  const menuPages = [
    {
      label: "Home",
      page: "home",
    },
    ...pages,
  ];

  return (
    <div className={styles.menu}>
      <div className={cx("icon icon-shadow", styles.menuClose)}>
        <div
          className="clickable-padding"
          onClick={onMenuClose}
          onKeyDown={onMenuClose}
          role="presentation"
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <nav>
        {menuPages.map((page) => (
          <a
            data-location="menu"
            href={`#/${page.page}`}
            key={page.page}
            onClick={() => onPageNav(page.page)}
            style={{ width: `${100 / pages.length}%` }}
          >
            {(activePage === page.page ||
              (!activePage && page.page === "home")) && (
              <div className={cx("icon", styles.activeIcon)}>
                <i className="fas fa-chevron-right" />
              </div>
            )}
            {page.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
