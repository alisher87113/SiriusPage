import React from 'react';
import styled from 'styled-components';
import check from '../../../images/Vector (1).jpg';

// styling root div tag
const HomeworkStyled = styled.div`
  width: 100%;
  height: 21.9rem;
`;

// styling label for homework
const HomeworkLabel = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  color: #2a2a3b;
  position: absolute;
  top: 57rem;
  left: 2.5rem;
`;

// positioning homeworks list
const HomeworksList = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 50rem;
  position: absolute;
  top: 60.1rem;
`;

// styling each homework
const HomeworkItem = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: #2a2a3b;
  margin: 0;
  padding-bottom: 1.5rem;
  width: 90%;
`;

const CheckIcon = styled.img`
  width: 1.5rem;
  margin-right: 1rem;
`;

const Homework = () => {
  return (
    <HomeworkStyled>
      <HomeworkLabel>Домашнее задание</HomeworkLabel>
      {/* {props.HomeworkList.map((homeworkItem, index) => {
          return (<HomeworkItem key={index} item={homeworkItem}/>)
      })} */}
      <HomeworksList>
        <HomeworkItem>
          <CheckIcon src={check} alt="check mark" />
          Решить примеры 22-27 в рабочей тетради
        </HomeworkItem>
        <HomeworkItem>
          <CheckIcon src={check} alt="check mark" />
          Счет на время на онлайн тренажере
        </HomeworkItem>
      </HomeworksList>
    </HomeworkStyled>
  );
};

export default Homework;
