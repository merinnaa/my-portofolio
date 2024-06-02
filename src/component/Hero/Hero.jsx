import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I`m Luwam</h1>
      <p className={styles.description}>I`m a full-stack developer with 5 years of experience using react and nodeJS.
        I  believe that the best web applications are those 
        that provide intuitive and enjoyable user experiences.
         My goal is to bridge the gap between design and 
         functionality, ensuring that every application I 
         build is not only visually appealing but also performs 
         efficiently. Continuous learning and staying updated
          with the latest industry trends is a core part of
           my work ethic.Reach out if you`d like to learn 
           more ` </p>
           <a href='mailto:lwamyohannes2018@gmail.com' className={styles.contactBtn}>Contact me</a> 
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt='her image of me' className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
   </section>
  )
}
