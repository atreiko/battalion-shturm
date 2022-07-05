import React from 'react'
import { useField } from 'formik';

import styles from './UiInput.module.css'

const UiInput = ({ name, type = 'text', ...rest }) => {

  const [field, meta, helpers] = useField(name);
  console.log('meta -->', meta);
  console.log('field -->', field);

  return (
    <div className={styles.wrapper}>
      <input 
        name={name}
        type={type} 
        autoComplete='off'
        // {...field}
        // {...rest}
      />
      {/* { meta.error && meta.touched && <span className='error'>{meta.error}</span> } */}
    </div>
  )
}

export default UiInput