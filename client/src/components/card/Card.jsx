import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Card.module.css'

const Card = ({ id, path, title, image, rank, dateOfBirth, rip }) => {
  return (
    <li className={[styles.card, styles.cardEffect, styles[rip]].join(' ')} key={id}>
      <Link className={styles.link} to={`/${path}/${id}`}>
        <img src={image} alt={title} />
        <div className={styles.info}>
          <h4>{title}</h4>
          <div className={styles.footer}>
            <h6>{rank}</h6>
            <span>{dateOfBirth}</span>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Card