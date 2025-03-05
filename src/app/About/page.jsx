import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <div>
         <Image src="/image.jpg" fill  alt="" className={styles.img}/>
        </div>
       
       <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>Digital Storytellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
       </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are we?</h1>
          <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Maecenas nec tellus elit. Vestibulum ullamcorper est non dolor sodales, laoreet sollicitudin odio blandit.
          Maecenas ultricies ex et elit feugiat,
          in efficitur purus tempor. Etiam dictum pulvinar consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Suspendisse turpis nulla, facilisis et ligula et, bibendum feugiat libero. Maecenas accumsan dignissim tincidunt. Quisque
          auctor eu nisl nec sagittis. Proin ac sapien ut est lacinia faucibus id a nisi. Vivamus elementum nulla eu fringilla ultricies. Sed egestas ex vel venenatis tempor.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
          Maecenas pharetra fringilla dui vitae congue. Vivamus feugiat eleifend congue. Donec condimentum sollicitudin nibh nec tempor. Phasellus ultricies imperdiet ante,
          a faucibus dui scelerisque non. Vivamus bibendum sapien volutpat vestibulum euismod. In semper ligula dolor, eget bibendum dolor ornare eget. Nulla eu maximus sapien.
          </p>
          <Button url="/Contact" text="Contact"/>
        </div>

      </div>
    </div>
  )
}

export default About
