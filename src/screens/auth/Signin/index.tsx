import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { FooterLink } from '../../../components/FooterLink';
import { Input } from '../../../components/Input';
import { Title } from '../../../components/Title';
import { styles } from './styles';
import { SigninNavigationProp } from '../../../constants/navigation.types';

export const Signin = React.memo(({ navigation }: { navigation: SigninNavigationProp }) => {
  const onPress = () => {
    console.log('pressed');
  };

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Welcome back!" />

      <View style={styles.inputsContainer}>
        <Input keyboardType="email-address" placeholder="Email" />
        <Input style={styles.input} secureTextEntry placeholder="Password" />
      </View>

      <CustomButton style={styles.button} onPress={onPress}>
        Log in
      </CustomButton>

      <FooterLink text="Not registered?" linkText="Sign up!" onPress={navigateToSignup} />
    </SafeAreaView>
  );
});
