import React from 'react';
import './App.css';
import styled from 'styled-components';
import Sidebar from './components/UI/sidebar/Sidebar';
import CurrentCourse from './components/UI/currentCourse/CurrentCourse';
import UserBoard from './components/UI/mainContent/UserBoard';

const AppStyled = styled.div`
  max-width: 102.4rem;
  margin: auto;
  height: 76.8rem;
  /* background-color: pink; */
  position: relative;
`;

const App = () => {
  return (
    <AppStyled>
      <Sidebar />
      <UserBoard />
      <CurrentCourse />
    </AppStyled>
  );
};

export default App;
