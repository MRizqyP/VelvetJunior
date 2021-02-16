import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Images from '../../assets';
import styles from './styles';
import jwt_decode from 'jwt-decode';
import Dashed from '../../components/LineDashed';
import Button from '../../components/Button';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../reduxs/actions';

function Profile(props) {
  const {state, actions, navigation} = props;

  const logout = async () => {
    actions.LOGOUT();
  };

  useEffect(() => {
    actions.GET_USER_PROFILE({token: state.login.userToken});
  }, []);

  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 2;
  return (
    <View style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      {/* <View style={styles.header}>
        <View
          style={{
            width: 98,
            height: 98,
            borderRadius: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
          }}>
          <Image
            source={Images.icon4}
            style={{width: 90, height: 90, borderRadius: 50}}
          />
        </View>

        <Text style={[styles.textName, {marginTop: 15}]}>
          {state.profile.user.firstName} {state.profile.user.lastName}
        </Text>
        <Text style={[styles.textSub, {marginTop: 15}]}>
          {state.profile.user.role}
        </Text>
      </View>
      <View style={styles.boxInfo}>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTitle}>NIK</Text>
            <Text style={styles.textsubTitle}>{state.profile.user.nik}</Text>
          </View>
          <Dashed />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>Email</Text>
            <Text style={styles.textsubTitle}>{state.profile.user.email}</Text>
          </View>
          <Dashed />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>No.Telepon</Text>
            <Text style={styles.textsubTitle}>
              {state.profile.user.phoneNumber}
            </Text>
          </View>
          <Dashed />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>Jenis Kelamin</Text>
            <Text style={styles.textsubTitle}>{state.profile.user.gender}</Text>
          </View>
          <Dashed />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>Kata Sandi</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Ganti Kata Sandi')}>
              <Text style={{color: '#F18A04', fontSize: 13}}>
                Ganti Kata Sandi
              </Text>
            </TouchableOpacity>
          </View>
          <Dashed />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>Ganti PIN</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Ganti Pin')}>
              <Text style={{color: '#F18A04', fontSize: 13}}>Ganti PIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      */}
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          text={'Keluar'}
          onPress={() => navigation.navigate('Log In')}
          backgroundColor={'red'}
        />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
