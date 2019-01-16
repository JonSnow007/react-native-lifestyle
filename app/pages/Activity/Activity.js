import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Activity extends React.Component {
  static navigationOptions = {
    tabBarLabel: '活动',
  }
  render() {
    return (
      <View>
        <Text>活动</Text>
      </View>
    );
  }
}
