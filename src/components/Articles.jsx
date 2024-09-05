import React from "react";
import { Link } from "gatsby";

import FadeInSection from "./FadeInSection";

import * as styles from "./Articles.module.scss";

import { cx, hyphenate } from "../utils";

const ARTICLES = [
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
          <ul>
            {ARTICLES.map((article) => (
              <li className={styles.article} key={hyphenate(article.title)}>
                <Link to={article.href} target="_blank">
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Articles;
