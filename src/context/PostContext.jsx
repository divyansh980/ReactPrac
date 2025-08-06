import React, { useContext } from 'react'
import { DataContext } from './UserContext'

const PostContext = () => {

    const data = useContext(DataContext)

  return (
    <div>
      <h1>This is Post Context Page {data.username}</h1>
    </div>
  )
}

export default PostContext
