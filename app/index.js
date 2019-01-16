import React from 'react';
import { YellowBox } from 'react-native';

import dva from './patch/dva';
import Router from './router';
import { Models } from './models';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const app = dva({
  initialState: {},
  models: Models,
  onError() {},
});

const application = app.start(<Router />);

export default application;
