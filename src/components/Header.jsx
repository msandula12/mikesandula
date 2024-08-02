import React, { useEffect, useState } from "react";
import { animated, config, useTransition } from "react-spring";
import { Link } from "gatsby";

import Menu from "./Menu";

import * as styles from "./Header.module.scss";

import { scrollToPage } from "../utils";

const PAGES = [
  {
    label: "About",
    page: "about",
  },
  {
    label: "Resume",
    page: "resume",
  },
];

const Header = ({ activePage }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(
    window.innerWidth < 1200
  );

  useEffect(() => {
    const detectScreenSize = () => {
      setShouldShowMenu(window.innerWidth < 768);
    };
    window.addEventListener("resize", detectScreenSize);
    return () => window.removeEventListener("resize", detectScreenSize);
  }, []);

  const menuTransition = useTransition(isShowingMenu, null, {
    from: { opacity: 0 },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.slow,
  });

  function closeMenu() {
    setIsShowingMenu(false);
    document.body.classList.remove("no-scroll");
  }

  function openMenu() {
    setIsShowingMenu(true);
    document.body.classList.add("no-scroll");
  }

  function getPositionOfUnderline() {
    const index = activePage
      ? PAGES.map((page) => page.page).indexOf(activePage)
      : 0;
    return (100 / PAGES.length) * index;
  }

  function handlePageNav(page) {
    if (isShowingMenu) {
      closeMenu();
    }
    scrollToPage(page);
  }

  return (
    <header className={styles.header}>
      <div className="flex-1">
        {/* LOGO */}
        <Link to="/">
          <div>
            <span className="code-operator">{"<"}</span>
            <span className="code-class">{"MikeSandula"}</span>
            <span className="code-operator">{" /> "}</span>
          </div>
        </Link>
      </div>

      {/* NAV - HEADER */}
      {!shouldShowMenu && (
        <nav>
          {PAGES.map((page) => (
            <a
              aria-label={page.label}
              href={`#/${page.page}`}
              key={page.page}
              onClick={() => handlePageNav(page.page)}
              style={{ width: `100 / ${PAGES.length}%` }}
            >
              {page.label}
            </a>
          ))}
          <hr style={{ marginLeft: `${getPositionOfUnderline()}%` }} />
        </nav>
      )}

      {/* NAV - ICON (OPEN OR CLOSE MENU) */}
      <div className={styles.navIcon}>
        <div className="icon icon-shadow text-right">
          {shouldShowMenu ? (
            <div className="clickable-padding" onClick={openMenu}>
              <i className="fas fa-bars" />
            </div>
          ) : (
            <a
              aria-label="Home"
              className="clickable-padding"
              href="#/home"
              onClick={() => handlePageNav("home")}
            >
              <i className="fas fa-chevron-up" />
            </a>
          )}
        </div>
      </div>

      {/* MENU OVERLAY */}
      {menuTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Menu
                activePage={activePage}
                onMenuClose={closeMenu}
                onPageNav={handlePageNav}
                pages={PAGES}
              />
            </animated.div>
          )
      )}
    </header>
  );
};

export default Header;
