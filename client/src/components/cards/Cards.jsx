import React from 'react'
import { Link } from 'react-router-dom'
import { UiLoader } from '../UI';

import styles from './Cards.module.css'

const Cards = ({ cards, cardsLoading, cardsError }) => {

  return (
    <ul className={styles.cards}>
      {
        cards.map(({ id, title, image, rank, dateOfBirth, description }) => (
          <li className={[styles.card, styles.cardEffect].join(' ')} key={id}>
            <Link className={styles.link} to={`/soldiers/${id}`}>
              <img src={image} alt={title} />
              <div className={styles.info}>
                <h4>{title}</h4>
                <div className={styles.hidden}>
                  <h6>{rank}</h6>
                  <span>{dateOfBirth}</span>
                </div>
              </div>
            </Link>
          </li>
        ))
      }
      {cardsLoading && <UiLoader loading={cardsLoading} />}
      {cardsError && <h1>{cardsError}</h1>}
    </ul>
  )
}

export default Cards