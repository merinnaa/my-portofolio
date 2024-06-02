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
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Fronted Developer</h3>
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
              <h3>Ui Designer</h3>
              <p>
                I have designed multiple landing pages and have created 
                design systems as well  
              </p>
            </div>
          </li>
        </ul>
        </div>
        </section>
  )
}
