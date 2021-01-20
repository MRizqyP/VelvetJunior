import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  TouchableOpacity,
  Text,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabComponent from '../components/Tab';
import Login from '../scenes/Login';
import SplashScreen from '../scenes/SplasScreen';
import AturKataSandi from '../scenes/AturKataSandi';
import jwt_decode from 'jwt-decode';
import InputPin from '../scenes/GantiPin';
import GantiKataSandi from '../scenes/GantiKataSandi';
import {Host, Portal} from 'react-native-portalize';
import StackProfile from './StackProfile';
import StackPurchaseOrderSP from './StackPurchaseOrderSP';
import StackPurchaseOrderSM from './StackPurchaseOrderSM';
import StackChats from './StackChat';
import StackDashboards from './StackDashboard';
import StackAbsen from './StackAbsen';
import StackLaporan from './StackLaporan';
import StackReportAbsensi from './StackReportAbsensi';

import StackLaporanSPG from './StackLaporanSPG';
import StackPurchaseOrderSPG from './StackPurchaseOrderSPG';
import StackAbsenSPG from './StackAbsenSPG';
const Tabs = createBottomTabNavigator();
const Logins = createStackNavigator();

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../reduxs/actions';
import {getPin} from '../utils/storage';

function stackTabsSP() {
  return (
    <Host>
      <Tabs.Navigator
        tabBarOptions={{
          style: {
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
            shadowOffset: {width: 0, height: 0},
          },
          keyboardHidesTabBar: true,
        }}>
        <Tabs.Screen
          name="Dashboard"
          component={StackDashboards}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="dashboard" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Absen"
          component={StackAbsen}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_kehadiran" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="PO"
          component={StackPurchaseOrderSP}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="Absen" namaicon="ic_report" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Chat"
          component={StackChats}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_chat" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={StackProfile}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="pasfoto" {...props} />
            ),
          }}
        />
      </Tabs.Navigator>
    </Host>
  );
}
function stackTabsSM() {
  return (
    <Host>
      <Tabs.Navigator
        tabBarOptions={{
          style: {
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
            shadowOffset: {width: 0, height: 0},
          },
          keyboardHidesTabBar: true,
        }}>
        <Tabs.Screen
          name="Dashboard"
          component={StackDashboards}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="dashboard" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Laporan"
          component={StackLaporan}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_kehadiran" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="PO"
          component={StackPurchaseOrderSM}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="Absen" namaicon="ic_report" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Chat"
          component={StackReportAbsensi}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_chat" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={StackProfile}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="pasfoto" {...props} />
            ),
          }}
        />
      </Tabs.Navigator>
    </Host>
  );
}
function stackTabsSPG() {
  return (
    <Host>
      <Tabs.Navigator
        tabBarOptions={{
          style: {
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
            shadowOffset: {width: 0, height: 0},
          },
          keyboardHidesTabBar: true,
        }}>
        <Tabs.Screen
          name="Dashboard"
          component={StackDashboards}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="dashboard" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Laporan"
          component={StackLaporanSPG}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_kehadiran" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="PO"
          component={StackPurchaseOrderSPG}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="Absen" namaicon="ic_report" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Chat"
          component={StackAbsenSPG}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_chat" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={StackProfile}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="pasfoto" {...props} />
            ),
          }}
        />
      </Tabs.Navigator>
    </Host>
  );
}

function stackTabsPPIC() {
  return (
    <Host>
      <Tabs.Navigator
        tabBarOptions={{
          style: {
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 20,
            shadowOffset: {width: 0, height: 0},
          },
          keyboardHidesTabBar: true,
        }}>
        <Tabs.Screen
          name="Dashboard"
          component={StackDashboards}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="dashboard" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Laporan"
          component={StackLaporan}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_kehadiran" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="PO"
          component={StackPurchaseOrderSM}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="Absen" namaicon="ic_report" {...props} />
            ),
          }}
        />
        <Tabs.Screen
          name="Chat"
          component={StackAbsen}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="ic_chat" {...props} />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={StackProfile}
          options={{
            tabBarButton: (props) => (
              <TabComponent label="home" namaicon="pasfoto" {...props} />
            ),
          }}
        />
      </Tabs.Navigator>
    </Host>
  );
}

function Routes(props) {
  const {state, actions} = props;
  const [pin, setRole] = useState('');

  useEffect(() => {
    setTimeout(async () => {
      // let userToken;
      // userToken = null;
      // try {
      //   userToken = await AsyncStorage.getItem('userToken');
      // } catch (e) {
      //   console.log(e);
      // }
      // try {
      //   // AsyncStorage.clear();
      //   const keys = await AsyncStorage.getAllKeys();
      //   const result = await AsyncStorage.multiGet(keys);
      //   return result.map((req) => JSON.parse(req)).forEach(console.log);
      // } catch (error) {
      //   console.error(error);
      // }
      // const keys = await AsyncStorage.getAllKeys();
      // const result = await AsyncStorage.multiGet(keys);
      // AsyncStorage.clear();
      const result = await getPin();
      actions.PIN_REQ({pin: result});
      // actions.RETRIEVE_PIN();
    }, 2000);
  }, []);
  // console.log(state);

  if (state.pin.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <SplashScreen />
      </View>
    );
  }

  if (state.login.isLoggedin && !state.pin.userPin) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <InputPin
          title={'Masukan Pin Baru Anda'}
          subTitle={
            'Silakan masukan PIN baru yang akan Anda gunakan untuk Aplikasi.'
          }
          statusPin={'choose'}
        />
      </View>
    );
  }
  if (state.login.isLoggedin && state.pin.userPin && !state.pin.authPin) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <InputPin
          title={'Masukan Pin Anda'}
          subTitle={'Silakan masukan PIN untuk melanjutkan pekerjaan Anda'}
          statusPin={'enter'}
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Logins.Navigator>
        <Logins.Screen
          name="Log In"
          component={Login}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Logins.Screen
          name="Lupa Sandi"
          component={AturKataSandi}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Logins.Screen
          name="Ganti Kata Sandi"
          component={GantiKataSandi}
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
        />
        <Logins.Screen
          name="DashboardSP"
          component={stackTabsSP}
          options={{
            headerShown: false,
          }}
        />
        <Logins.Screen
          name="DashboardSM"
          component={stackTabsSM}
          options={{
            headerShown: false,
          }}
        />
        <Logins.Screen
          name="DashboardSPG"
          component={stackTabsSPG}
          options={{
            headerShown: false,
          }}
        />
      </Logins.Navigator>
    </NavigationContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
