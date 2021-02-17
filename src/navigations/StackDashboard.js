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
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import LaporanSalesOrder from '../scenes/LaporanSalesOrder';
import Dashboard from '../scenes/Dashboard';
import Berhasil from '../scenes/Berhasil';
import Notfikasi from '../scenes/Notfikasi';
import InputFormAbsen from '../scenes/InputFormAbsen';
export default function StackDashboards({navigation, route}) {
  const Dashboards = createStackNavigator();
  LogBox.ignoreAllLogs();
  // if (route.state && route.state.index > 0) {
  //   navigation.setOptions({tabBarVisible: false});
  // } else {
  //   navigation.setOptions({tabBarVisible: true});
  // }
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
            <TouchableOpacity onPress={() => navigation.navigate('Notifikasi')}>
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
        name="Input Absen"
        component={InputFormAbsen}
        options={({route}) => ({
          headerTintColor: 'white',
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        })}
      />

      <Dashboards.Screen
        name="Notifikasi"
        component={Notfikasi}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
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
