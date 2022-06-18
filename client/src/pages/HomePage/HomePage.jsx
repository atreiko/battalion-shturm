import React from 'react'
import { Container } from '../../components'
import { UiButton } from '../../components/UI'

import banner from '../../assets/smpu.jpeg'

import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className='page'>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Батальон<span className={styles.accent}> Штурм</span></h1>
            <p className={styles.subtitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga sed laborum neque reiciendis! Obcaecati ipsa natus harum libero nihil veritatis.</p>
            <UiButton title='Підтримати' />
          </div>
          <div className={styles.image}>
            <img src={banner} alt='banner' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomePage