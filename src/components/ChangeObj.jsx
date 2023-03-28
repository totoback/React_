import React from "react";
import { useState } from "react";

export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);

  let obj = props.objArr[index];

  const ChangeProfile = () => {
    if(index === props.objArr?.length - 1){
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  
  return (
    <div>
      <h2>이름: {obj.name}</h2>
      <h2>나이: {obj.age}</h2>
      <h2>별명: {obj.nickName}</h2>
      {/* <button onClick={()=>{setIndex(index + 1)}}>프로필 바꾸기</button> */}
      <button onClick={()=>{index === props.objArr.length -1 ? setIndex((cur)=> 0): setIndex((cur)=> cur+1)}}>프로필 바꾸기</button>
      <button onClick={ChangeProfile}>프로필 바꾸기</button>
      <hr />
    </div>
  );
}
