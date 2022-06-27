import React from 'react'

import styles from './UiInput.module.css'

const UiInput = ({ 
  type = 'text', 
  placeholder,
  name,
  onChange,
  value
}) => {
  return (
    <div className={styles.wrapper}>
      <input 
        type={type} 
        placeholder={placeholder} 
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default UiInput