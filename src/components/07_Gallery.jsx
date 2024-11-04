import React from 'react'
import Nook from './08_Nook'
const Gallery = ({ message1, handleReply }) => {
  return (
    <div>
        <h1>Gallery</h1>
        <Nook message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Gallery