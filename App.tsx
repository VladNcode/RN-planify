import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Routes } from './src/Routes';
import { COLOR_SCHEME } from './src/constants/colors';
import { RootStackParamsList } from './src/constants/navigation.types';

const Stack = createStackNavigator<RootStackParamsList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLOR_SCHEME.white,
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer theme={theme}>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
