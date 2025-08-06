import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer2 = () => {

    const data = useContext(DataContext)
  return (
    <div>
      <h1>Footer {data.college}</h1>
    </div>
  )
}

export default Footer2
