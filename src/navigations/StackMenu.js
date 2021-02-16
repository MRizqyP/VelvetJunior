import React from 'react';
import {
  Button,
  TouchableOpacity,
  Text,
  Alert,
  View,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Menu from '../scenes/MenuSM';
import StackLaporan from './StackLaporan';
import StackReportAbsensi from './StackReportAbsensi';

import StackLaporanPenjualanSM from './StackLaporanPenjualanSM';
import StackProfile from './StackProfile';
export default function StackMenu({navigation, route}) {
  const Menus = createStackNavigator();
  LogBox.ignoreAllLogs();
  // if (route.state && route.state.index > 0) {
  //   navigation.setOptions({tabBarVisible: false});
  // } else {
  //   navigation.setOptions({tabBarVisible: true});
  // }

  return (
    <Menus.Navigator>
      <Menus.Screen
        name="Menu"
        component={Menu}
        options={{
          headerTransparent: true,
          headerLeft: () => <Text></Text>,

          headerTitle: '',
        }}
      />
      <Menus.Screen
        name="StackLaporan"
        component={StackLaporan}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <Text></Text>,
          tabBarButton: (props) => (
            <TabComponent label="home" namaicon="ic_chat" {...props} />
          ),
        }}
      />
      <Menus.Screen
        name="StackReportAbsensi"
        component={StackReportAbsensi}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <Text></Text>,
          tabBarButton: (props) => (
            <TabComponent label="home" namaicon="ic_chat" {...props} />
          ),
        }}
      />
      <Menus.Screen
        name="StackLaporanPenjualanSM"
        component={StackLaporanPenjualanSM}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <Text></Text>,
          tabBarButton: (props) => (
            <TabComponent label="home" namaicon="ic_chat" {...props} />
          ),
        }}
      />
      <Menus.Screen
        name="StackProfile"
        component={StackProfile}
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <Text></Text>,
          tabBarButton: (props) => (
            <TabComponent label="home" namaicon="ic_chat" {...props} />
          ),
        }}
      />
      {/* <Menus.Screen
        name="Chat"
        component={StackReportAbsensi}
        options={{
          tabBarButton: (props) => (
            <TabComponent label="home" namaicon="ic_chat" {...props} />
          ),
        }}
      /> */}
    </Menus.Navigator>
  );
}
