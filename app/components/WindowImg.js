import React from 'react';
import {
  // View,
  Image,
} from 'react-native';

import Styles from '../res/Styles';

export default class WindowImg extends React.Component {
  render() {
    return (
      <Image
        source={{ uri: 'https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-558728.jpg' }}
        style={{
          width: Styles.Width(730),
          height: Styles.Height(410.6),
          borderRadius: Styles.Width(20),
          marginLeft: Styles.Width(10),
        }}
      />
    );
  }
}
