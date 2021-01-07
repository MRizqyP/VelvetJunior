import React from 'react';
import {Button, TouchableOpacity, Text, Alert, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Chat from '../scenes/Percakapan';
import Chatting from '../scenes/ListPercakapan';
export default function StackChat({navigation, route}) {
  const Chats = createStackNavigator();
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false});
  } else {
    navigation.setOptions({tabBarVisible: true});
  }
  return (
    <Chats.Navigator>
      <Chats.Screen
        name="Absen"
        component={Chat}
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
              Percakapan
            </Text>
          ),
          // headerShown :
          headerTitle: '',
        }}
      />
      <Chats.Screen
        name="Chatting"
        component={Chatting}
        options={({route}) => ({
          headerTintColor: 'white',
          title: route.params.name,
          headerStyle: {
            backgroundColor: '#51C9C2',
          },

          // headerTransparent: true,
        })}
      />
    </Chats.Navigator>
  );
}
