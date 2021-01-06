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
import Button from '../../components/Button';
import styles from './styles';
import FormInput from '../../components/FormInput';
import {FONT_BOLD_16} from '../../styles/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../assets';
function Login({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  const [form, setForm] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    token: '',
  });
  const [add, setAdd] = useState(false);
  console.log(form);

  const masuk = async () => {
    navigation.navigate('Home');
  };

  const updateSecureTextEntry = () => {
    setForm({
      ...form,
      secureTextEntry: !form.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#43ABA4" barStyle={'default'} />
      <View style={styles.header}>
        <Image source={images.logo} style={{width: 120, height: 70}} />
        <View style={styles.errorMessage}>
          <Feather name="alert-circle" color="red" size={20} />
          <Text style={styles.textError}>
            Kata Sandi yang anda masukan salah!
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 28,
          marginRight: 28,
        }}>
        <View>
          <Text style={FONT_BOLD_16}>NIK</Text>
          <View style={styles.action}>
            <Feather name="user" color="orange" size={20} />
            <FormInput
              placeholder="Masukan NIK Anda"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              onChangeText={(text) => setForm({...form, email: text})}
            />
          </View>
        </View>
        <View>
          <Text style={FONT_BOLD_16}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="orange" size={20} />
            <FormInput
              placeholder="Masukan kata sandi anda"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              secureTextEntry={form.secureTextEntry ? false : true}
              onChangeText={(text) => setForm({...form, password: text})}
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
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Lupa Sandi');
            }}>
            <Text style={{color: '#F18A04'}}>Lupa kata sandi?</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={masuk} text={'Masuk'} />
      </View>

      <ImageBackground
        style={{
          width: screenWidth,
          height: 150,
          alignSelf: 'flex-end',
        }}
        source={images.backgroundlogin}
      />
    </View>
  );
}

export default Login;
