import React from "react";
import styles from "./DownloadCV.module.css";

export const DownloadCV = () => {
  return (
    <section className={styles.container} id="cv">
      <h2 className={styles.title}>Download CV</h2>
      <div className={styles.content}>
        <img
          src="https://raw.githubusercontent.com/pawarbharti/MyPortfolio/refs/heads/main/react-portfolio/assets/cv/downloadicon.png"
          alt="Download icon"
          className={styles.downloadImage}
        />
        <a
          href="/Bharti_Resume.pdf"
          download
          className={styles.downloadButton}
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};
