import { Component } from "react";

class MainHeader extends Component{
  constructor(){
    super();
    this.cas = true;
  }

  render() {
    return(
      <h1>Hello, {this.cas ? "하하":"호호"} world</h1>
    )
  }
}

// function MainHeader() {
//   // function과 return 사이가 기능 작업하는 영역
//   const pororo = '뽀로로';
//   const friend = '친구들';
//   const arr = [1,2,3,4,5];
//   const cas = true;

//   return(
//     <div>
//       <h1>Hello, {pororo+friend} World!</h1>
//       <h1>Hello, {arr.map((el)=>el)} World!</h1>
//       <h1>{cas?"하하":"호호"}</h1>
//     </div>
//   )
// }

export default MainHeader;
