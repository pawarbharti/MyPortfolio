import React from "react";
import styles from "./Education.module.css";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <ul className={styles.educationItems}>
        <li className={styles.educationItem}>
          <div className={styles.educationItemText}>
            <h3>Guru Jambheshwar University of Science and Technology</h3>
            <p>B.Tech in Information Technology | 2021-2024</p>
          </div>
        </li>
        <li className={styles.educationItem}>
          <div className={styles.educationItemText}>
            <h3>Government Polytechnic for Women, Faridabad</h3>
            <p>Diploma in Computer Engineering | 2018-2021</p>
          </div>
        </li>
      </ul>
    </section>
  );
};
