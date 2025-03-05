import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portifolio</h1>
          <p className={styles.Desc}>Hello</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/image.jpg" fill alt='' className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portifolio</h1>
          <p className={styles.Desc}>Hello</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/image.jpg" fill alt='' className={styles.img}/>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portifolio</h1>
          <p className={styles.Desc}>Hello</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/image.jpg" fill alt='' className={styles.img}/>
        </div>
      </div>
      
    </div>
  )
}

export default Category
