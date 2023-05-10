import 'react-native-gesture-handler';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import { CustomDrawerContent } from './components';
import { CustomDrawerContentType, RootDrawerParamsList, RootStackParamsList, RootTabParamsList } from './constants';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { AddTask, Home, Onboarding, SignIn, SignUp, Tasks } from './screens';
import { selectUser, setFirebaseUser } from './store/userSlice';

const Stack = createStackNavigator<RootStackParamsList>();
const Drawer = createDrawerNavigator<RootDrawerParamsList>();
const Tab = createBottomTabNavigator<RootTabParamsList>();

export const Routes = React.memo(() => {
  const [initializing, setInitializing] = useState(true);

  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  // Handle user state changes
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    dispatch(setFirebaseUser(user));

    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);

  useEffect(() => {
    return auth().onUserChanged(user => {
      dispatch(setFirebaseUser(user));
    });
  }, []);

  if (initializing) {
    return null;
  }

  if (user && user.displayName) {
    const Tabs = () => (
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={styles.tabIcons}
                source={focused ? require('./assets/homeActive.png') : require('./assets/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={styles.tabIcons}
                source={focused ? require('./assets/calendarActive.png') : require('./assets/calendar.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );

    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={props => <CustomDrawerContent {...(props as unknown as CustomDrawerContentType)} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
});

const styles = StyleSheet.create({
  tabIcons: {
    width: 20,
    height: 20,
  },
  activeTabIcon: {
    backgroundColor: 'red',
  },
});
