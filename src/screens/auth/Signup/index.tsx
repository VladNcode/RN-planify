import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Alert, Linking, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { FooterLink } from '../../../components/FooterLink';
import { Input } from '../../../components/Input';
import { Title } from '../../../components/Title';
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from '../../../constants/links';
import { SignupNavigationProp } from '../../../constants/navigation.types';
import { styles } from './styles';
import { isFirebaseSignupError } from '../../../constants/firebase.helpers';

interface SignupState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const fieldValuesMap: Record<keyof SignupState, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email',
  password: 'Password',
  confirmPassword: 'Confirm password',
};

const initialValues: SignupState = { lastName: '', firstName: '', email: '', password: '', confirmPassword: '' };

export const Signup = React.memo(({ navigation }: { navigation: SignupNavigationProp }) => {
  const [agreed, setAgreed] = useState(false);
  const [state, setState] = useState<SignupState>({ ...initialValues });
  const [errors, setErrors] = useState<SignupState>({ ...initialValues });

  const onChange = (key: string) => (value: string) => {
    setState(state => {
      return { ...state, [key]: value };
    });
  };

  const navigateToSignin = () => {
    navigation.navigate('Signin');
  };

  const onLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const onSubmit = async () => {
    try {
      let error = false;

      for (const key in state) {
        if (!state[key as keyof typeof state]) {
          setErrors(errors => ({
            ...errors,
            [key]: `${fieldValuesMap[key as keyof SignupState]} is a required field`,
          }));
          error = true;
        } else {
          setErrors(errors => ({ ...errors, [key]: '' }));
        }
      }

      if (error) return;

      if (state.password !== state.confirmPassword) {
        Alert.alert('Passwords do not match');
        return;
      }

      if (!agreed) {
        Alert.alert('You need to agree to the Terms of Service and Privacy Policy');
        return;
      }

      if (state.password === state.confirmPassword && agreed) {
        await auth().createUserWithEmailAndPassword(state.email, state.password);
      }
    } catch (error) {
      if (isFirebaseSignupError(error)) {
        if (error.code === 'auth/email-already-in-use') Alert.alert('Email is already in use');
        if (error.code === 'auth/invalid-email') Alert.alert('Email is invalid');
        if (error.code === 'auth/operation-not-allowed') Alert.alert('Operation is not allowed');
        if (error.code === 'auth/weak-password') Alert.alert('Password is too weak');
      } else {
        Alert.alert('Something went wrong');
        console.error(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Join the hub!" />

      <View style={styles.inputsContainer}>
        <Input errorText={errors.firstName} onChangeText={onChange('firstName')} placeholder="First Name" />
        <Input
          errorText={errors.lastName}
          onChangeText={onChange('lastName')}
          style={styles.input}
          placeholder="Last Name"
        />
        <Input
          errorText={errors.email}
          onChangeText={onChange('email')}
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
        />
        <Input
          errorText={errors.password}
          onChangeText={onChange('password')}
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />
        <Input
          errorText={errors.confirmPassword}
          onChangeText={onChange('confirmPassword')}
          style={styles.input}
          secureTextEntry
          placeholder="Confirm Password"
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox agreed={agreed} setAgreed={setAgreed} />

        <View style={styles.checkboxTextContainer}>
          <Text style={styles.checkboxText}>I agree to the </Text>
          <TouchableOpacity onPress={() => onLinkPress(TERMS_AND_CONDITIONS_LINK)}>
            <Text style={styles.link}>Terms of Service </Text>
          </TouchableOpacity>
          <Text style={styles.checkboxText}>and </Text>
          <TouchableOpacity onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            <Text style={styles.link}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomButton style={styles.button} onPress={onSubmit}>
        Create account
      </CustomButton>

      <FooterLink text="Already registered?" linkText="Sign in!" onPress={navigateToSignin} />
    </SafeAreaView>
  );
});
