import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import navItems from './navItems'
import { AuthContext } from '../../context/Auth/AuthContext'

import styles from './Nav.module.css'

const Nav = () => {
  const auth = useContext(AuthContext)
  const isAutorized = !!auth.user

  return (
    <nav>
      <ul className={styles.list}>
        {
          !isAutorized
          ? navItems
            .slice(0, 5)
            .map(({ id, path, title }) => (
              <li key={id} className={styles.item}>
                <Link to={path}>{title}</Link>
              </li>
            ))
          : navItems.map(({ id, path, title }) => (
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