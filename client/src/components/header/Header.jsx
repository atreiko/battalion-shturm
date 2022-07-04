import React from 'react'
import Logo from '../../assets/logo/Logo'
import ThemeSwitcher from '../../assets/theme-switcher/ThemeSwitcher'
import { Nav, Container } from '../../components'
import { UiButton } from '../UI'

import styles from './Header.module.css'

const Header = () => {
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
              <UiButton title='Вхід' path={`auth/signin`} />
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header