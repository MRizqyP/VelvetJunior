import React from 'react';
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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../reduxs/actions';

function Profile(props) {
  const {state, actions, navigation} = props;
  const logout = async () => {
    actions.LOGOUT();
    navigation.navigate('Log In');
  };
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 2;
  return (
    <View style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      <View style={styles.header}>
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
          Mohammad Rizqy Pratama
        </Text>
        <Text style={[styles.textSub, {marginTop: 15}]}>Sales</Text>
      </View>
      <View style={styles.boxInfo}>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTitle}>NIK</Text>
            <Text style={styles.textsubTitle}>10000299388432</Text>
          </View>
          <View style={styles.line}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>Email</Text>
            <Text style={styles.textsubTitle}>rizqy.pratama@bts.id</Text>
          </View>
          <View style={styles.line}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>No.Telepon</Text>
            <Text style={styles.textsubTitle}>+62 811 2228 3744</Text>
          </View>
          <View style={styles.line}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={styles.textTitle}>Jenis Kelamin</Text>
            <Text style={styles.textsubTitle}>Laki - Laki</Text>
          </View>
          <View style={styles.line} />
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
        </View>
      </View>
      <TouchableOpacity onPress={logout}>
        <View style={styles.buttonMasuk}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Keluar
          </Text>
        </View>
      </TouchableOpacity>
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
