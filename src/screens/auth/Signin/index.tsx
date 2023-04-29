import auth from '@react-native-firebase/auth';
import React, { useReducer, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { FooterLink } from '../../../components/FooterLink';
import { Input } from '../../../components/Input';
import { Title } from '../../../components/Title';
import { isFirebaseSigninError } from '../../../constants/firebase.helpers';
import { SigninNavigationProp } from '../../../constants/navigation.types';
import { styles } from './styles';

interface SigninState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

export const Signin = React.memo(({ navigation }: { navigation: SigninNavigationProp }) => {
  const [event, updateEvent] = useReducer(
    (prev: SigninState, next: Partial<SigninState>) => {
      return { ...prev, ...next };
    },
    {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    },
  );

  const onSubmit = async () => {
    try {
      if (!event.email) {
        updateEvent({ emailError: 'Email is a required field' });
      } else {
        updateEvent({ emailError: '' });
      }

      if (!event.password) {
        updateEvent({ passwordError: 'Email is a required field' });
      } else {
        updateEvent({ passwordError: '' });
      }

      if (!event.email || !event.password) return;

      await auth().signInWithEmailAndPassword(event.email, event.password);
    } catch (error) {
      if (isFirebaseSigninError(error)) {
        if (error.code === 'auth/invalid-email') Alert.alert('Invalid email');
        if (error.code === 'auth/user-disabled') Alert.alert('User is disabled');
        if (error.code === 'auth/user-not-found') Alert.alert('User not found');
        if (error.code === 'auth/wrong-password') Alert.alert('Wrong password');
      } else {
        Alert.alert('Something went wrong');
        console.error(error);
      }
    }
  };

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Welcome back!" />

      <View style={styles.inputsContainer}>
        <Input
          errorText={event.emailError}
          onChangeText={value => {
            updateEvent({ email: value });
          }}
          keyboardType="email-address"
          placeholder="Email"
        />
        <Input
          errorText={event.passwordError}
          onChangeText={value => {
            updateEvent({ password: value });
          }}
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />
      </View>

      <CustomButton style={styles.button} onPress={onSubmit}>
        Log in
      </CustomButton>

      <FooterLink text="Not registered?" linkText="Sign up!" onPress={navigateToSignup} />
    </SafeAreaView>
  );
});
