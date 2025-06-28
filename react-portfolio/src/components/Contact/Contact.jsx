import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"../../../assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:bhartipawar0008@gmail.com" target="_blank">bhartipawar0008@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"../../../assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/bharti-pawar-5096b8250/" target="_blank">linkedin.com/Bharti Pawar</a>
        </li>
        <li className={styles.link}>
          <img src={"../../../assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/pawarbharti" target="_blank">github.com/pawarbharti</a>
        </li>
      </ul>
    </footer>
  );
};
