"use client"
import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    
  return (
    <div className={styles.container}>
      <div>@2023 Lamina. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/instagram.png" width={15} height={15} className={styles.icon} alt="Alyce's"/>
        <Image src="/facebook.png" width={15} height={15} className={styles.icon}  alt="Alyce's"/>
        <Image src="/twitter.png" width={15} height={15} className={styles.icon} alt="Alyce's"/>
        <Image src="/youtube.png" width={15} height={15} className={styles.icon} alt="Alyce's"/>
      </div>
    </div>
  )
}

export default Footer
