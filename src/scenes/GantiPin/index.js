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
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_BOLD_18,
  FONT_REGULAR_14,
} from '../../styles/typography';
function AturKataSandi({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  const [form, setForm] = useState({
    code: '',
  });
  console.log(form.code);

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.header}>
          <Image source={Images.logo} style={{width: 120, height: 70}} />
          <View style={styles.Message}>
            <Text style={[FONT_BOLD_18, {textAlign: 'center'}]}>
              Masukan Pin Baru Anda
            </Text>
            <Text
              style={[FONT_REGULAR_14, {marginTop: 20, textAlign: 'center'}]}>
              Silakan masukan PIN baru yang akan Anda gunakan untuk Aplikasi.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 28,
            marginRight: 28,
            marginTop: 40,
          }}>
          <SmoothPinCodeInput
            placeholder={
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 25,
                  opacity: 0.3,
                  // backgroundColor: '#F18F01',
                  borderColor: '#F18F01',
                  borderWidth: 2,
                }}></View>
            }
            mask={
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 25,
                  backgroundColor: '#F18F01',
                }}></View>
            }
            maskDelay={1000}
            password={true}
            cellStyle={null}
            cellStyleFocused={null}
            onFulfill={() => console.log('PENUH NICH')}
            value={form.code}
            onTextChange={(code) => setForm({code})}
          />
        </View>

        {/* <ImageBackground
          style={{
            width: screenWidth,
            height: 150,
            alignSelf: 'flex-end',
          }}
          source={Images.backgroundlogin}
        /> */}
      </View>
    </View>
  );
}

export default AturKataSandi;
