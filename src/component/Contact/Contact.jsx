import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <form action="https://formspree.io/f/xoqgownw" method="POST">
          <input type="text" name="subject" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <input className={styles.button} id="submit" type="submit" value="Send" />
        </form>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href='mailto:lwamyohannes2018@gmail.com'>
            <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon' />
          </a>
        </li>
        <li className={styles.link}>
          <a href='https://www.linkedin.com/in/luwam-y-beyin-86b03b214/'>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon' />
          </a>
        </li>
        <li className={styles.link}>
          <a href='https://github.com/merinnaa'>
            <img src={getImageUrl("contact/githubIcon.png")} alt='GitHub Icon' />
          </a>
          <li className={styles.link}>
          <a href='https://x.com/YohannesLw69405'>
            <img src={getImageUrl("contact/twitterIcon.png")} alt='Twitter Icon' />
          </a>
        </li>
        </li>
      </ul>
      <div className={styles.copyright}>
        <p>&copy; 2024 copyright all rights reserved</p>
      </div>
    </footer>
  );
};
