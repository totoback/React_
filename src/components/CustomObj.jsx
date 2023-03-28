import React from "react";

export default function CustomObj(props) {
  if (props.obj) {
    const { name, age, nickName } = props.obj;
    return (
      <div>
        <h2>이름: {name}</h2>
        <h2>나이: {age}</h2>
        <h2>별명: {nickName}</h2>
      </div>
    );
  } else {
    return <div>데이터 없다.</div>;
  }
}
