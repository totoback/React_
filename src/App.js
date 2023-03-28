/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import BtnToNaver from './components/BtnToNaver';
import ImgComponent from './components/ImgComponent';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionComponent';
import Inline from './components/Inline';
import EventHandle from './components/Eventhandle';
import Ex from './components/Ex';
import State from './components/State';
import State2 from './components/State2';
import Counter from './components/Counter';
import Condition from './components/Condition';
import Counter2 from './components/Counter2';
import ClassState from './components/ClassState';
import StateVar from './components/StateVar';
import StateRb from './components/StateRb';
import ListComponent from './components/ListComponent'
import PropsHeader from './components/PropsHeader';
import MultiProps from './components/MultiProps';
import ClassProps from './components/ClassProps'
import MapProps from './components/MapProps';
import CustomList from './components/CustomList';
import CustomObj from './components/CustomObj';
import Ex5 from './components/Ex5';


export default function App() {
  // js 함수 영역
  // const str = 'Go Naver';
  // const nameArr =['뽀로로','루피','크롱이']
  // const pororoObj = {
  //   name: '뽀로로',
  //   age:'5',
  //   nickName:'뽀롱',
  // }

  return (
    // html영역
    <div className="App">
      {/* <State2/> */}
      {/* <Counter2/> */}
      {/* <State /> */}
      {/* <ClassState/> */}
      {/* <StateVar/> */}
      {/* <Condition/> */}
      {/* <StateRb/> */}
      {/* <MapProps /> */}
      <Ex5/>
      {/* <CustomList /> */}
      {/* <CustomObj obj={pororoObj}/> */}
      {/* <ListComponent/> */}
      {/* <PropsHeader text = 'Hello, props World'/>
      <PropsHeader text = 'Hello, props World2'/>
      <PropsHeader text = 'Hello, props World3'/> */}
      {/* <MultiProps text = {str} href='https://naver.com' userID='tetz'/> */}
      {/* <ClassProps name="뽀로로" age="5" nickName="pororo"/> */}
    </div>
  );
}

