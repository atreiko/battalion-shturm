import React, { useState, useContext } from 'react'
import { ThemeContext, THEME_DARK, THEME_LIGHT } from '../../context/Theme/ThemeProvider'
import ThemeIcon from './ThemeIcon'

// import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const isTheme = useContext(ThemeContext)
  
  const toggle = () => {
    isTheme.theme === THEME_DARK 
    ? isTheme.change(THEME_LIGHT) 
    : isTheme.change(THEME_DARK)
  }

  return (
    <>
      <ThemeIcon type={isTheme.theme} onClick={toggle} />
    </>
  )
}

export default ThemeSwitcher