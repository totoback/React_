import Img from '../joung.png';
import { Component } from "react";

// class형 함수
class ImgComponent extends Component{
  render(){
    return(
    <img src={Img} alt="캐릭터" />
    )
  }
}

// function ImgComponent(){
//   return(
//     <img src={Img} alt="캐릭터" />
//     // src하고 바로 경로로는 접근 불가능
//   )
// }

export default ImgComponent;