import React, { useEffect, useState } from 'react';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState();

  async function fetchData() {
    const resFetch = await fetch('http://localhost:4000', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (resFetch.status !== 200) return '안됨';
    const data = await resFetch.json();
    console.log(data);
    setDataArr((cur) => data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return <div>UseEffectFetch</div>;
}
