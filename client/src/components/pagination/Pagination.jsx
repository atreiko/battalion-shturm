import React from 'react'
import { UiButton } from '../UI'
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import styles from './Pagination.module.css'

const Pagination = ({ 
  cardsPerPage, 
  totalCards, 
  paginate, 
  prevPage, 
  nextPage,
  currentPage
}) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className={styles.wrapper}>
      <UiButton title='Назад' onClick={prevPage} disabled={currentPage <=1 ? true : false} />
      <ul>
        {
          pageNumbers && (
            pageNumbers.map(number => (
              <li key={number}>
                <UiButton classes={currentPage === number ? 'active' : ''} title={number} onClick={() => paginate(number)} />
              </li>
            ))
          )
        }
        
      </ul>
      <UiButton title='Вперед' onClick={nextPage} disabled={currentPage >= totalCards / cardsPerPage ? true : false} />
    </div>
  )
}

export default Pagination