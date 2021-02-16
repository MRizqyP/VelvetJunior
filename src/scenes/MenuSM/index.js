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
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import styles from './styles';
import FormInput from '../../components/FormInput';
import {
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_14,
} from '../../styles/typography';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../../assets';
import jwt_decode from 'jwt-decode';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../reduxs/actions';
import {act} from 'react-test-renderer';

// import Geolocation from '@react-native-community/geolocation';

function MenuSM(props) {
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

  const masuk = async () => {};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={images.logo}
          style={{width: 120, height: 70, marginBottom: 20}}
        />
        <View style={styles.linegrey} />
        <TouchableOpacity onPress={() => navigation.navigate('StackProfile')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.icon4}
              style={{borderRadius: 50, width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.ic_dashboard_o}
              style={{width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackReportAbsensi')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.ic_kehadiran_o}
              style={{width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Kehadiran</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PO')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.ic_report_o}
              style={{width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Purchase Order</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.ic_chat_o}
              style={{width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Percakapan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StackLaporan')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.ic_display_rak_o}
              style={{width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Laporan Display Rak</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackLaporanPenjualanSM')}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={images.ic_report_penjualan_o}
              style={{width: 30, height: 30, marginRight: 20}}
            />
            <Text style={FONT_BOLD_14}>Laporan Penjualan SPG</Text>
          </View>
        </TouchableOpacity>
        {/* <ImageBackground
        style={{
          width: screenWidth,
          height: screenHeight / 4,
          justifyContent: 'flex-end',
        }}
        source={images.backgroundlogin}
      /> */}
      </View>
    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuSM);
