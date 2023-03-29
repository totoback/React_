import React, { useState, useRef } from 'react';

//  랜덤 프로그램 만들기 실습
export default function NumberEx() {
  const [again, setAgain] = useState(true);
  const textEl = useRef();
  const answerInput = useRef();

  const randomNumber1 = Math.floor(Math.random() * 10); //1~9까지 랜덤 정수 생성
  const randomNumber2 = Math.floor(Math.random() * 10); //1~9까지 랜덤 정수 생성

  //arr['+', '-', '*'] 랜덤 돌리기
  const arr = ['+', '-', '*'];
  let randomArr = Math.floor(Math.random() * arr.length);
  randomArr = arr[randomArr];

  const clearInput = () => {
    answerInput.current.value = '';
    answerInput.current.focus();
  };

  // 랜덤 총 결과 출력
  const randomResult =
    (textEl.current = `${randomNumber1} ${randomArr} ${randomNumber2}`);

  const checkAnswer = () => {
    let answer = 0;
    if (randomArr === '+') {
      answer = randomNumber1 + randomNumber2;
    } else if (randomArr === '-') {
      answer = randomNumber1 - randomNumber2;
    } else if (randomArr === '*') {
      answer = randomNumber1 * randomNumber2;
    }
    if (answer === Number(answerInput.current.value)) {
      alert('정답입니다.');
      setAgain(!again);
      clearInput();
    } else {
      alert('틀렸습니다!');
      clearInput();
    }
  };
  return (
    <div>
      <h1>{randomResult}</h1>
      <input ref={answerInput} type="text" />
      <button onClick={checkAnswer}>정답 제출</button>
    </div>
  );
}
