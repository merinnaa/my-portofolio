import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Luwam</h1>
      <p className={styles.description}> <h1 className={styles.title}>Hi, I'm Luwam</h1>
      <h3>FULL-STACK DEVELOPER</h3>
    I craft web applications that blend intuitive design with seamless functionality. 
  
           <p>Reach out if you'd like to learn 
           more</p> </p>
           <a href='mailto:lwamyohannes2018@gmail.com' className={styles.contactBtn}>Contact me</a> 
    </div>
    <img src={getImageUrl("hero/heroImage.png")} alt='her image of me' className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
   </section>
  )
}
