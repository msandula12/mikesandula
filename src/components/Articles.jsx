import React from "react";

import FadeInSection from "./FadeInSection";

import * as styles from "./Articles.module.scss";

import { cx, hyphenate } from "../utils";

const ARTICLES = [
  {
    href: "https://dev.to/msandula12/using-pow-and-sqrt-in-css-to-make-shapes-with-shapes-1ma0",
    title: "Using pow() and sqrt() in CSS to make shapes with shapes",
  },
  {
    href: "https://dev.to/msandula12/how-to-create-typography-tokens-for-a-design-system-using-sass-mixins-5elb",
    title:
      "How to create typography tokens for a design system using Sass mixins",
  },
];

const Articles = () => {
  return (
    <div className={cx("page", styles.articles)}>
      <FadeInSection>
        <h1>Articles</h1>
        <div className="content">
          {ARTICLES.length > 0 ? (
            <ul>
              {ARTICLES.map((article) => (
                <li className={styles.article} key={hyphenate(article.title)}>
                  <a href={article.href} rel="noreferrer" target="_blank">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>Coming soon...</p>
          )}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Articles;
