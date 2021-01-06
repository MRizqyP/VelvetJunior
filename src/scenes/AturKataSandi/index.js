import React, {useState} from 'react';
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
} from 'react-native';
import styles from './styles';
import Images from '../../assets';
import OTPInputView from '@twotalltotems/react-native-otp-input';

function AturKataSandi({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  const [form, setForm] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.logo} style={{width: 120, height: 70}} />
        <View style={styles.Message}>
          <Text style={styles.title}>Atur Ulang Kata Sandi</Text>
          <Text style={{marginTop: 20}}>
            Kami telah mengirimkan kode OTP ke nomor ponsel Anda, silakan
            masukan kode OTP disini untuk mengganti kata sandi.
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 28,
          marginRight: 28,
        }}>
        <View>
          <OTPInputView
            style={{
              width: '80%',
              height: 120,
              alignSelf: 'center',
              paddingLeft: 20,
            }}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Text style={{color: '#F18F01', textAlign: 'center'}}>
            Kirim Ulang OTP
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Ganti Kata Sandi')}>
          <View style={styles.buttonMasuk}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Kirim
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ImageBackground
        style={{
          width: screenWidth,
          height: 150,
          alignSelf: 'flex-end',
        }}
        source={Images.backgroundlogin}
      />
    </View>
  );
}

export default AturKataSandi;
