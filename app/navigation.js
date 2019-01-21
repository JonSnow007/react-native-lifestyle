import { TabNavigator } from 'react-navigation';

import Initial from './pages/Initial/Initial';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Activity from './pages/Activity/Activity';
import Venue from './pages/Venue/Venue';
import Maps from './pages/Maps/Maps';
import Colors from './res/Colors';

const Tabs = TabNavigator({
  // 初始页
  Initial: {
    screen: Initial,
  },

  // 登录页
  Login: {
    screen: Login,
  },

  Home: {
    screen: Home,
  },
  Activity: {
    screen: Activity,
  },
  Venue: {
    screen: Venue,
  },
  Maps: {
    screen: Maps,
  },
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'Home',
  tabBarOptions: {
    style: {
      backgroundColor: Colors.primary,
    },
    indicatorStyle: {
      height: 0,
    },
  },
});

const Navigations = {
  Main: {
    screen: Tabs,
  },
};

export default Navigations;
