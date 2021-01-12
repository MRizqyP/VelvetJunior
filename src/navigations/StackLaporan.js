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
import Laporan from '../scenes/Laporan';
import Berhasil from '../scenes/Berhasil';
import LaporanSalesOrder from '../scenes/LaporanSalesOrder';
export default function StackChat({navigation, route}) {
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
