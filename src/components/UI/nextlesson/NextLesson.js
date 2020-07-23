import React from 'react';
import styled from 'styled-components';

const NextLessonStyled = styled.div`
  width: 39.8rem;
  height: 8.5rem;
  background-color: red;
  background: linear-gradient(189.79deg, #c71eb4 -5.64%, #6f2fb8 94.22%);
  border-radius: 1rem;
  position: absolute;
  top: 13.5rem;
  left: 3rem;
  /* @media (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    height: 14rem;
  } */
`;
const TextStyled = styled.span`
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-weight: bold;
  font-style: normal;
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  color: #ffffff;
  /* @media (max-width: 1365px) {
    left: 1rem;
  } */
`;

// Styling timer digits and text
const NextLessonTimer = styled.p`
  position: absolute;
  margin: 0;
  bottom: 1.5rem;
  left: 2rem;
  /* @media (max-width: 1365px) {
    bottom: 7rem;
    left: 1rem;
  } */
`;

const Digits = styled.span`
  font-size: 2.8rem;
  line-height: 3.8rem;
  font-weight: 600;
  font-style: normal;
  color: #ffffff;
  opacity: 0.6;
  margin-right: 0.4rem;
`;

const AfterDigits = styled.span`
  font-size: 1.4rem;
  line-height: 1.9rem;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.6;
  margin-right: 1rem;
`;

// Styling start lesson button
const StartLessonBtn = styled.button`
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-style: normal;
  font-weight: bold;
  color: #540182;
  text-align: center;
  padding: 1.2rem 2.3rem 1.2rem 2.5rem;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 2.7rem;
  position: absolute;
  top: 2.2rem;
  right: 2rem;
  cursor: pointer;
  /* @media (max-width: 1365px) {
    top: auto;
    bottom: 2rem;
  } */
`;

const NextLesson = () => {
  return (
    <NextLessonStyled>
      <div>
        <TextStyled>Следующий урок через:</TextStyled>
        <NextLessonTimer>
          <Digits>4</Digits>
          <AfterDigits>ч.</AfterDigits>
          <Digits>12</Digits>
          <AfterDigits>мин</AfterDigits>
        </NextLessonTimer>
      </div>

      <StartLessonBtn>Перейти к уроку</StartLessonBtn>
    </NextLessonStyled>
  );
};

export default NextLesson;
