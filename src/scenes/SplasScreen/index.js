import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import styles from './styles';
import FormInput from '../../components/FormInput';
import {FONT_BOLD_16} from '../../styles/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../assets';
import LottieView from 'lottie-react-native';
function Login({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#43ABA4" barStyle={'default'} />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image
          style={{
            width: screenWidth,
            height: 130,
          }}
          source={images.img_bg_awan}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={images.logo}
          style={{width: screenWidth / 2, height: screenHeight / 6.7}}
        />
        <LottieView
          source={require('../../assets/loadingani.json')}
          autoPlay
          style={{height: 15, marginTop: 10}}
          loop
        />
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: 'flex-end',
        }}>
        <Image
          style={{
            width: screenWidth,
            height: 200,
          }}
          source={images.img_bg_splash}
        />
      </View>
    </View>
  );
}

export default Login;
