import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets';
import styles from './styles';

function Chatting({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;
  const [show, setShow] = useState(true);
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('WAW')}>
          <Feather
            name="more-vertical"
            color={'white'}
            size={25}
            style={{paddingRight: 15}}
          />
        </TouchableOpacity>
      ),
    });
    setShow(false);
  }, [show]);
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{margin: 18}}>
          <View style={styles.containerReceive}>
            <Text style={{color: '#fff', padding: 15, fontSize: 14}}>
              Selamat Sore Pak
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'flex-start',
              backgroundColor: '#51C9C2',
              borderRadius: 12,
            }}>
            <Text style={{color: '#fff', padding: 15, fontSize: 14}}>
              Saya mau request 30 produk baju anak usia 1 tahun dan 12 sepatu
              untuk usia 0-6 bulan
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              padding: 3,
              fontSize: 12,
              marginLeft: 200,
            }}>
            04.20 PM
          </Text>
          <View
            style={{
              flexDirection: 'row',
              //   width: '60%',
              alignSelf: 'flex-end',
              backgroundColor: '#F18F01',
              borderRadius: 12,
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', padding: 15, fontSize: 14}}>
              Selamat Sore
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              //   width: '60%',
              alignSelf: 'flex-end',
              backgroundColor: '#F18F01',
              borderRadius: 12,
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', padding: 15, fontSize: 14}}>
              Saya coba cek dulu ya
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              padding: 3,
              fontSize: 12,
              marginLeft: 160,
            }}>
            04.22 PM
          </Text>
          <View
            style={{
              flexDirection: 'row',
              //   width: '60%',
              alignSelf: 'flex-start',
              backgroundColor: '#51C9C2',
              borderRadius: 12,
              marginBottom: 10,
            }}>
            <Text style={{color: '#fff', padding: 15, fontSize: 14}}>Ok</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'flex-start',
              backgroundColor: '#51C9C2',
              borderRadius: 12,
              //   marginBottom: 10,
            }}>
            <Text style={{color: '#fff', padding: 15, fontSize: 14}}>
              Saya tunggu infonya ya Pak
            </Text>
          </View>
          <Text
            style={{
              color: 'black',
              padding: 3,
              fontSize: 12,
              marginLeft: 200,
            }}>
            04.25 PM
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 15,
          paddingRight: 15,
          paddingTop: 10,
          paddingBottom: 5,
          backgroundColor: 'white',
          elevation: 3,
        }}>
        <Feather
          name="paperclip"
          color={'orange'}
          size={25}
          style={{paddingRight: 15}}
        />
        <TextInput style={styles.input} placeholder="Tulis Pesan disini..." />
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#51C9C2',
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: 5,
              padding: 5,
            }}>
            <Feather name="send" color={'white'} size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Chatting;
