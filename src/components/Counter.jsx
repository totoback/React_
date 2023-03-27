import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{marginTop:"20px"}}>
      <button onClick={()=>{setCount(count-1)}} style={{display:"inline"}}>-</button>
      <div style={{display:"inline",margin:"0 10px"}}>{count}</div>
      <button onClick={()=>{setCount(count+1)}} style={{display:"inline"}}>+</button>
    </div>
  )
}
