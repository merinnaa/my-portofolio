import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
export const About = () => {
  return (
    <section className={styles.container} id='about'> 
      <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img 
          src={getImageUrl("about/aboutImage.png")} 
          alt = "me sitting with a laptop" 
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience 
                in building responsive and optimized sites  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend developer</h3>
              <p>
                I have experience developing fast and optimized back-end 
                systems and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Full-Stack Developer</h3>
            <p>
  I have developed and deployed multiple web applications, 
  focusing on creating scalable backends and intuitive, 
  user-friendly frontends.  

              </p>
            </div>
          </li>
        </ul>
        </div>
        </section>
  )
}
