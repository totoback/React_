/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import BtnToNaver from './components/BtnToNaver';
import ImgComponent from './components/ImgComponent';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionComponent';


function App() {
  return (
    <div className="App">
      <MainHeader/>
      <ImgComponent/>
      <BtnToNaver/>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
