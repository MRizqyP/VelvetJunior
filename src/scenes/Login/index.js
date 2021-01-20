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
import {FONT_BOLD_14, FONT_REGULAR_14} from '../../styles/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../assets';
import jwt_decode from 'jwt-decode';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../reduxs/actions';
import {act} from 'react-test-renderer';

function Login(props) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  const [form, setForm] = useState({
    email: '',
    password: '',
    secureTextEntry: false,
    token: '',
  });
  const [add, setAdd] = useState(false);
  const {state, actions, navigation} = props;
  const onSuccess = () => {
    console.log('Berhasil Masuk');
  };

  const masuk = async () => {
    await actions.LOGIN_REQ(
      {email: form.email, password: form.password},
      onSuccess,
    );
  };
  if (state.login.userToken) {
    var decoded = jwt_decode(state.login.userToken);
    console.log(decoded.role.name);
    if (decoded.role.name === 'Sales Person') {
      navigation.navigate('DashboardSP');
    } else if (decoded.role.name === 'Sales Manager') {
      navigation.navigate('DashboardSM');
    } else if (decoded.role.name === 'SPG') {
      navigation.navigate('DashboardSPG');
    }
  }
  console.log(state);

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
        {state.login.isError ? (
          <View style={styles.errorMessage}>
            <Feather name="alert-circle" color="red" size={20} />
            <Text style={styles.textError}>
              Kata Sandi yang anda masukan salah!
            </Text>
          </View>
        ) : null}
      </View>
      <View
        style={{
          marginLeft: 28,
          marginRight: 28,
        }}>
        <View>
          <Text style={FONT_BOLD_14}>NIK</Text>
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
        <View style={{marginTop: 10}}>
          <Text
            style={
              state.login.isError
                ? [FONT_BOLD_14, {color: '#E02020'}]
                : [FONT_BOLD_14]
            }>
            Kata Sandi
          </Text>
          <View
            style={state.login.isError ? styles.actionError : styles.action}>
            <Feather name="lock" color="orange" size={20} />
            <FormInput
              placeholder="Masukan kata sandi anda"
              placeholderTextColor="#666666"
              autoCapitalize="none"
              secureTextEntry={form.secureTextEntry ? false : true}
              onChangeText={(text) => setForm({...form, password: text})}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {!form.secureTextEntry ? (
                <Feather name="eye-off" color="orange" size={20} />
              ) : (
                <Feather name="eye" color="orange" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Lupa Sandi');
            }}>
            <Text style={[FONT_REGULAR_14, {color: '#F18A04'}]}>
              Lupa kata sandi?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button
            // onPress={() => navigation.navigate('DashboardSP')}
            onPress={
              () => actions.LOGIN({email: 'qwe', password: 'qweasd'})
              // navigation.navigate('DashboardSP')
            }
            text={'Masuk'}
          />
        </View>
      </View>

      <ImageBackground
        style={{
          width: screenWidth,
          height: screenHeight / 4,
          justifyContent: 'flex-end',
        }}
        source={images.backgroundlogin}
      />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(appActions.actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
