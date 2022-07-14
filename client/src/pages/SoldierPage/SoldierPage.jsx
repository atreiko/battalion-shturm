import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Title } from '../../components'
import { UiLoader } from '../../components/UI'
import { useFetching } from '../../hooks/useFetching'
import PostService from '../../services/api/PostService'

const SoldierPage = () => {
  const [soldier, setSoldier] = useState(null)
  const { id } = useParams()
  const [fetchSoldier, soldierLoading, soldierError] = useFetching(async () => {
    const person = await PostService.getSoldierByID(id)
    setSoldier(person.data)
  })

  useEffect(() => {
    fetchSoldier()
  }, [id])

  if (soldierLoading) {
    return <UiLoader loading={soldierLoading} />
  }

  console.log(soldier);

  return (
    <div>
      {        
        soldier && (
          <Container>
            <Title>{soldier.title}</Title> 
            {soldierError && <h1>{soldierError}</h1>}
          </Container>
        )
      }

      {/* {
        Object.keys(soldier).length !== 0
        ? (
          <Container>
            <Title>{soldier.title}</Title> 
            {soldierError && <h1>{soldierError}</h1>}
          </Container>
        )
        : null
      }  */}
    </div>
  )
}

export default SoldierPage