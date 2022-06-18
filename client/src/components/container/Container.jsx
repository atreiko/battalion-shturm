import React from 'react'

import styles from './Container.module.css'

const Container = ({ children, classes }) => {
  return (
    <div className={[styles.container, classes].join(' ')}>
      {children}
    </div>
  )
}

export default Container