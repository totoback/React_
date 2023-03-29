import React, { useRef, useState } from 'react';

// state, ref, var 특징을 체크하기
export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);
  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State:', countState);
  };

  // 증가를 기억을 해서 리렌더링시키면 증가
  const countUpRer = () => {
    countRef.current += 1;
    console.log('Ref:', countRef);
  };

  // variable은 기억을 하지 X, 리렌더링도 X, 최초값으로 초기화됨
  const countUpVar = () => {
    countVar += 1;
    console.log('Variable:', countVar);
  };

  const reRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Variavle: {countVar}</h1>
      <button onClick={countUpState}>State up</button>
      <button onClick={countUpRer}>countUpRer</button>
      <button onClick={countUpVar}>countUpVar</button>
      <button onClick={reRender}>reRender</button>
    </div>
  );
}
