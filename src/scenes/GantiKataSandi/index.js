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
function GantiKataSandi({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  const [form, setForm] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    token: '',
  });
  const [add, setAdd] = useState(false);

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
        <Image source={Images.logo} style={{width: 120, height: 70}} />
        <View
          style={{alignSelf: 'flex-start', paddingTop: 40, paddingLeft: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Ganti Kata Sandi
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 28,
          marginRight: 28,
        }}>
        <View>
          <Text>Kata Sandi Baru</Text>
          <View style={styles.action}>
            <Feather name="lock" color="orange" size={20} />
            <TextInput
              placeholder="Masukan kata sandi baru Anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              secureTextEntry={form.secureTextEntry ? false : true}
              autoCapitalize="none"
              onChangeText={(text) => setForm({email: text})}
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
        <View>
          <Text>Konfirmasi Kata Sandi</Text>
          <View style={styles.action}>
            <Feather name="lock" color="orange" size={20} />
            <TextInput
              placeholder="Konfirmasi kata sandi Anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              secureTextEntry={form.secureTextEntry ? false : true}
              autoCapitalize="none"
              onChangeText={(text) => setForm({email: text})}
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

        <TouchableOpacity onPress={masuk}>
          <View style={styles.buttonMasuk}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Ubah Kata Sandi
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

export default GantiKataSandi;
