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
    label: "Projects",
    page: "projects",
  },
  {
    label: "Articles",
    page: "articles",
  },
  {
    label: "Resume",
    page: "resume",
  },
];

const Header = ({ activePage }) => {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [shouldShowMenu, setShouldShowMenu] = useState(window.innerWidth < 768);

  useEffect(() => {
    function detectScreenSize() {
      setShouldShowMenu(window.innerWidth < 768);
    }

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
    const activeNavElement = document.querySelector(
      `a[data-location="header"][href="#/${activePage}"]`
    );

    if (!activeNavElement) return {};

    return {
      left: activeNavElement.offsetLeft,
      width: activeNavElement.offsetWidth,
    };
  }

  function handlePageNav(page) {
    if (isShowingMenu) {
      closeMenu();
    }
    scrollToPage(page);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
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
          <ul>
            {PAGES.map((page) => (
              <li key={page.page}>
                <a
                  aria-label={page.label}
                  data-location="header"
                  href={`#/${page.page}`}
                  onClick={() => handlePageNav(page.page)}
                >
                  {page.label}
                </a>
              </li>
            ))}
            <hr style={getPositionOfUnderline()} />
          </ul>
        </nav>
      )}

      {/* NAV - ICON (OPEN OR CLOSE MENU) */}
      <div>
        <div className="icon icon-shadow text-right">
          {shouldShowMenu ? (
            <div
              className="clickable-padding"
              onClick={openMenu}
              onKeyDown={openMenu}
              role="presentation"
            >
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
