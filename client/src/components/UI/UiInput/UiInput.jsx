import React from 'react'
import { useField } from 'formik';

import styles from './UiInput.module.css'

const UiInput = ({ field, form, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input 
        autoComplete='off' 
        {...field} 
        {...rest} 
      />
      { form.errors[field.name] && form.touched[field.name] && <span>{form.errors[field.name]}</span> }
      <label>{field.name}</label>
    </div>
  )
}

export default UiInput