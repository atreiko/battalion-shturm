import React from 'react'
import { Formik, Form, Field } from 'formik'
import schema from './schema'
// import { UiInput } from '../UI'

import UserService from '../../services/api/UserService'
import { UiInput } from '../UI'

const Login = () => {

  const signIn = async (values) => {
    console.log(values);
    try {
      const { token, user } = await UserService.SignIn(values)
  
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Formik
    initialValues={{
      login: '',
      password: '',
    }}
    onSubmit={signIn}
    // validate={validateForm}
    // validationSchema={schema}
  >
    {(formikProps) => (
      <Form noValidate>
        <h3>Увійти</h3>
        <Field component={UiInput} name='login' type='text' placeholder='Login' />
        <Field component={UiInput} name='password' type='password' placeholder='Password' />
        <div>
          <button type='submit' disabled={formikProps.isSubmitting}>Підтвердити</button>
        </div>
      </Form> 
    )}
  </Formik>
  )
}

export default Login