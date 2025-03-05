"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links= [
    {
        id:1,
        title:"Home",
        url:"/",
    },
    {
        id:2,
        title:"Portfolio",
        url:"/Portfolio",
    },
    {
        id:3,
        title:"Blog",
        url:"/Blog",
    },
    {
        id:4,
        title:"About",
        url:"/About",
    },
    {
        id:5,
        title:"Contact",
        url:"/Contact",
    },
    {
        id:6,
        title:"Dashboard",
        url:"/Dashboard",
    },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/'className={styles.logo}>..Alyce's..</Link>
      <div className={styles.links}>
      <DarkModeToggle/>
      {links.map(link=>(
        <Link key={link.id} href={link.url} className={styles.link}>
          {link.title}
        </Link>
      ))}
      <button 
        className={styles.logout}
        onClick={()=>{
        console.log("Logged out");
      }}>
        Logout
        </button>
      </div>

    </div>
  )
}

export default Navbar
