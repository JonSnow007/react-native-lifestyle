import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Venue extends React.Component {
  static navigationOptions = {
    tabBarLabel: '场馆',
  }
  render() {
    return (
      <View>
        <Text>场馆</Text>
      </View>
    );
  }
}
