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
import PurchaseOrderSM from '../scenes/PurchaseOrderSM';
import POBaruSM from '../scenes/POBaruSM';
import DetailPO from '../scenes/DetailPOSM';
import Berhasil from '../scenes/Berhasil';
import GantiAlamat from '../scenes/GantiAlamat';
export default function StackPurchaseOrdersSM({navigation, route}) {
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
        component={PurchaseOrderSM}
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
        name="Purchase Order Baru SM"
        component={POBaruSM}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: 'Purchase Order Baru',
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
