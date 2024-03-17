import React from "react";

import styles from "./Hero.module.css";
import Image from '../../images/hero/heroImage.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Himanshu</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer specializing in JavaScript, React.js, Node.js, Java, and Spring Boot. With a focus on problem-solving, I craft robust web applications, delivering seamless user experiences across the stack.
        </p>
        <div className={styles.buttonContainer}>
          <a href="https://www.linkedin.com/in/himanshu-prajapati-80a058217/" className={styles.contactBtn}>
            Resume
          </a>
          <a href="https://github.com/himanshu060301/" className={styles.contactBtn}>
            Github
          </a>
        </div>
      </div>

      <img
        src={Image}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};