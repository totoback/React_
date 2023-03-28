import React from "react";
import MapProps2 from "./MapProps2";

export default function MapProps() {
  const items = [
    {
      item: "PS5",
      price: "685,000원",
    },
    {
      item: "에어 프라이어",
      price: "50,000원",
    },
    {
      item: "사세 치킨윙",
      price: "11,500원",
    },
  ];
  return (
    <div>
      {/* 배열 데이터를 리액트로 그리는 방법1 */}
      {items.map((el, index) => <MapProps2 item={el.item} price={el.price} key={index} />)}
      
      {/* 배열 데이터를 리액트로 그리는 방법2 */}
      {items.map((el, index) => {
        return(
          <div key={index}>
          <hr/>
          <h2>품목명 : {el.item}</h2>
          <p>가격 : {el.price}</p>
        </div>)
      })}
      
    </div>
  );
}
