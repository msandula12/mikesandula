import React, { createRef, useEffect, useState } from "react";
import { animated, useTransition } from "react-spring";
import { Script } from "gatsby";

import "./styles.scss";
import * as styles from "./index.module.scss";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Resume from "../components/Resume";

const IndexPage = () => {
  const [page, setPage] = useState("");
  const [shouldShowHeader, setShouldShowHeader] = useState(false);

  const aboutPage = createRef();
  const homePage = createRef();
  const resumePage = createRef();

  useEffect(() => {
    let lastScrollTop = 0;
    const getDistanceFromTop = (ref) => {
      return ref && ref.getBoundingClientRect().top;
    };

    const determineActivePage = () => {
      const isScrollingUpwards = window.scrollY < lastScrollTop;

      const pages = [
        {
          page: "home",
          fromTop: getDistanceFromTop(homePage.current),
        },
        {
          page: "about",
          fromTop: getDistanceFromTop(aboutPage.current),
        },
        {
          page: "resume",
          fromTop: getDistanceFromTop(resumePage.current),
        },
      ];

      /**
       * If scrolling upwards, pick the page whose `top` is closest to zero
       * Otherwise, pick the page whose `top` is the biggest number
       * less than or equal to zero
       */
      const activePage = pages.reduce((acc, cur) => {
        return (
          isScrollingUpwards
            ? Math.abs(cur.fromTop) < Math.abs(acc.fromTop)
            : Math.floor(cur.fromTop) <= 0 && cur.fromTop > acc.fromTop
        )
          ? cur
          : acc;
      }).page;

      if (page !== activePage) {
        setPage(activePage);
        setShouldShowHeader(activePage !== "home");
        window.location.hash = `/${activePage}`;
      }
      lastScrollTop = window.scrollY;
    };

    window.addEventListener("scroll", determineActivePage);
    return () => window.removeEventListener("scroll", determineActivePage);
  }, [page, homePage, aboutPage, resumePage]);

  const headerTransition = useTransition(shouldShowHeader, null, {
    from: { opacity: 0, position: "fixed", top: -64 },
    enter: {
      opacity: 1,
      position: "fixed",
      top: 0,
      width: "100%",
    },
    leave: {
      opacity: 0,
      position: "fixed",
      top: -64,
    },
  });

  return (
    <main className={styles.index}>
      {/* LANDING */}
      <section id="home" ref={homePage}>
        <Landing />
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutPage}>
        <About isActive={page === "about"} />
      </section>

      {/* RESUME */}
      <section id="resume" ref={resumePage}>
        <Resume isActive={page === "resume"} />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* HEADER */}
      {headerTransition.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Header activePage={page} />
            </animated.div>
          )
      )}
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <html lang="en" />
    <link href="/icon.png" rel="icon" type="image/png" />
    <meta name="title" content="Mike Sandula" />
    <meta name="description" content="Mike Sandula's personal website" />
    <title>Mike Sandula</title>
    {/* Font Awesome */}
    <Script src="https://kit.fontawesome.com/128c2396ac.js" defer />
  </>
);
