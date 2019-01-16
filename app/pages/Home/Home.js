import React from 'react';
// import {
//   View,
//   StatusBar,
//   StyleSheet,
// } from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import Colors from '../../res/Colors';
import Styles from '../../res/Styles';
import Information from './Information';
import Story from './Story';
import Appreciation from './Appreciation';
import Tourism from './Tourism';
import Famous from './Famous';
import Volunteers from './Volunteers';
import School from './School';
import Theatre from './Theatre';
import Cinema from './Cinema';

export default class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: '首页',
  }
  render() {
    const types = [
      { title: '资讯', component: Information },
      { title: '故·事', component: Story },
      { title: '鉴赏', component: Appreciation },
      { title: '旅游', component: Tourism },
      { title: '名家', component: Famous },
      { title: '志愿者', component: Volunteers },
      { title: '学堂', component: School },
      { title: '剧院', component: Theatre },
      { title: '影院', component: Cinema },
    ];
    return (
      <ScrollableTabView
        style={{ flex: 1, backgroundColor: Colors.gray }}
        tabBarBackgroundColor={Colors.white}
        tabBarActiveTextColor={Colors.primary}
        tabBarInactiveTextColor={Colors.black}
        tabBarUnderlineStyle={{
          marginLeft: Styles.Width(50),
          backgroundColor: Colors.primary,
          width: Styles.Width(30),
        }}
        renderTabBar={() => <ScrollableTabBar />}
      >
        { types.map((v, i) => {
            const Component = v.component;
            return <Component key={i} tabLabel={v.title} navigation={this.props.navigation} />; // eslint-disable-line
        })}
      </ScrollableTabView>
    );
  }
}
