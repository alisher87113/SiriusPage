import React from 'react';
import styled from 'styled-components';
import icon1 from '../../../images/Frame 13.png';
import icon2 from '../../../images/Frame 14.png';
import icon3 from '../../../images/Frame 15.png';
import icon4 from '../../../images/Frame 16.png';
import icon5 from '../../../images/Frame 17.png';
import icon6 from '../../../images/Frame 18.png';
import icon7 from '../../../images/Frame 19.png';
import icon8 from '../../../images/Frame 20.png';

// styling menu UL
const MenuListStyled = styled.ul`
  list-style: none;
  position: absolute;
  width: 24rem;
  top: 15.4rem;
  left: 3rem;
  /* z-index: 11; */

  margin: 0;
  padding: 0;
`;

//Styling each menu item
const ListItem = styled.li`
  font-style: normal;
  width: 100%;
  font-weight: 600;

  font-size: 1.4rem;
  line-height: 1.9rem;
  color: #ffffff;
  padding-bottom: 3.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// styling list item icon
const IconStyled = styled.img`
  margin-right: 1.1rem;
`;

const MenuList = () => {
  return (
    <MenuListStyled>
      <ListItem>
        <IconStyled src={icon1} alt="schedule" />
        Расписание занятий
      </ListItem>
      <ListItem>
        <IconStyled src={icon2} alt="arithmetic" />
        Ментальная арифметика
      </ListItem>
      <ListItem>
        <IconStyled src={icon3} alt="note" />
        Тетрадь
      </ListItem>
      <ListItem>
        <IconStyled src={icon4} alt="billing" />
        Баланс и оплата
      </ListItem>
      <ListItem>
        <IconStyled src={icon5} alt="settings" />
        Настройки
      </ListItem>
      <ListItem>
        <IconStyled src={icon6} alt="support" />
        Связаться с менеджером
      </ListItem>
      <ListItem>
        <IconStyled src={icon7} alt="checkCamera" />
        Проверить камеру и звук
      </ListItem>
      <ListItem>
        <IconStyled src={icon8} alt="log out" />
        Выйти
      </ListItem>
    </MenuListStyled>
  );
};

export default MenuList;
