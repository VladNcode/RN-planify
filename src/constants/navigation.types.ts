import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  Onboarding: undefined;
  Signin: undefined;
  Signup: undefined;
};

export type OnboardingNavigationProp = StackNavigationProp<RootStackParamsList, 'Onboarding'>;
export type SigninNavigationProp = StackNavigationProp<RootStackParamsList, 'Signin'>;
export type SignupNavigationProp = StackNavigationProp<RootStackParamsList, 'Signup'>;
