import React from 'react'
import Gallery from "./07_Gallery" 
const Corridor = ({ message1, handleReply }) => {
  return (
    <div>
      <h1>Corridor</h1>
      <Gallery message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Corridor