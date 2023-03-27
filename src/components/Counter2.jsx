import React, { useState } from 'react'

export default function Counter2() {
  const [counter,setCounter] = useState(0)
  return (
    <div>
      <span onClick={ () => {setCounter(counter+1)} } style={ {fontSize:"100px"} }>{counter}{counter >= 10 ? "😎":"👍"}</span>
    </div>
  )
}
