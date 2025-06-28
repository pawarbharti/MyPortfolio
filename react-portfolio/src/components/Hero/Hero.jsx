import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  console.log(getImageUrl("hero/heroImage.png"))
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bharti Pawar</h1>
        <p className={styles.description}>
          I am a dedicated front-end developer with expertise in HTML, CSS, JavaScript, and React. With a passion for creating responsive, user-friendly web applications, I am committed to delivering high-quality solutions and contributing to innovative projects. I thrive in collaborative environments and am always eager to expand my knowledge and skills.
        </p>
        <a href="mailto:bhartipawar0008@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
       // src={getImageUrl("hero/heroImage.png")}
       src={"../../../assets/hero/heroImage.png"}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
