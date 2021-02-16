import React from 'react';
import UserInactivity from 'react-native-user-inactivity';

export default CheckInactivity = async (navigation) => {
  return (
    <UserInactivity
      timeForInactivity={2000}
      onAction={(isActive) => {
        console.log('WAW');
      }}
    />
  );
};
