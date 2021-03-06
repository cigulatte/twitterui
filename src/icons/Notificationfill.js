import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Notificationfill = ({color = '#000', width = 10, height = 10}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path
        d="M12 2c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
        fill={color}
      />
    </Svg>
  );
};

export default Notificationfill;
