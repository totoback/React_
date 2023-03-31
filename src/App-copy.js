import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

function AppCopy() {
  const RootDiv = styled.div`
    text-align: center;
  `;
  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;
  const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  `;
  const MyA = styled.a`
    color: #61dafb !important;
  `;
  return (
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Styled 적용을 위해 변경 된 App.js Edit <code>src/App.js</code> and
          save to reload.{' '}
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default AppCopy;
