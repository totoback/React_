import { useRef, useState } from "react";

export default function TestRef() {
  const [text, setText] = useState("안녕하세요");
  // 기존 DOM
  const onChangeText = (e) => {
    let inputText = e.target.value;
    setText(inputText);
  };

  // Ref함수형 변경
  const inputValue = useRef();
  const onChangeRef = () => {
    // console.log(inputValue);
    setText(inputValue.current.value);
  };
  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue}
        onChange={(e) => {
          onChangeText(e);
        }}
      />
      <input ref={inputValue} onChange={onChangeRef} />
    </div>
  );
}
