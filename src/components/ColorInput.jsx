import React, { useRef } from 'react';

export default function ColorInput() {
  const divEl = useRef();
  const inputEl = useRef();

  const bgEl = () => {
    divEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={divEl}>
      <input ref={inputEl} type="text" />
      <br />
      <button onClick={bgEl}>색 적용</button>
    </div>
  );
}
