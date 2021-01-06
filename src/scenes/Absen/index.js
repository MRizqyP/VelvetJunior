import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Dashed from '../../components/LineDashed';
import styles from './styles';
import Images from '../../assets';
function Absen({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      <View style={styles.headerBox}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 10,
              alignItems: 'center',
            }}>
            <Image
              source={Images.img_absen_masuk}
              style={{width: 100, height: 120}}
            />
            <Text style={{textAlign: 'center'}}>Absen Masuk</Text>
          </View>
          <View style={{flex: 0.1, justifyContent: 'center'}}>
            <Dashed heightvalue={80} flexDirectionvalue={'column'} />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Absen Keluar')}>
              <Image
                source={Images.img_absen_keluar}
                style={{width: 100, height: 120}}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Absen Keluar</Text>
          </View>
        </View>
      </View>

      <View style={styles.boxInfo}>
        <View style={{margin: 16}}>
          <Text style={styles.textTitle}>Kehadiran Hari Ini</Text>
          <Dashed />

          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Feather
              name="arrow-up-circle"
              color="green"
              size={20}
              style={styles.backgroundArrowGreen}
            />
            <View style={{marginLeft: 10, flex: 1}}>
              <Text style={{color: '#99C324'}}>Absen Masuk</Text>
              <Text style={{marginTop: 10}}>
                Sedang mengirimkan barang di Toko Indah Busana
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.textSub}>Sen , 30 November</Text>
                <Text style={styles.textSub}>08:32 AM</Text>
              </View>
            </View>
          </View>
          <Dashed />
          <View style={{flexDirection: 'row', marginTop: 15}}>
            <Feather
              name="arrow-down-circle"
              color="red"
              size={20}
              style={styles.backgroundArrowRed}
            />

            <View style={{marginLeft: 10, flex: 1}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#E02020'}}>Absen Keluar</Text>
                <View style={styles.waitbox}>
                  <Text style={{fontSize: 12, color: 'white'}}>Menunggu</Text>
                </View>
              </View>
              <Text style={{marginTop: 10}}>
                Sedang mengirimkan barang di Toko Indah Busana
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={styles.textSub}>Sen , 30 November</Text>
                <Text style={styles.textSub}>08:32 AM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Absen;
