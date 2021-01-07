import React from 'react';
import {Button, TouchableOpacity, Text, Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Absen from '../scenes/Absen';
import AbsenKeluar from '../scenes/AbsenKeluar';
import RiwayatAbsen from '../scenes/RiwayatAbsen';
export default function StackChat({navigation, route}) {
  const Absens = createStackNavigator();
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
