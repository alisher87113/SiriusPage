import React, { useState } from 'react';
import styled from 'styled-components';

// styling grid
const GridStyled = styled.div`
  width: 93.2%;

  position: absolute;
  top: 8.6rem;
  left: 2rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #d9d9d9;
  /* border-right: 1px solid #d9d9d9; */
  border-radius: 1rem;
`;

// styling grid item
const GridItem = styled.div`
  box-sizing: border-box;
  height: 10rem;
  position: relative;
  border: 1px solid #d9d9d9;
`;

// common styled for dday and weekday
const DayStyleShared = styled.span`
  font-style: normal;
  font-size: 1.3rem;
  line-height: 1.8rem;
  color: #2a2a3b;
  position: absolute;
  top: 0.8rem;
`;

// styling day numbers
const DayStyled = styled(DayStyleShared)`
  font-weight: bold;
  left: 0.8rem;
`;

// styling current day number
const CurrentDayStyled = styled(DayStyled)`
  background: #b81199;
  padding: 5px 7px 4px 7px;
  border-radius: 3rem;
`;

const WeekDayStyled = styled(DayStyleShared)`
  font-weight: 600;
  text-align: right;
  opacity: 0.5;
  right: 0.7rem;
`;

const CalendarGrid = ({ date, currYear, currMonth, currDay }) => {
  const year = parseInt(date.substring(0, 4));
  const month = parseInt(date.substring(5));
  //   const year = currDate.substring(0, 4);
  //   const month = currDate.substring(5);

  const daysOfWeek = ['Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.', 'Вс.'];
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const numberOfDays = getDaysInMonth(month, year);
  let day = new Date(year + '-' + month + '-01').getDay();
  // 6 - Saturday
  const checkDay = day === 0 ? 7 : day;
  console.log(day);
  console.log(numberOfDays);

  let days = [];
  for (let j = 0; j < checkDay - 1; j++) {
    days.push(<div></div>);
  }

  for (let i = 1; i <= numberOfDays; i++) {
    if (year == currYear && month == currMonth && currDay == i) {
      console.log('hui');
      days.push(
        <GridItem>
          <CurrentDayStyled>{i}</CurrentDayStyled>
          <WeekDayStyled>{daysOfWeek[(i + checkDay - 2) % 7]}</WeekDayStyled>
        </GridItem>
      );
    } else {
      days.push(
        <GridItem>
          <DayStyled>{i}</DayStyled>
          <WeekDayStyled>{daysOfWeek[(i + checkDay - 2) % 7]}</WeekDayStyled>
        </GridItem>
      );
    }
  }

  return <GridStyled>{days}</GridStyled>;
};

export default CalendarGrid;
