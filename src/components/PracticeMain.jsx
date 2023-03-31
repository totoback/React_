import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function PracticeMain() {
  const [condition, setCondition] = useState('1번');
  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };
  // const [button, setBtn] = useState(false);
  // const [contents, setContents] = useState();
  // const onChange = () => {
  //   if (button === false) {
  //     setBtn(true);
  //   } else {
  //     setBtn(false);
  //   }
  // };
  // const changeContent = (text) => {
  //   setContents(text);
  // };

  return (
    <div>
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>{condition}</button>
    </div>

    // <div className="App">
    //   <h1>{contents}</h1>
    //   <button onClick={onChange}>{contents}</button>
    //   {button === true ? (
    //     <PracticeOne changeContent={changeContent} />
    //   ) : (
    //     <PracticeTwo changeContent={changeContent} />
    //   )}
    // </div>
  );
}
