import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/Blog/testId" className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/image.jpg" fill alt='' className={styles.img}/>
          </div>
           <div className={styles.content}>
             <h1 className={styles.title}>Test</h1>
             <p className={styles.Desc}>Desc</p>
           </div>
      </Link>
      <Link href="/Blog/testId" className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/image.jpg" fill alt='' className={styles.img}/>
          </div>
           <div className={styles.content}>
             <h1 className={styles.title}>Test</h1>
             <p className={styles.Desc}>Desc</p>
           </div>
      </Link>
      <Link href="/Blog/testId" className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src="/image.jpg" fill alt='' className={styles.img}/>
          </div>
           <div className={styles.content}>
             <h1 className={styles.title}>Test</h1>
             <p className={styles.Desc}>Desc</p>
           </div>
      </Link>
    </div>
  )
}

export default Blog
