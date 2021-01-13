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
import PurchaseOrder from '../scenes/PurchaseOrder';
import POBaru from '../scenes/POBaru';
import DetailPO from '../scenes/DetailPO';
import Berhasil from '../scenes/Berhasil';
import GantiAlamat from '../scenes/GantiAlamat';
export default function StackPurchaseOrdersSP({navigation, route}) {
  const PurchaseOrders = createStackNavigator();
  LogBox.ignoreAllLogs();
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
        name="Detail Laporan Penjualan"
        component={DetailPO}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitleStyle: {
            fontSize: 17,
            fontFamily: 'Rubik-Bold',
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
