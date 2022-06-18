import React from 'react'
import { Link } from 'react-router-dom'

import styles from './UiButton.module.css'

const UiButton = ({ 
  title, 
  onClick, 
  path='#',
  theme='dark', 
  classes
}) => {
  return (
    <div className={styles.wrapper}>
      <Link 
        to={path}
        className={[styles.btn, styles.btn1, styles[theme], classes].join(' ')} 
        onClick={onClick}
      >
        {title}
      </Link>
    </div>

  )
}

export default UiButton

