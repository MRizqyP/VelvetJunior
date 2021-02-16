import React from 'react';
import {
  Button,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import LaporanDisplay from '../scenes/LaporanDisplay';
import KondisiAkhirDisplay from '../scenes/InputFormAbsen';
import DetailKondisiAkhirDisplay from '../scenes/DetailKondisiAkhirSPG';

import RiwayatDisplayRak from '../scenes/RiwayatDisplayRak';
import Berhasil from '../scenes/Berhasil';
import LaporanSalesOrder from '../scenes/LaporanSalesOrder';

import Images from '../assets';
export default function StackLaporan({navigation, route}) {
  const Laporans = createStackNavigator();
  LogBox.ignoreAllLogs();
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Laporans.Navigator>
      <Laporans.Screen
        name="Laporan"
        component={LaporanDisplay}
        options={{
          headerTintColor: 'white',

          headerTransparent: true,
          headerTitle: '',
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log('WAW')}>
              <Image
                source={Images.ic_history}
                style={{width: 25, height: 25, marginRight: 20}}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <Text
              style={{
                marginLeft: 15,
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Laporan Display
            </Text>
          ),
        }}
      />
      <Laporans.Screen
        name="Kondisi Akhir"
        component={KondisiAkhirDisplay}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: 'Kondisi Akhir Display',
        }}
      />
      <Laporans.Screen
        name="DetailKondisiAkhirDisplay"
        component={DetailKondisiAkhirDisplay}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Riwayat Display Rak')}>
              <Image
                source={Images.ic_history}
                style={{width: 25, height: 25, marginRight: 20}}
              />
            </TouchableOpacity>
          ),
          headerTitle: 'Detail Kondisi Display Rak',
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: 'Rubik-Bold',
          },
        }}
      />
      {/* <Laporans.Screen
        name="Laporan Penjualan"
        component={LaporanPenjualan}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      /> */}
      <Laporans.Screen
        name="Riwayat Display Rak"
        component={RiwayatDisplayRak}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
            // marginLeft: 30,
          },
          // headerTransparent: true,
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
