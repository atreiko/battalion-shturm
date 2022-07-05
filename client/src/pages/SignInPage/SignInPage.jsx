import React, { useState } from 'react'
import { Container, Form } from '../../components'
import Login from '../../components/login/Login'

import styles from './SignInPage.module.css'

const SignInPage = () => {

  return (
    <div className='page'>
      <Container>
        {/* <Form /> */}
        <Login />
      </Container>
    </div>
  )
}

export default SignInPage