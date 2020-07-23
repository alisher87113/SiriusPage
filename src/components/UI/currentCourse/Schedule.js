import React from 'react';
import styled from 'styled-components';
import cancel from '../../../images/Vector (3).png';

const textColor = '#2a2a3b';

//styling schedule root div
const ScheduleStyled = styled.div`
  width: 100%;
  height: 15.9rem;
  position: absolute;
  top: 23.7rem;
`;

const LessonTimeText = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  color: ${textColor};
  position: absolute;
  top: 2rem;
  left: 2.5rem;
`;

const TimeTable = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: ${textColor};
  margin: 0;
  position: absolute;
  top: 4.7rem;
  left: 2.5rem;
`;

// styling cancel lesson button
const CancelBtnStyled = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  color: ${textColor};
  padding: 1.2rem 2rem 1.4rem 2rem;
  border: 1px solid rgba(42, 42, 59, 0.4);
  border-radius: 58px;
  display: inline-block;
  position: absolute;
  top: 9.2rem;
  left: 2.5rem;
  cursor: pointer;
`;

const CancelSign = styled.img`
  padding-left: 0.5rem;
`;

const Schedule = () => {
  return (
    <ScheduleStyled>
      <LessonTimeText>Время:</LessonTimeText>
      <TimeTable>10 октября, 10:00-11:00</TimeTable>

      <CancelBtnStyled>
        Отменить урок
        <CancelSign src={cancel} />
      </CancelBtnStyled>
    </ScheduleStyled>
  );
};

export default Schedule;
