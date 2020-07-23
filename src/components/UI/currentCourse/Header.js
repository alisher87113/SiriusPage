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

const SharedTextStyle = styled.p`
  font-style: normal;
  color: #ffffff;
  position: absolute;
  margin: 0;
`;

const CourseName = styled(SharedTextStyle)`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.5rem;
  top: 7.7rem;
  left: 2.5rem;
`;

const LevelInCourse = styled(SharedTextStyle)`
  font-size: 1.4rem;
  line-height: 1.9rem;
  opacity: 0.7;
  font-weight: normal;
  top: 13.1rem;
  left: 2.6rem;
`;
const IsPaid = styled.div`
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1.5rem;
  font-style: normal;
  color: #ffffff;
  padding: 0.8rem 1.5rem 0.9rem 1.5rem;
  border-radius: 5rem;
  background-color: #1ac9b7;
  display: inline-block;
  position: absolute;
  bottom: 3.5rem;
  left: 2.6rem;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <BookLogo src={book} alt="book" />
      <MonsterPic src={monster} alt="monster" />
      <CourseName>Курс ментальная арифметика</CourseName>
      <LevelInCourse>3 урок, 1 уровень</LevelInCourse>
      <IsPaid>Оплечено</IsPaid>
    </HeaderStyled>
  );
};

export default Header;
