import React from 'react'
import styles from "./styles/navbar.module.css"
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className={styles.main_div}>
      <div className={styles.outer_div_1}>
        <ul>
            <Link href="/" target='blank'><li>HOME</li></Link>
            <Link href=" https://atkitect.vercel.app/" target='blank'><li>SERVICES</li></Link>
            <Link href=" https://my-portfolio-nine-sand.vercel.app/" target='blank'><li>PORTFOLIO</li></Link>
            <Link href=" "><li>ABOUT US</li></Link>
            <Link href=" /"><li>OUR TEAM</li></Link>
            <Link href=" "><li>CONTACT</li></Link>
        </ul>
      </div>
    </div>
  )
}
