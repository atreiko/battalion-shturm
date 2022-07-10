import React, { useState } from 'react'
import { Container, Login } from '../../components'

import styles from './SignInPage.module.css'

const SignInPage = () => {

  return (
    <div className='page'>
      <Container>
        <Login />
      </Container>
    </div>
  )
}

export default SignInPage