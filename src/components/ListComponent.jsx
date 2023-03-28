import React from "react";
// import Modal from "./Modal";
import ListChild from "./ListChild";

export default function ListComponent() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      todo: "State 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      todo: "Lv 0 정복 가즈아",
    },
    {
      title: "한강가기",
      todo: "경품 타기",
    },
    {
      title: "test",
      todo: "test2",
    },
  ];
  return (
    <div>
      <h1>오늘 해야할 일</h1>
      {/* <Modal /> */}
      <hr />
      {/* 방법1 */}
      {dataArr.map((el, index) => <ListChild title={el.title} todo={el.todo} key={index} />)}
      {/* 방법2 */}
      {dataArr.map((el, index) => {
        return(
          <div key={index}>
            <hr/>
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        )
      })}
      {/* return 이 올때 {}를 생략 가능 */}
      <hr />
      {/* <ListChild title={dataArr[1].title} todo={dataArr[1].todo} /> */}
    </div>
  );
}
