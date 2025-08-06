import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {

    const data = useContext(DataContext)
  return (
    <div>
      <h1>Section {data.city}</h1>
    </div>
  )
}

export default Section
