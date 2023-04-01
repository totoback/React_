/* eslint-disable */
import './App.css';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
import PracticeMain from './components/PracticeMain';
import TestUseEffect from './components/TestUseEffect';
import TimerRender from './components/TimerRender';
import PracticeTimerRander from './components/PracticeTimerRander';
import UseEffectFetch from './components/UseEffectFetch';
import UsingUseMemo from './/components/UsingUseMemo';
import TestStyled from './components/TestStyled';

export default function App() {
  // js 함수 영역
  return (
    // html영역
    <div className="App">
      {/* <PracticeTimerRander /> */}
      <UseEffectFetch />
    </div>
  );
}
