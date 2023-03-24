/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import BtnToNaver from './components/BtnToNaver';
import ImgComponent from './components/ImgComponent';


function App() {
  return (
    <div className="App">
      <MainHeader/>
      <ImgComponent/>
      <BtnToNaver/>
    </div>
  );
}

export default App;
