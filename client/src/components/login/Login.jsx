import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import schema from './schema'
import { UiButton, UiInput } from '../UI'
import UserService from '../../services/api/UserService'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

import styles from './Login.module.css'

const Login = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const auth = useAuth()
  const navigate = useNavigate()

  const signIn = async (values) => {
    try {
      setIsLoading(true)
      const { token, user } = await UserService.SignIn(values)
      auth.setTokenData(token)
      auth.setUser(user)
      navigate('/')
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      onSubmit={signIn}
      validationSchema={schema}
    >
    {(formikProps) => (
      <div className={styles.wrapper}>
        <Form noValidate>
          <h3>Увійти</h3>
          <Field component={UiInput} name='login' type='text' />
          <Field component={UiInput} name='password' type='password' />
          <div>
            <UiButton disabled={formikProps.isSubmitting} title='Підтвердити' />
          </div>
        </Form> 
      </div>
    )}
    </Formik>
  )
}

export default Login