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
    const getDistanceFromTop = (ref) => {
      return ref?.getBoundingClientRect()?.top;
    };

    const determineActivePage = () => {
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
       * Return page with the lowest `fromTop`
       */
      const activePage = pages.reduce((acc, cur) => {
        return Math.abs(cur.fromTop) < Math.abs(acc.fromTop) ? cur : acc;
      }).page;

      if (page !== activePage) {
        setPage(activePage);
        setShouldShowHeader(activePage !== "home");
        window.location.hash = `/${activePage}`;
      }
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
