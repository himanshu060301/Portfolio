import React from "react";

import styles from "./Contact.module.css";
import mailImage from "../../images/contact/emailIcon.png";
import linkedinImage from "../../images/contact/linkedinIcon.png";
import githubImage from "../../images/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mailImage} alt="Email icon" />
          <a href="mailto:himanshu.19002701@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinImage}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/himanshu-prajapati-80a058217/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={githubImage} alt="Github icon" />
          <a href="https://www.github.com/myname">Github</a>
        </li>
      </ul>
    </footer>
  );
};