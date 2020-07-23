import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../../images/plus.png';
import CalendarGrid from './CalendarGrid';

// main calendar div
const CalendarStyled = styled.div`
  height: 60.2rem;
  width: 90.85%;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;

  box-shadow: 0px 1px 4px rgba(90, 49, 100, 0.226972);
  border-radius: 10px;
  position: absolute;
  top: 25rem;
  left: 3rem;
  margin-bottom: 3rem;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid black;
  }
`;

// Inner content of Calendar
const CalendarInner = styled.div`
  background-color: red;
  width: 93.2%;
  margin: auto;

  padding-top: 3rem;
`;

// styling month selector
const Select = styled.input`
  width: 20rem;
  position: absolute;
  top: 2.9rem;
  left: 2.1rem;
  font-size: 2rem;
  line-height: 2.7rem;
  color: #2a2a3b;
  border: none;
`;

// styling add lesson button and plus sign
const AddLesson = styled.div`
  font-size: 1.2rem;
  line-height: 4.6rem;
  width: 18rem;
  height: 4.6rem;
  background: linear-gradient(122.74deg, #f64867 7.06%, #ba2d86 95.26%);
  border-radius: 32px;
  align-items: center;

  text-align: center;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  display: inline-block;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
`;

const PlusSign = styled.img`
  padding-right: 0.4rem;
`;

// Styling left lessons amount
const LessonsLeft = styled.div``;

const LessonsLeftText = styled.span`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
  color: #2a2a3b;
  position: absolute;
  top: 2.5rem;
  right: 27.6rem;
`;

const LessonsAmount = styled.div`
  font-style: normal;
  font-size: 2rem;
  line-height: 2.7rem;
  padding: 0.9rem 1.7rem 1rem 1.7rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(99.33deg, #f64867 7.06%, #ba2d86 95.26%);
  border-radius: 4rem;
  display: inline-block;
  position: absolute;
  top: 2rem;
  right: 22rem;
`;

const Calendar = () => {
  const [date, setDate] = useState('2020-01');
  const [currYear, setCurrYear] = useState('');
  const [currMonth, setCurrMonth] = useState('');
  const [currDay, setCurrDay] = useState('');
  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    setCurrYear(year);
    let month = date.getMonth() + 1;
    setCurrMonth(month);
    let day = date.getDate();
    setCurrDay(day);
    const dateArr = [year, monthModifier(month)];

    setDate(dateArr.join('-'));
  }, []);
  const monthModifier = (month) => {
    if (month < 10) {
      return '0' + month;
    } else {
      return month;
    }
  };

  const setNewDate = (e) => {
    console.log(e.target.value);
    setDate(e.target.value);
  };

  return (
    <CalendarStyled>
      {/* <MonthYear>Октябрь 2020</MonthYear> */}
      {/* <Select name="Месяц">
        <option>Январь</option>
        <option>Февраль</option>
        <option>Март</option>
        <option>Апрель</option>
        <option>Май</option>
        <option>Июнь</option>
        <option>Июль</option>
        <option>Август</option>
        <option>Сентябрь</option>
        <option>Октябрь</option>
        <option>Ноябрь</option>
        <option>Декабрь</option>
      </Select> */}
      <Select
        type="month"
        id="start"
        name="start"
        min="2018-03"
        value={date}
        onChange={(e) => setNewDate(e)}
      ></Select>

      <LessonsLeft>
        <LessonsLeftText>
          Осталось
          <br /> уроков:
        </LessonsLeftText>
        <LessonsAmount>4</LessonsAmount>
      </LessonsLeft>
      <AddLesson>
        <PlusSign src={logo} alt="plus sign" />
        Добавить урок
      </AddLesson>
      <CalendarGrid
        currYear={currYear}
        currMonth={currMonth}
        currDay={currDay}
        date={date}
      />
      {/* <CalendarGrid /> */}
    </CalendarStyled>
  );
};

export default Calendar;
