import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../images/sirius-icon.png';
import menuBurger from '../../../images/Vector (2).png';
import OpenedSideMenu from './OpenedSideMenu';
import UserProfile from './UserProfile';
// import MenuList from './MenuList';

// Styling root component so we cant see it until we reach 1024px
const SidebarStyled = styled.div`
  height: 100%;
  width: 10rem;
  position: absolute;
  top: 0;
  left: 0;

  background: linear-gradient(0deg, #690297 0%, #bf1399 100%);
  /* @media (max-width: 1024px) {
    display: block;
  } */
`;

// Styling sirius logo
const Logo = styled.img`
  position: absolute;
  top: ${(props) => (props.collapsed ? '63.4rem' : '33.8rem')};
  left: ${(props) => (props.collapsed ? '10.4rem' : '2rem')};
  transition: 0.2s;

  z-index: 12;
`;

// styling menu burger
const MenuBurger = styled.img`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;
  cursor: pointer;
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSideMenu = () => {
    setCollapsed(!collapsed);
  };
  return (
    <SidebarStyled>
      <MenuBurger
        onClick={() => toggleSideMenu()}
        src={menuBurger}
        alt="menuburger"
      />
      <Logo src={logo} alt="logo" collapsed={collapsed} />
      <OpenedSideMenu collapsed={collapsed} />
      <UserProfile />
      {/* <LineBreak />
      <MenuList /> */}
    </SidebarStyled>
  );
};

export default Sidebar;
