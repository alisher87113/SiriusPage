import React from 'react';
import styled from 'styled-components';
import book from '../../../images/иконка урока.png';
import monster from '../../../images/monster_6 (1).svg';

// Styling box for course name and billing status
const HeaderStyled = styled.div`
  width: 100%;
  height: 23.7rem;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(100.53deg, #f64867 7.06%, #ba2d86 95.26%);
  box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.226972);
`;

// Book logo
const BookLogo = styled.img`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
`;

// Styling monster
const MonsterPic = styled.img`
  position: absolute;
  bottom: 0;
  right: 0%;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <BookLogo src={book} alt="book" />
      <MonsterPic src={monster} alt="monster" />
    </HeaderStyled>
  );
};

export default Header;
