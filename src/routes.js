import React, {Component, useRef} from 'react';
import {Button, TouchableOpacity, Text, Alert, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Login from './components/Login';
// import Register from './components/Register';

import TabComponent from './components/Tab';

import Absen from './scenes/Absen';
import AbsenKeluar from './scenes/AbsenKeluar';
import Laporan from './scenes/Laporan';
import Chat from './scenes/Percakapan';
import Chatting from './scenes/ListPercakapan';
import Login from './scenes/Login';
import AturKataSandi from './scenes/AturKataSandi';
import RiwayatAbsen from './scenes/RiwayatAbsen';
import Profile from './scenes/Profile';
import GantiSandi from './scenes/GantiSandi';
import EditProfile from './scenes/EditProfile';
import LaporanSalesOrder from './scenes/LaporanSalesOrder';
import PurchaseOrder from './scenes/PurchaseOrder2';
import POBaru from './scenes/POBaru';
import DetailPO from './scenes/DetailPO';
import Berhasil from './scenes/Berhasil';
import Icon from 'react-native-vector-icons/Feather';
import Dashboard from './scenes/Dashboard';
import GantiKataSandi from './scenes/GantiKataSandi';
import LaporanDisplay from './scenes/LaporanDisplay';
import KondisiAkhir from './scenes/KondisiAkhir';
import GantiAlamat from './scenes/GantiAlamat';
import {Host, Portal} from 'react-native-portalize';

const Tabs = createBottomTabNavigator();
const Logins = createStackNavigator();
const Profiles = createStackNavigator();
const Absens = createStackNavigator();
const Chats = createStackNavigator();
const Dashboards = createStackNavigator();
const Laporans = createStackNavigator();
const PurchaseOrders = createStackNavigator();

function StackPurchaseOrders({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <PurchaseOrders.Navigator>
      <PurchaseOrders.Screen
        name="PO"
        component={PurchaseOrder}
        options={{
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              List Data PO
            </Text>
          ),

          headerTitle: '',
          headerTransparent: true,
        }}
      />
      <PurchaseOrders.Screen
        name="Purchase Order Baru"
        component={POBaru}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />
      <PurchaseOrders.Screen
        name="Detail Purchase Order"
        component={DetailPO}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />

      <PurchaseOrders.Screen
        name="Berhasil"
        component={Berhasil}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <PurchaseOrders.Screen
        name="Ganti Alamat"
        component={GantiAlamat}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />
    </PurchaseOrders.Navigator>
  );
}

function StackDashboards({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Dashboards.Navigator>
      <Dashboards.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTransparent: true,
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 15,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Dashboard
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('BELL')}>
              <Icon
                name="bell"
                color={'white'}
                size={25}
                style={{paddingRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <Dashboards.Screen
        name="Laporan Sales Order"
        component={LaporanSalesOrder}
      />
      <Dashboards.Screen
        name="Berhasil"
        component={Berhasil}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Dashboards.Navigator>
  );
}

function StackLaporans({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Laporans.Navigator>
      <Laporans.Screen
        name="Laporan"
        component={Laporan}
        options={{
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Laporan
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('WAW')}>
              <Icon
                name="bell"
                color={'#000'}
                size={25}
                style={{paddingRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <Laporans.Screen
        name="Laporan Sales Order"
        component={LaporanSalesOrder}
      />
      <Laporans.Screen
        name="Berhasil"
        component={Berhasil}
        options={{
          headerShown: false,
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Laporans.Navigator>
  );
}

function StackChats({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Chats.Navigator>
      <Chats.Screen
        name="Absen"
        component={Chat}
        options={{
          headerTransparent: true,
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Percakapan
            </Text>
          ),
          // headerShown :
          headerTitle: '',
        }}
      />
      <Chats.Screen
        name="Chatting"
        component={Chatting}
        options={({route}) => ({
          headerTintColor: 'white',
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#51C9C2',
          },

          // headerTransparent: true,
        })}
      />
    </Chats.Navigator>
  );
}

function StackAbsen({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Absens.Navigator>
      <Absens.Screen
        name="Absen"
        component={Absen}
        options={{
          headerTransparent: true,
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Kehadiran
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Riwayat')}>
              <Icon
                name="clock"
                color={'white'}
                size={25}
                style={{paddingRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <Absens.Screen
        name="Absen Keluar"
        component={AbsenKeluar}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />
      <Absens.Screen
        name="Riwayat"
        component={RiwayatAbsen}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            // backgroundColor: '#51C9C2',
            // marginLeft: 30,
            justifyContent: 'center',
          },
          headerTransparent: true,
        }}
      />
    </Absens.Navigator>
  );
}

function StackProfile({navigation}) {
  return (
    <Profiles.Navigator>
      <Profiles.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTransparent: true,
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 30,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Profil
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Icon
                name="edit"
                color={'white'}
                size={25}
                style={{paddingRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <Profiles.Screen
        name="Ganti Kata Sandi"
        component={GantiSandi}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          // headerTransparent: true,
        }}
      />
      <Profiles.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTransparent: true,
        }}
      />
    </Profiles.Navigator>
  );
}

function stackTabs() {
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
          component={StackPurchaseOrders}
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

export default function Routes() {
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
          name="Home"
          component={stackTabs}
          options={{
            headerShown: false,
          }}
        />
      </Logins.Navigator>
    </NavigationContainer>
  );
}
