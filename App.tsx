import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';

import { Routes } from './src/Routes';
import { COLOR_SCHEME } from './src/constants/colors';
import { store } from './src/store/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR_SCHEME.white,
  },
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
