import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Schedule from './Schedule';
import Teacher from './Teacher';
import Homework from './Homework';

const CourseStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 26.17%;
  display: flex;
  background-color: #ffffff;
`;

// styling line which separates components
const LineBreak = styled.div`
  height: 0.2rem;
  width: 77.6%;
  margin: auto;
  background-color: rgba(42, 42, 59, 0.2);
  color: red;
  position: absolute;

  top: ${(props) => props.top};
  right: 13%;
`;

const Course = () => {
  return (
    <CourseStyled>
      <Header />

      <Schedule />
      <LineBreak top="39.7rem" />
      <Teacher />
      <LineBreak top="54.6rem" />
      <Homework />
    </CourseStyled>
  );
};
export default Course;
