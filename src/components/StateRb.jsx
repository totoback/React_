import React, { useState } from "react";

export default function StateRb() {
  const [state, setState] = useState({teacher:'이효석'});
  console.log(state);
  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          state.teacher='tetz';
          const copyArr = {...state};
          setState(copyArr);
        }}>
        1로 만들기
      </button>
    </div>
  );
}
