import React from 'react'
import SecretRoom from './09_SecretRoom'
const Nook = ({ message1, handleReply }) => {
  return (
    <div>
      <h1>Nook</h1>
      <SecretRoom message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Nook