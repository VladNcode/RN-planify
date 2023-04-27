import React from 'react';
import { Linking, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { Checkbox } from '../../../components/Checkbox';
import { FooterLink } from '../../../components/FooterLink';
import { Input } from '../../../components/Input';
import { Title } from '../../../components/Title';
import { PRIVACY_POLICY_LINK, TERMS_AND_CONDITIONS_LINK } from '../../../constants/links';
import { SignupNavigationProp } from '../../../constants/navigation.types';
import { styles } from './styles';

export const Signup = React.memo(({ navigation }: { navigation: SignupNavigationProp }) => {
  const onPress = () => {
    console.log('pressed');
  };

  const navigateToSignin = () => {
    navigation.navigate('Signin');
  };

  const onLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title text="Join the hub!" />

      <View style={styles.inputsContainer}>
        <Input placeholder="First Name" />
        <Input style={styles.input} placeholder="Last Name" />
        <Input style={styles.input} keyboardType="email-address" placeholder="Email" />
        <Input style={styles.input} secureTextEntry placeholder="Password" />
        <Input style={styles.input} secureTextEntry placeholder="Confirm Password" />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox />

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

      <CustomButton style={styles.button} onPress={onPress}>
        Create account
      </CustomButton>

      <FooterLink text="Already registered?" linkText="Sign in!" onPress={navigateToSignin} />
    </SafeAreaView>
  );
});
