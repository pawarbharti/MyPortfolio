import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
console.log(getImageUrl("nav/menuIcon.png"));
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        BHARTI  PAWAR
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? ("https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/nav/closeIcon.png")
              : ("https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#cv">CV</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
