import React from 'react';
import {TouchableOpacity, Text, LogBox, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Absen from '../scenes/AbsenSPG';
import DetailAbsenMasuk from '../scenes/DetailAbsenMasuk';
import RiwayatAbsen from '../scenes/RiwayatAbsen';
import Images from '../assets';
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
              <Image
                source={Images.ic_history}
                style={{width: 25, height: 25, marginRight: 20}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
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
