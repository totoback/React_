import React, { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRander() {
  const [show, setShow] = useState(false);
  //안보여야 하니까 false
  return (
    <>
      {show && <PracticeTimer />}
      <button
        onClick={() => {
          setShow((cur) => !cur);
        }}
      >
        {show ? '숨기기' : '보이기'}
      </button>
    </>
  );
}
