import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const blogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consect
          </h1>
          <p className={styles.desc}> 
          It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout. 
           The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
             content here', making it look like readable English.
           Many desktop publishing packages and web page editors
            now use Lorem Ipsum as their
          </p>
          <div className={styles.author}>
            <Image
             src="/image.jpg"
             height={20}
             width={20}
             alt=''
             className={styles.avatar}
            />
            <span className={styles.username}>Alice Paul</span>
          </div>

        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.jpg"
            fill
            alt=''
            className={styles.image}
          />
        </div>

      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        It is a long established fact that a reader will be distracted by the
           readable content of a page when looking at its layout. 
           The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
             content here', making it look like readable English.
           Many desktop publishing packages and web page editors
            now use Lorem Ipsum as their
        </p>
      </div>
    </div>
  )
}

export default blogPost
