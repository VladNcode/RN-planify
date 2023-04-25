import 'react-native-gesture-handler';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { COLOR_SCHEME } from './src/constants/colors';
import { RootStackParamsList } from './src/constants/navigation.types';
import { Onboarding } from './src/screens/auth/Onboarding';
import { Signin } from './src/screens/auth/Signin';
import { Signup } from './src/screens/auth/Signup';

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
