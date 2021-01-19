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
import {FONT_BOLD_16, FONT_REGULAR_14} from '../../styles/typography';
function LaporanDisplay({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{
          width: screenWidth,
          height: screenHeight / 4,
          position: 'absolute',
        }}
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
              alignItems: 'center',
              padding: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Absen Masuk')}>
              <Image
                source={Images.img_display_masuk}
                style={{width: 100, height: 120}}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Kondisi Awal</Text>
          </View>
          <View
            style={{
              flex: 0.1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
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
              onPress={() => navigation.navigate('Kondisi Akhir')}>
              <Image
                source={Images.img_display_keluar}
                style={{width: 100, height: 120}}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Kondisi Akhir</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailKondisiAkhirDisplay')}>
        <View style={styles.boxInfo}>
          <View style={{padding: 18}}>
            <Text style={FONT_BOLD_16}>Keadaan Display Hari ini</Text>
            <Dashed />
          </View>
          <View style={{margin: 14}}>
            <View style={{flexDirection: 'row'}}>
              <Feather
                name="arrow-up-circle"
                color="green"
                size={20}
                style={styles.backgroundArrowGreen}
              />
              <View style={{marginLeft: 10, flex: 1}}>
                <Text style={{color: '#99C324'}}>Kondisi awal display</Text>
                <Text style={{marginTop: 10}}>
                  Display baju terlihat agak berdebu dan perlu penggantian
                  dengan display baru.
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
              <View
                style={{
                  padding: 23,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <Text
                  style={[
                    FONT_REGULAR_14,
                    {color: '#AAAAAA', marginTop: 10, textAlign: 'center'},
                  ]}>
                  Anda belum melakukan pengecekan display sebelum pulang
                </Text>
              </View>

              {/* <View style={{marginLeft: 10, flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
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
              </View> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default LaporanDisplay;
