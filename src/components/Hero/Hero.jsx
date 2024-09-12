import React from "react";

import styles from "./Hero.module.css";
import Image from '../../images/hero/photo.jpg'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Himanshu</h1>
        <p className={styles.description}>
          I'm a Full Stack Developer specializing in JavaScript, React.js, Node.js, Java, and Spring Boot. With a focus on problem-solving, I craft robust web applications, delivering seamless user experiences across the stack.
        </p>
        <div className={styles.buttonContainer}>
          <a href="https://drive.google.com/file/d/1hDad7kfEGQLEz8qkwehFhcP05LKZhvU6/view?usp=drive_link" className={styles.contactBtn}>
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