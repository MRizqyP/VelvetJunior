import React from 'react';
import {Button, TouchableOpacity, Text, Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Profile from '../scenes/Profile';
import GantiSandi from '../scenes/GantiSandi';
import EditProfile from '../scenes/EditProfile';
export default function StackProfile({navigation, route}) {
  const Profiles = createStackNavigator();
  //   if (route.state && route.state.index > 0) {
  //     navigation.setOptions({tabBarVisible: false});
  //   } else {
  //     navigation.setOptions({tabBarVisible: true});
  //   }
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
    </Profiles.Navigator>
  );
}
