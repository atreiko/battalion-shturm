import React, { useState } from 'react'
import { UiInput } from '../UI'

import styles from './Form.module.css'

// const EMAIL_REGEXP = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/+g

const validateForm = (values) => {
  const { login, password } = values
  const errors = {} 

  if (!login) {
    errors.login = 'This field is required'
  }

  if (password.length < 8) {
    errors.password = 'Password should contain at least 8 characters'
  }

  if (!password) {
    errors.password = 'This field is required'
  }

  return errors;
}

const Form = () => {
  const [values, setValues] = useState({
    login: '',
    password: ''
  })

  const register = e => {
    e.preventDefault()
    console.log(values);
  }

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={register} noValidate>
      <h4>Вхід</h4>
      <UiInput name='login' placeholder='login' onChange={handleChange} value={values.login} />
      <UiInput name='password' type='password' placeholder='password' onChange={handleChange} value={values.password} />
      <div>
        <button type='submit'>Підтвердити</button>
      </div>
    </form>
  )
}

export default Form