import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card';
import { UiLoader } from '../UI';

import styles from './Cards.module.css'

const Cards = ({ path, cards, cardsLoading, cardsError, rip }) => {
  console.log(path);
  return (
    <ul className={styles.cards}>
      {
        cards.map(({ id, title, image, rank, dateOfBirth, description , rip}) => (
          <Card 
            key={id}
            id={id}
            title={title}
            image={image}
            rank={rank}
            path={path}
            dateOfBirth={dateOfBirth}
            description={description}
            rip={rip}
          />
        ))
      }
      {cardsLoading && <UiLoader loading={cardsLoading} />}
      {cardsError && <h1>{cardsError}</h1>}
    </ul>
  )
}

export default Cards