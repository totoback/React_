import { Component } from "react";

//class형 함수
class BtnToNaver extends Component {
  render() {
    return (
      <div>
        <button>
          <a href="https://naver.com">네이버로 이동</a>
        </button>
      </div>
    );
  }
}
// function BtnToNaver(){
//   return(
//     <div>
//       <button><a href="https://naver.com">네이버로 이동</a></button>
//     </div>
//   )
// }

export default BtnToNaver;
