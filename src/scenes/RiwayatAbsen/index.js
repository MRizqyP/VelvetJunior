import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Images from '../../assets';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
function RiwayatAbsen({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;
  return (
    <View style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      <View style={[styles.boxInfo, {marginTop: 70}]}>
        <View style={{margin: 16}}>
          <View style={{flexDirection: 'row'}}>
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
          <View style={styles.line} />
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
      <View style={styles.boxInfo}>
        <View style={{margin: 16}}>
          <View style={{flexDirection: 'row'}}>
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
          <View style={styles.line} />
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
    </View>
  );
}

export default RiwayatAbsen;
