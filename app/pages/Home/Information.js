import React from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';

import Colors from '../../res/Colors';
import Styles from '../../res/Styles';
import BriefTitle from '../../components/BriefTitle';
import WindowImg from '../../components/WindowImg';

export default class Information extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={Colors.primary}
        />
        <BriefTitle />
        <WindowImg style={styles.windowImg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    minHeight: Styles.ScreenHeight,
  },
  windowImg: {
    marginLeft: 10,
    // display: 'flex',
    // justifyContent: 'center',
  },
});
