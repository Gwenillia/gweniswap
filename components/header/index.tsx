import React from 'react'
import styles from 'styles/modules/Header.module.css'
import { navLinks } from "utils/navLinks"
import NavLink from 'components/navLink'
import Signin from 'components/header/signin'

const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <div className={styles.navContainer}>
        <NavLink href='/'>
          <span className={styles.logo}>g$wap</span>
        </NavLink>
        <nav className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} activeClassName={styles.active}>
              <span className={styles.navLink}>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className={styles.user}>
        <button className='secondaryBtn' type='button' disabled>
          <span className='secondaryBtnText'>0 CPA</span>
        </button>
        <Signin />
      </div>
    </div>
  )
}

export default Header
