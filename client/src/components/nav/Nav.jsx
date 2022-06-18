import React from 'react'
import { Link } from 'react-router-dom'
// import Logo from '../../assets/logo/Logo'
import navItems from './navItems'

import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {
          navItems.map(({ id, path, title }) => (
            <li key={id} className={styles.item}>
              <Link to={path}>{title}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav