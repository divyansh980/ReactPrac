import React, { useContext } from 'react'
import { DataContext } from './UserContext'

const StoryContext = () => {
    const data1 = useContext(DataContext)

  return (
    <div>
      <h1>This is Story COntext pAge {data1.city}</h1>
    </div>
  )
}

export default StoryContext
