import React from 'react'

export default function Ex() {
  const helloStr = 'Hello, first exercise';
  return (
    <div className='test' onClick={ () => { alert('클릭 됨') } } style={ {marginTop:"32px", backgroundColor:"skyblue"} }> { helloStr }</div>
  )
}
