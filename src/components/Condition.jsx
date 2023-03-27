import React, { useState } from 'react'

export default function Condition() {
  const [condition, setCondition] = useState(true);
  return (
    <div>
      <span style={{fontSize:"100px"}}>{condition ? "👍":"😂"}</span>
      <br/>
      <button onClick={()=>{setCondition(!condition)}}>컨디션 변경</button>
    </div>
  )
}
