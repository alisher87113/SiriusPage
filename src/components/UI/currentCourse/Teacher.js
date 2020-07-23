import React from 'react';
import styled from 'styled-components';
import teacherPhoto from '../../../images/teacher.png';

// styling root teacher tag
const TeacherStyled = styled.div`
  height: 14.9rem;
  position: absolute;
  width: 100%;
  top: 39.6rem;
`;

// styling teacher label
const TeacherLabel = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 2.1rem;
  left: 2.5rem;
`;

// styling teacher card
const TeacherCard = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 1.2rem;
  top: 5.5rem;
`;

const PhotoHolder = styled.div`
  position: relative;
  margin-right: 0.1rem;
`;

const TeacherPhoto = styled.img`
  /* position: absolute; */
  margin: 0.5rem 0.8rem 0 0.8rem;
  right: 0;
  border-radius: 5rem;
`;

const TeacherInfo = styled.div``;

const TeacherName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.5rem;
  color: #2a2a3b;
  margin: 0 0 0.2rem 0;
`;

const TeacherOccupation = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 1.9rem;
  color: #2a2a3b;
  opacity: 0.75;
  width: 15rem;
  margin: 0;
`;

const Teacher = () => {
  return (
    <TeacherStyled>
      <TeacherLabel>Преподаватель:</TeacherLabel>
      <TeacherCard>
        <PhotoHolder>
          <TeacherPhoto src={teacherPhoto} alt="teacher" />
        </PhotoHolder>
        <TeacherInfo>
          <TeacherName>Ольга Титова</TeacherName>
          <TeacherOccupation>Ментальная арифметика</TeacherOccupation>
        </TeacherInfo>
      </TeacherCard>
    </TeacherStyled>
  );
};

export default Teacher;
