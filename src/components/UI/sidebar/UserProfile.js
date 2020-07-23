import React from 'react';
import styled from 'styled-components';
import userPhotoFrame from '../../../images/фоторамка (1).png';
// Styling photo frame
const UserPhotoFrame = styled.img`
  position: absolute;
  bottom: ${(props) => (props.collapsed ? '69.8rem' : '3rem')};
  left: ${(props) => (props.collapsed ? '20.7rem' : '3rem')};
`;

const UserProfile = ({ collapsed }) => {
  return (
    <UserPhotoFrame
      collapsed={collapsed}
      src={userPhotoFrame}
      alt="userPhotoFrame"
    />
  );
};

export default UserProfile;
