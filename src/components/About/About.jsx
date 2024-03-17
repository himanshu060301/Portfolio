import React from "react";

import styles from "./About.module.css";
import cursorImage from "../../images/about/cursorIcon.png";
import serverIcon from "../../images/about/serverIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorImage} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm specialize in building responsive and optimized websites. With hands-on experience in frontend technologies like HTML, CSS, JavaScript, and frameworks such as React.js and Next.js. I design and develop user-centric interfaces that prioritize performance and usability.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I specialize in developing fast and optimized backend systems and APIs. With expertise in backend technologies such as Node.js, Java, and frameworks like Spring Boot and Express.js I architect and implement efficient server-side solutions that prioritize performance and scalability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};