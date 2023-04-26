import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { FooterLink } from '../../../components/FooterLink';
import { Input } from '../../../components/Input';
import { Title } from '../../../components/Title';
import { SignupNavigationProp } from '../../../constants/navigation.types';
import { styles } from './styles';

export const Signup = React.memo(({ navigation }: { navigation: SignupNavigationProp }) => {
  const onPress = () => {
    console.log('pressed');
  };

  const navigateToSignin = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Join the hub!" />

      <View style={styles.inputsContainer}>
        <Input placeholder="First Name" />
        <Input style={styles.input} placeholder="Last Name" />
        <Input style={styles.input} placeholder="Email" />
        <Input style={styles.input} placeholder="Password" />
        <Input style={styles.input} placeholder="Confirm Password" />
      </View>

      <CustomButton style={styles.button} onPress={onPress}>
        Create account
      </CustomButton>

      <FooterLink text="Already registered?" linkText="Sign in!" onPress={navigateToSignin} />
    </SafeAreaView>
  );
});
