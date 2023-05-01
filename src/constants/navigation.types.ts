import { DrawerScreenProps } from '@react-navigation/drawer';
import {
  DrawerContentComponentProps,
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type RootDrawerParamsList = {
  Tabs: undefined;
  AddTask: undefined;
};

export type RootTabParamsList = {
  Home: undefined;
  Tasks: undefined;
};

export type OnboardingNavigationProp = StackNavigationProp<RootStackParamsList, 'Onboarding'>;
export type SignInNavigationProp = StackNavigationProp<RootStackParamsList, 'SignIn'>;
export type SignUpNavigationProp = StackNavigationProp<RootStackParamsList, 'SignUp'>;

export type CustomDrawerContentType = Omit<DrawerContentComponentProps, 'navigation'> &
  Omit<DrawerScreenProps<RootTabParamsList & RootDrawerParamsList>, 'route'>;
