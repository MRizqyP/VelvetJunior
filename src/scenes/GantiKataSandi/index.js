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
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../assets';
import styles from './styles';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import {
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_18,
} from '../../styles/typography';
function GantiKataSandi({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  const [form, setForm] = useState({
    newPassword: '',
    confirmPassword: '',
    secureTextEntry: true,
    secureTextEntry1: true,
    token: '',
  });
  const [add, setAdd] = useState(false);

  const masuk = async () => {
    navigation.navigate('Log In');
  };

  const updateSecureTextEntry = () => {
    setForm({
      ...form,
      secureTextEntry: !form.secureTextEntry,
    });
  };
  const updateSecureTextEntry1 = () => {
    setForm({
      ...form,
      secureTextEntry1: !form.secureTextEntry1,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#43ABA4" barStyle={'default'} />
      <View style={styles.header}>
        <Image source={Images.logo} style={{width: 120, height: 70}} />
        <View
          style={{alignSelf: 'flex-start', paddingTop: 40, paddingLeft: 20}}>
          <Text style={FONT_BOLD_18}>Ganti Kata Sandi</Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 28,
          marginRight: 28,
        }}>
        <View>
          <Text style={FONT_BOLD_14}>Kata Sandi Baru</Text>
          <View style={styles.action}>
            <Feather name="lock" color="orange" size={20} />
            <FormInput
              placeholder="Masukan kata sandi baru anda"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              secureTextEntry={form.secureTextEntry ? false : true}
              onChangeText={(text) => setForm({...form, newPassword: text})}
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              {form.secureTextEntry ? (
                <Feather name="eye-off" color="orange" size={20} />
              ) : (
                <Feather name="eye" color="orange" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 16}}>
          <Text style={FONT_BOLD_14}>Konfirmasi Kata Sandi</Text>
          <View style={styles.action}>
            <Feather name="lock" color="orange" size={20} />
            <FormInput
              placeholder="Konfirmasi kata sandi anda"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              secureTextEntry={form.secureTextEntry1 ? false : true}
              onChangeText={(text) => setForm({...form, confirmPassword: text})}
            />

            <TouchableOpacity onPress={updateSecureTextEntry1}>
              {form.secureTextEntry1 ? (
                <Feather name="eye-off" color="orange" size={20} />
              ) : (
                <Feather name="eye" color="orange" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button text={'Ubah Kata Sandi'} onPress={masuk} />
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

export default GantiKataSandi;
