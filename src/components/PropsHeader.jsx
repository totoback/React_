import React from 'react'

// props를 받는 페이지
// props = text
export default function PropsHeader({text}) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
