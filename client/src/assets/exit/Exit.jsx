import React from 'react'
import exit from './shutdown.png'

import styles from './Exit.module.css'

const Exit = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <img className={styles.img} src={exit} alt="exit" />
    </div>
  )
}

export default Exit

