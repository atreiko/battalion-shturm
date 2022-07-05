import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UiInput } from '../UI'
import { withFormik } from 'formik';
import schema from './schema';
import axios from 'axios'
import UserService from '../../services/api/UserService';
import useAuth from '../../hooks/useAuth';

import styles from './Form.module.css'

const Form = ({ handleSubmit, handleChange, isAuth }) => {
  const [isLoading, setIsLoading] = useState(false)
  const auth = useAuth()
  const navigate = useNavigate()

  if (isAuth) {
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h4>Вхід</h4>
      <UiInput name='login' placeholder='login' onChange={handleChange} />
      <UiInput name='password' type='password' placeholder='password' onChange={handleChange} />
      <div>
        <button type='submit'>Підтвердити</button>
      </div>
    </form>
  )
}

const signIn = async (values, props) => {
  // values: {login: 'artem', password: '1234'}
  try {
    const { token, user } = await UserService.SignIn(values)

  } catch (error) {
    console.log(error.response.data);
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    login: '',
    password: '',
  }),
  handleSubmit: signIn,
  validationSchema: schema
})(Form)


