import React from 'react'

// 방법 1
export default function MultiProps(props) {
  // 방법 3
  // const {text,href,userID} = props;
  return (
    <div>
      <h1>{props.userID}님 반갑습니다.</h1>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}
// 방법 2
// export default function MultiProps({text,href,userID}) {
//   return (
//     <div>
//       <h1>{userID}님 반갑습니다.</h1>
//       <a href={href}>{text}</a>
//     </div>
//   )
// }
