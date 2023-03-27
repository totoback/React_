import React from 'react'
import { useState } from 'react';

export default function State2() {
  let [strState, setStrState]= useState('init');

  function changeState(){
    strState += '-';
    console.log(strState);
  }
  function customSetStrState(){
    setStrState('변경 됨');
  }
  return (
    <div>
      <br/>
      <button onClick={()=>{setStrState(strState + "+")}}>반복!</button><br/>
      <button onClick={customSetStrState}>커스텀 함수 호출!</button><br/>
      <button onClick={()=>changeState()}>state강제 변경!</button>
      <br/>
      <div>{strState}</div>
    </div>
  )
}
