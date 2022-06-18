import React, { useState, useEffect } from 'react'
import PostService from '../../api/PostService'
import { Container, Title } from '../../components'
import { useFetching } from '../../hooks/useFetching'

const SoldiersPage = () => {
  const [cards, setCards] = useState([])
//   const [fetchCards, cardsLoading, cardsError] = useFetching(async () => {
//     const items = await PostService.getSoldiersPosts()
//     setCards(items.data)
//   })

//   useEffect(() => {
//     fetchCards()
// }, [])

  return (
    <div className='page'>
      <Container>
        <Title title='Склад морських піхотинців' />
        <ul>
          <li>
            <a>
              1
            </a>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default SoldiersPage