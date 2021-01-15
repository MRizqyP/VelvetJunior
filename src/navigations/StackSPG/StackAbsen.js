import React from 'react';
import {TouchableOpacity, Text, LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Absen from '../../scenes/SPG/Absensi';
import AbsenKeluar from '../../scenes/AbsenKeluar';
import AbsenMasuk from '../../scenes/AbsenMasuk';
import DetailAbsenMasuk from '../../scenes/DetailAbsenMasuk';
import RiwayatAbsen from '../../scenes/RiwayatAbsen';
export default function StackChat({navigation, route}) {
  const Absens = createStackNavigator();
  LogBox.ignoreAllLogs();
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Riwayat Kehadiran')}>
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
        name="Absen Masuk"
        component={AbsenMasuk}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />
      <Absens.Screen
        name="Detail Absen Masuk"
        component={DetailAbsenMasuk}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />
      <Absens.Screen
        name="Riwayat Kehadiran"
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
