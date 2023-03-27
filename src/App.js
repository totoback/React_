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


export default function App() {
  // js 함수 영역
  return (
    // html영역
    <div className="App">
      {/* <State2/> */}
      {/* <Counter2/> */}
      {/* <State /> */}
      {/* <ClassState/> */}
      <StateVar/>
      {/* <Condition/> */}
    </div>
  );
}

