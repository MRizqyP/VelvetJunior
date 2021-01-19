import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import styles from './styles';
import Images from '../../assets';
import OTPInput from '../../components/OtpInput';
import Button from '../../components/Button';
import {
  FONT_BOLD_14,
  FONT_BOLD_18,
  FONT_REGULAR_14,
} from '../../styles/typography';

function AturKataSandi({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  const [form, setForm] = useState({
    code: '',
  });

  const handleOTPInput = (code) => {
    setForm({code: code});
  };
  console.log(form);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.logo} style={{width: 120, height: 70}} />
        <View style={styles.Message}>
          <Text style={FONT_BOLD_18}>Atur Ulang Kata Sandi</Text>
          <Text style={[FONT_REGULAR_14, {marginTop: 20}]}>
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
          <OTPInput handleOTPInput={handleOTPInput} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            text={'Kirim'}
            onPress={() => navigation.navigate('Ganti Kata Sandi')}
          />
        </View>
      </View>

      <ImageBackground
        style={{
          width: screenWidth,
          height: screenHeight / 4,
          alignSelf: 'flex-end',
        }}
        source={Images.backgroundlogin}
      />
    </View>
  );
}

export default AturKataSandi;
