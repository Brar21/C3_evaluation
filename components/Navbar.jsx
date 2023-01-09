import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link href='/'><li>Varinder Brar</li></Link>
                <Link href='/projects'><li>Projects</li></Link>
                <Link href='/experience'><li>Experience</li></Link>
            </ul>
     
        </nav>
    )
  }
  
export default Navbar
  
