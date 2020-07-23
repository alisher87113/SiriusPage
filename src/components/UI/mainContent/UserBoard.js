import React from 'react';
import styled from 'styled-components';
import NextLesson from '../nextlesson/NextLesson';
import Calendar from '../calendar/Calendar';

const ContentCenter = styled.div`
  width: 64%;
  height: 100%;
  background-color: red;
  position: absolute;
  top: 0;
  left: 10rem;
  background-color: #f6f4fd;
  overflow: auto;
`;

// styling user greeting text
const UserGreeting = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2.8rem;
  line-height: 3.8rem;
  margin: 0;
  color: rgba(32, 32, 32, 0.75);
  position: absolute;
  top: 3rem;
  left: 3rem;
`;
const Username = styled.strong`
  padding: 0 0 0.5rem 0;
  border-bottom: 0.4rem solid #b81199;
`;

const UserBoard = () => {
  return (
    <ContentCenter>
      <UserGreeting>
        Добро пожаловать,
        <br />
        <Username>Владимир!</Username>
      </UserGreeting>
      <NextLesson />
      <Calendar />
    </ContentCenter>
  );
};

export default UserBoard;
