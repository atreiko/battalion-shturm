import React from 'react'
import { Link } from 'react-router-dom'

import styles from './UiButton.module.css'

const UiButton = ({ 
  title, 
  onClick, 
  path='#',
  theme='dark', 
  classes,
  disabled
}) => {
  return (
    <div className={styles.wrapper}>
      <button 
        type='submit'
        to={path}
        className={[styles.btn, styles.btnEffect, styles[theme], classes].join(' ')} 
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>

  )
}

export default UiButton

