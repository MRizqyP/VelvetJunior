import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {FONT_REGULAR_14} from '../styles/typography';

export default function OtpInput({handleOTPInput}) {
  return (
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
          handleOTPInput(code);
        }}
      />
      <Text style={[FONT_REGULAR_14, {color: '#F18F01', textAlign: 'center'}]}>
        Kirim Ulang OTP
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#51C9C2',
  },
  underlineStyleHighLighted: {
    borderColor: 'black',
  },
});
