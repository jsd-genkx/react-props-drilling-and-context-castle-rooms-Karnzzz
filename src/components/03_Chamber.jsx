import React from 'react'
import Room from "./04_Room";
const Chamber = ({ message1, handleReply }) => {
  return (
    <div>
      <h1>Chamber</h1>
      <Room message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Chamber