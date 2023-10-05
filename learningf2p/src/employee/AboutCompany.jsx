import React from 'react'
import { useParams } from 'react-router-dom'


export const AboutCompany = () => {
  const id = useParams().id
  return (
    <div>
      <h1>AboutCompany -- {id}</h1>
    </div>
  )
}
