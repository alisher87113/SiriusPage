import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../images/sirius-icon.png';
import menuBurger from '../../../images/Vector (2).png';
import userPhotoFrame from '../../../images/фоторамка.png';
import OpenedSideMenu from './OpenedSideMenu';
// import MenuList from './MenuList';

// const [menuWidth, setMenuWidth] = useState('0');
// const toggleSideMenu = () => {
//   if (menuWidth === '0') {
//     setMenuWidth('27.7rem');
//   } else {
//     setMenuWidth('0');
//   }
// };

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

// Styling photo frame
const UserPhotoFrame = styled.img`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
`;

// //Styling line
// const LineBreak = styled.div`
//   width: 21.7rem;
//   height: 0.2rem;
//   position: absolute;
//   top: 10rem;
//   left: 3rem;
//   display: inline-block;
//   margin: auto;
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 2.1rem;
//   z-index: 12;
// `;

const Sidebar = () => {
  const [menuWidth, setMenuWidth] = useState('0');
  const toggleSideMenu = () => {
    if (menuWidth === '0') {
      setMenuWidth('27.7rem');
    } else {
      setMenuWidth('0');
    }
  };
  return (
    <SidebarStyled>
      <MenuBurger
        onClick={() => toggleSideMenu()}
        src={menuBurger}
        alt="menuburger"
      />
      <Logo src={logo} alt="logo" />
      <UserPhotoFrame src={userPhotoFrame} alt="userPhotoFrame" />
      <OpenedSideMenu width={menuWidth} />
      {/* <LineBreak />
      <MenuList /> */}
    </SidebarStyled>
  );
};

export default Sidebar;
