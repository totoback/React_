import React from 'react';

export default function BackendArr({ title, contents }) {
  return (
    <div>
      <h1>제목 : {title}</h1>
      <h1>컨텐츠 : {contents}</h1>
    </div>
  );
}
