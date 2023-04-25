import React from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

import { CustomButton } from '../../../components/Button';
import { OnboardingNavigationProp } from '../../../constants/navigation.types';
import { styles } from './styles';

export const Onboarding = React.memo(({ navigation }: { navigation: OnboardingNavigationProp }) => {
  const onPressSignin = () => {
    navigation.navigate('Signin');
  };
  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView>
      <ImageBackground source={require('../../../assets/onboarding.png')} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>Best task management app</Text>
          <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity.</Text>

          <View style={styles.buttonsContainer}>
            <CustomButton onPress={onPressSignin}>Log In</CustomButton>
            <CustomButton style={styles.bottomButton} onPress={onPressSignup}>
              Get Started
            </CustomButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
});
