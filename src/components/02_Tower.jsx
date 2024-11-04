import React from 'react'
import Chamber from "./03_Chamber";
const Tower = ({ message1, handleReply }) => {
  return (
    <div>
          <h1>Tower</h1>
          <Chamber message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Tower