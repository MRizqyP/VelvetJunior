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
import Profile from '../scenes/Profile';
import GantiSandi from '../scenes/GantiSandi';
import EditProfile from '../scenes/EditProfile';
import GantiPin from '../scenes/GantiPin';
export default function StackProfile({navigation, route}) {
  const Profiles = createStackNavigator();
  LogBox.ignoreAllLogs();
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Profiles.Navigator>
      <Profiles.Screen
        name="Profile"
        component={Profile}
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
              Profil
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Icon
                name="edit"
                color={'white'}
                size={25}
                style={{paddingRight: 15}}
              />
            </TouchableOpacity>
          ),
          headerTitle: '',
        }}
      />
      <Profiles.Screen
        name="Ganti Kata Sandi"
        component={GantiSandi}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          // headerTransparent: true,
        }}
      />
      <Profiles.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#51C9C2',
          },
          headerTransparent: true,
        }}
      />
      <Profiles.Screen
        name="Ganti Pin"
        component={GantiPin}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Profiles.Navigator>
  );
}
