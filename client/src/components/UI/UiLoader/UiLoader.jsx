import React, { useState } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { css } from '@emotion/react'

import styles from './UiLoader.module.css'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const UiLoader = ({ loading }) => {

  return (
    <div className={styles.wrapper}>
      <BarLoader loading={loading} color='#f00' css={override} size={250} />
    </div>
  )
}

export default UiLoader