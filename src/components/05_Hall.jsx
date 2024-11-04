import React from 'react'
import Corridor from "./06_Corridor"
const Hall = ({ message1, handleReply }) => {
  return (
    <div>
      <h1>Hall</h1>
      <Corridor message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Hall