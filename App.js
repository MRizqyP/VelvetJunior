import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './src/Main';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    // Hide SplashScreen after 3secs or Make an async task
    setTimeout(() => {
      RNBootSplash.hide();
    }, 500);
  }, []);

  return <Main />;
};

export default App;
