import React from 'react'
import Tower from "./02_Tower";
const Castle = ({ message1, handleReply }) => {
  return (
    <div>
        <h1>Castle</h1>
        <Tower message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Castle