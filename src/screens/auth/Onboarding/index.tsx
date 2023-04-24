import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import { styles } from './styles';
import { CustomButton } from '../../../components/Button';

export const Onboarding = React.memo(() => {
  const onPress = () => {
    console.log('pressed');
  };

  return (
    <View>
      <ImageBackground source={require('../../../assets/onboarding.png')} style={styles.image}>
        <View style={styles.container}>
          <Text style={styles.title}>Best task management app</Text>
          <Text style={styles.subtitle}>Get organized by sorting out all your tasks and boost your productivity.</Text>

          <View style={styles.buttonsContainer}>
            <CustomButton onPress={onPress}>Log In</CustomButton>
            <CustomButton style={styles.bottomButton} onPress={onPress}>
              Get Started
            </CustomButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});
