import React from 'react';
import { SafeAreaView } from 'react-native';

import { Onboarding } from './src/screens/auth/Onboarding';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Onboarding />
    </SafeAreaView>
  );
}

export default App;
