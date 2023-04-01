import React, { useEffect, useState } from 'react';
import BackendArr from './BackendArr';

export default function BackendData() {
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
    <div>
      {dataArr.map((el, idx) => {
        return <BackendArr title={el.title} contents={el.contents} key={idx} />;
      })}
    </div>
  );
}
