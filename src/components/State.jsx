import React, { useState } from 'react';

export default function State() {
  const [teacher, setTeacher] = useState('이효석');
  // 두번쨰 변수로 set을 많이 붙여서 사용함

  return (
    <div className='App'>
      <button onClick={()=>{setTeacher('tetz')}} style={{fontSize:"20px"}}>영어로</button>
      <br/>
      <span style={{fontSize:"20px"}}>{teacher}</span>
    </div>
  )
}

