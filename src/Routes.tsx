import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';

import { RootTabParamsList, RootStackParamsList, RootDrawerParamsList } from './constants/navigation.types';
import { Onboarding } from './screens/auth/Onboarding';
import { SignIn } from './screens/auth/SignIn';

import { SignUp } from './screens/auth/SignUp';
import { Home } from './screens/app/Home';
import { AddTask } from './screens/app/AddTask';
import { Tasks } from './screens/app/Tasks';

const Stack = createStackNavigator<RootStackParamsList>();
const Drawer = createDrawerNavigator<RootDrawerParamsList>();
const Tab = createBottomTabNavigator<RootTabParamsList>();

export const Routes = React.memo(() => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged); // unsubscribe on unmount
  }, []);

  console.log('user :>> ', user);

  if (initializing) {
    return null;
  }

  // if (user) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Welcome {user.displayName}!</Text>
  //       <TouchableOpacity onPress={() => auth().signOut()}>
  //         <Text style={{ marginTop: 10, fontSize: 25 }}>Sign out</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  const Tabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Tasks} />
    </Tab.Navigator>
  );

  if (user) {
    return (
      <Drawer.Navigator>
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
