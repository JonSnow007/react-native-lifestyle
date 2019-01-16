import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FontsSize from '../res/Fonts/size';
import FontsWeight from '../res/Fonts/weight';
import Styles from '../res/Styles';

export default class BriefTitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>新闻资讯</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Styles.Height(15),
  },
  title: {
    fontSize: FontsSize.large,
    fontWeight: FontsWeight.blod,
  },
});
