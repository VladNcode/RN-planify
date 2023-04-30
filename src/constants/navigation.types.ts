import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type OnboardingNavigationProp = StackNavigationProp<RootStackParamsList, 'Onboarding'>;
export type SignInNavigationProp = StackNavigationProp<RootStackParamsList, 'SignIn'>;
export type SignUpNavigationProp = StackNavigationProp<RootStackParamsList, 'SignUp'>;
