import React from 'react';
import {TouchableOpacity, Text, LogBox, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Absen from '../scenes/Absen';
import DetailAbsen2 from '../scenes/DetailAbsen2';
import InputFormAbsen from '../scenes/InputFormAbsen';
import RiwayatAbsen from '../scenes/RiwayatAbsen';
import DetailAbsen from '../scenes/DetailAbsen';
import DetailRiwayatAbsensiSMSPG from '../scenes/DetailRiwayatAbsensiSMSPG';
import Images from '../assets/';
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

      <Absens.Screen
        name="Detail Absen 2"
        component={DetailAbsen2}
        options={({route}) => ({
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: `Detail ${route.params.name}`,
          // headerTransparent: true,
        })}
      />
      <Absens.Screen
        name="Riwayat Kehadiran"
        component={RiwayatAbsen}
        options={{
          headerTintColor: 'white',
          headerTransparent: true,
        }}
      />

      <Absens.Screen
        name="DetailAbsen"
        component={DetailAbsen}
        options={({route}) => ({
          headerTintColor: 'white',

          headerTransparent: true,
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: route.params.name,
          // headerTransparent: true,
        })}
      />

      {/* <Absens.Screen
        name="DetailRiwayatAbsensiSMSPG"
        component={DetailRiwayatAbsensiSMSPG}
        options={({route}) => ({
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: `Detail ${route.params.name}`,
          // headerTransparent: true,
        })}
      /> */}
    </Absens.Navigator>
  );
}
