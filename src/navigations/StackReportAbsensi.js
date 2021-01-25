import React from 'react';
import {TouchableOpacity, Text, LogBox, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import RiwayatAbsen from '../scenes/RiwayatAbsen';
import DetailAbsenMasuk from '../scenes/DetailAbsenMasuk';
import RiwayatAbsenSM from '../scenes/RiwayatAbsenSM';
import ReportAbsensis from '../scenes/ReportAbsensi';
import DetailAbsen from '../scenes/DetailAbsensiSM';
import DetailAbsensiSMSPG from '../scenes/DetailAbsensiSMSPG';
import DetailRiwayatAbsensiSM from '../scenes/DetailRiwayatAbsensiSM';
import DetailRiwayatAbsensiSMSPG from '../scenes/DetailRiwayatAbsensiSMSPG';
import Images from '../assets';
export default function StackReportAbsensi({navigation, route}) {
  const ReportAbsensi = createStackNavigator();
  LogBox.ignoreAllLogs();
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <ReportAbsensi.Navigator>
      <ReportAbsensi.Screen
        name="Report Absensi"
        component={ReportAbsensis}
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
              Report Absensi
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Icon
                name="search"
                color={'white'}
                size={25}
                style={{paddingRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />

      <ReportAbsensi.Screen
        name="Detail Absen Masuk"
        component={DetailAbsenMasuk}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
        }}
      />
      <ReportAbsensi.Screen
        name="Detail Absen SM"
        component={DetailAbsen}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitleStyle: {
            marginLeft: 40,
          },
          headerTitle: 'Detail Absensi',
        }}
      />
      <ReportAbsensi.Screen
        name="Riwayat Kehadiran SM"
        component={RiwayatAbsenSM}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            // backgroundColor: '#51C9C2',
            // marginLeft: 30,
            // justifyContent: 'center',
          },
          headerTitle: 'Riwayat Kehadiran',
          headerTitleStyle: {
            marginLeft: 40,
          },
          headerTransparent: true,
        }}
      />
      <ReportAbsensi.Screen
        name="DetailRiwayatAbsensiSM"
        component={DetailRiwayatAbsensiSM}
        options={({route}) => ({
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: route.params.nama,
          headerTransparent: true,
        })}
      />

      <ReportAbsensi.Screen
        name="Detail Absen SM SPG"
        component={DetailAbsensiSMSPG}
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
      <ReportAbsensi.Screen
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

      <ReportAbsensi.Screen
        name="DetailRiwayatAbsensiSMSPG"
        component={DetailRiwayatAbsensiSMSPG}
        options={({route}) => ({
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTitle: 'Detail Absensi',
          // headerTransparent: true,
        })}
      />
    </ReportAbsensi.Navigator>
  );
}
