import React from "react";

export default function ListChild(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.todo}</p>
    </div>
  );
}
