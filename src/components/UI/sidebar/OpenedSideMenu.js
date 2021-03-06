import React from 'react';
import styled from 'styled-components';
import stars from '../../../images/emblem_4.png';
import photoFrame from '../../../images/фоторамка (1).png';
import MenuList from './MenuList';
import UserProfile from './UserProfile';

// styling root div of side menu

const SideMenuStyled = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 27.7rem;
  display: ${(props) => (props.collapsed ? 'block' : 'none')};
  background: linear-gradient(0deg, #690297 0%, #bf1399 100%);
  height: 100%;
  z-index: 10;
`;

// styling stars/emblem
const Stars = styled.img`
  position: absolute;
  right: 8.2rem;
  top: 3rem;
`;

//Styling line
const LineBreak = styled.div`
  width: 21.7rem;
  height: 0.2rem;
  position: absolute;
  top: 10rem;
  left: 3rem;
  display: inline-block;
  margin: auto;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2.1rem;
  z-index: 12;
`;

const OpenedSideMenu = ({ collapsed }) => {
  return (
    <SideMenuStyled collapsed={collapsed}>
      <Stars src={stars} alt="stars" />
      <UserProfile collapsed={collapsed} />
      <LineBreak />
      <MenuList />
    </SideMenuStyled>
  );
};

export default OpenedSideMenu;
