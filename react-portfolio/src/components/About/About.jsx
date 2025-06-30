import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/about/uiIcon.png"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Responsive and Intuitive User Interfaces</h3>
              <p>
                Demonstrate the ability to build seamless, mobile-responsive web
                applications that prioritize user experience through smooth
                animations, consistent design, and intuitive navigation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src="https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/about/serverIcon.png"
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Modern Front-End Technology Expertise</h3>
              <p>
                Highlight proficiency in frameworks such as React, complemented
                by a deep understanding of HTML5, CSS3, JavaScript, and modern
                development tools like Webpack and Git.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/about/cursorIcon.png"
             alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Clean Code and Performance Optimization</h3>
              <p>
                Emphasize a commitment to writing maintainable, scalable, and
                accessible code, as well as optimizing performance for enhanced
                user engagement and efficient load times.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
