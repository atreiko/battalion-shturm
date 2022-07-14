import React, { useState, useEffect } from 'react'
import PostService from '../../services/api/PostService'
import { Container, Title, Cards } from '../../components'
import Pagination from '../../components/pagination/Pagination'
import { useFetching } from '../../hooks/useFetching'

const SoldiersPage = () => {
  const [cards, setCards] = useState([])
  const [fetchCards, cardsLoading, cardsError] = useFetching(async () => {
    const items = await PostService.getSoldierPosts()
    setCards(items.data)
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(9)

  useEffect(() => {
    fetchCards()
  }, [])

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = cards.slice(firstCardIndex, lastCardIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  return (
    <div className='page'>
      <Container>
        <Title title='Склад морських піхотинців' />
        <Cards 
          path='soldiers'
          cards={currentCards} 
          cardsLoading={cardsLoading} 
          cardsError={cardsError} 
        />
        <Pagination 
          cardsPerPage={cardsPerPage} 
          totalCards={cards.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
      </Container>
    </div>
  )
}

export default SoldiersPage