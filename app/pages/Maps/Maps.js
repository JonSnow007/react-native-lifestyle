import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Maps extends React.Component {
  static navigationOptions = {
    tabBarLabel: '地图',
  }
  render() {
    return (
      <View>
        <Text>地图</Text>
      </View>
    );
  }
}
