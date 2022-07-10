import React, { useState, useContext } from 'react'
import Logo from '../../assets/logo/Logo'
import ThemeSwitcher from '../../assets/theme-switcher/ThemeSwitcher'
import { Nav, Container } from '../../components'
import { UiButton, UiButtonLink } from '../UI'
import AuthProvider from '../../context/Auth/AuthProvider'

import styles from './Header.module.css'
import { AuthContext } from '../../context/Auth/AuthContext'
import Exit from '../../assets/exit/Exit'

const Header = () => {
  const auth = useContext(AuthContext)
  const isAuthrized = !!auth.user

  const signOut = () => {
    auth.setUser(null)
    auth.setTokenData(null)
  }

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.options}>
          <Nav />
          <ul className={styles.list}>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              { !isAuthrized 
                ? <UiButtonLink title='Вхід' path='auth/signin' /> 
                : <Exit onClick={signOut} />
              }
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header