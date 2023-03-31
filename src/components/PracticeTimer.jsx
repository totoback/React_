import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimer() {
  const [render, setRender] = useState(true); //컴포넌트를 리렌더 시킨다.
  const time = useRef(0);
  const showBtn = () => {
    setRender(!render);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      //setInterval함수를 통해서 1초씩 시간 증가시키기
      time.current += 1;
      console.log(`타이머 실행중 : ${time.current + 1}`);
    }, 1000);
    //1초에 한번씩 1씩 증가하도록 만들기

    return () => {
      clearInterval(timer);
      console.log('타이머 종료');
      //clearInterval로 타이머를 멈춘다.
    };
  }, []);
  //마운트될때 한번만 실행해야 하기에 []빈배열을 넣어준다.
  return (
    <>
      <h1>{time.current}</h1>
      <button onClick={showBtn}>시간 저장</button>
      {/* <button
        onClick={() => {
          (cur) => !cur;
        }}
      >
        시간 저장
      </button> */}
    </>
  );
}
