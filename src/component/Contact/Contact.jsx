import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")}  alt='Email Icon'/>
          <a href='mailto:lwamyohannes2018@gmail.com'>myemail@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")}  alt='Email Icon'/>
          <a href='https://www.linkedin.com/in/luwam-y-beyin-86b03b214/'>linkin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")}  alt='Email Icon'/>
          <a href='https://github.com/merinnaa'>github.com</a>
        </li>
      </ul>
    </footer>
  )
}
