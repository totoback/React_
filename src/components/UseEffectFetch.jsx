//백엔드에서 데이터 받아오기 실습
import React, { useEffect, useState } from 'react';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(resFetch);
    if (resFetch.status !== 200) return '안됨';
    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {dataArr.map((el, idx) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={idx}
          />
        );
      })}
    </>
  );
}
