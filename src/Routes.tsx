import 'react-native-gesture-handler';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import { CustomDrawerContent } from './components/DrawerContent';
import {
  CustomDrawerContentType,
  RootDrawerParamsList,
  RootStackParamsList,
  RootTabParamsList,
} from './constants/navigation.types';
import { AddTask } from './screens/app/AddTask';
import { Home } from './screens/app/Home';
import { Tasks } from './screens/app/Tasks';
import { Onboarding } from './screens/auth/Onboarding';
import { SignIn } from './screens/auth/SignIn';
import { SignUp } from './screens/auth/SignUp';

const Stack = createStackNavigator<RootStackParamsList>();
const Drawer = createDrawerNavigator<RootDrawerParamsList>();
const Tab = createBottomTabNavigator<RootTabParamsList>();

export const Routes = React.memo(() => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);

  useEffect(() => {
    return auth().onUserChanged(user => setUser(user));
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
          initialParams={{ user }}
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
