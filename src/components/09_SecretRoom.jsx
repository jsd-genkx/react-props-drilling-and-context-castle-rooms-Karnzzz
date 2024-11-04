import React ,{useState} from 'react'

const SecretRoom = ({message1,handleReply}) => {
  const [reply, setReply] = useState("")
  return (
    <div>
      <h1>Secret Room</h1>
      <p> Message for JSD8 {message1}</p>
      <textarea name="" id="" value={reply} onChange={(e)=>setReply(e.target.value)}></textarea>
      <button onClick={()=>{handleReply(reply)}}>Send Reply</button>
    </div>
  )
}

export default SecretRoom


