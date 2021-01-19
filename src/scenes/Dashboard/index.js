import React, {useRef} from 'react';
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
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import Header from '../../components/HeaderModal';
// import Dashed from '../../components/LineDashed';
import styles from './styles';
import Images from '../../assets';
import CardInfo from './components/CardInfo';
import Button from '../../components/Button';
import Dashed from '../../components/LineDashed';
import {KategoriProduk} from './components/modals/KategoriProduk';
import {
  FONT_BOLD_10,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_14,
} from '../../styles/typography';
function Dashboard({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  const modals = Array.from({length: 1}).map((_) => useRef(null).current);
  const onOpen = () => {
    modals[0].open();
  };
  return (
    <ScrollView style={styles.container}>
      <Portal>
        <KategoriProduk ref={(el) => (modals[0] = el)} />
      </Portal>

      <View style={[styles.formBox]}>
        <Image
          source={Images.backgroundprofile}
          style={{
            width: screenWidth,
            height: screenHeight / 3,
            position: 'absolute',
          }}
        />
        <View style={styles.containerName}>
          <Text style={{fontSize: 14, color: 'white'}}>Hi,</Text>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Rizqy Pratama
          </Text>
        </View>
        <View style={[styles.parent]}>
          <CardInfo
            title={'Dibuat'}
            number={'20'}
            text={'Purchase Order'}
            colorline={'#FA6400'}
          />
          <CardInfo
            title={'Konfirmasi Toko'}
            number={'15'}
            text={'Purchase Order'}
            colorline={'#6FC216'}
          />
          <CardInfo
            title={'Revisi'}
            number={'5'}
            text={'Purchase Order'}
            colorline={'#E02020'}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Button text={'Buat PO Baru'} onPress={onOpen} />
        </View>
      </View>

      <View style={[styles.formBox, {marginTop: 10}]}>
        <Text style={[FONT_BOLD_16, {marginBottom: 10}]}>
          Kunjungan Hari Ini
        </Text>
        <Dashed />
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Images.img_visiting_toko}
            style={{width: screenWidth / 2, height: screenHeight / 4}}
          />
          <Text style={[FONT_REGULAR_14, {color: '#AAAAAA'}]}>
            Anda belum melakukan kunjungan hari ini{' '}
          </Text>
          <Button
            text={'Buat Kunjungan'}
            onPress={() => navigation.navigate('Kunjungan Baru')}
          />
        </View> */}
        <View style={styles.boxInfo}>
          <View style={{padding: 16}}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Feather name="shopping-cart" color="#F18F01" size={20} />
              <View style={{marginLeft: 10, flex: 1}}>
                <Text style={[FONT_BOLD_14, {color: 'black'}]}>
                  Nerby Baby Shop
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View>
                    <Text style={[FONT_BOLD_10, {color: '#AAAAAA'}]}>
                      Tanggal
                    </Text>
                    <Text style={FONT_REGULAR_14}>11 Des 2020</Text>
                  </View>
                  <View>
                    <Text style={[FONT_BOLD_10, {color: '#6BC60B'}]}>
                      Check In
                    </Text>
                    <Text style={FONT_REGULAR_14}>10:30 AM</Text>
                  </View>
                  <View>
                    <Text style={[FONT_BOLD_10, {color: '#E02020'}]}>
                      Check Out
                    </Text>
                    <Text style={FONT_REGULAR_14}>11:30 AM</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button text={'Check Out Kunjungan'} onPress={onOpen} />
        </View>
      </View>
      <View style={[styles.formBox, {marginTop: 10}]}>
        <Text style={[FONT_BOLD_16, {marginBottom: 10}]}>
          Kehadiran Hari Ini
        </Text>
        <Dashed />
        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={Images.img_absen_default}
            style={{width: screenWidth / 2, height: screenHeight / 4}}
          />
          <Text style={[FONT_SIZE_14, {color: '#AAAAAA'}]}>
            Anda belum melakukan absen hari ini
          </Text>
        </View> */}
        <View style={styles.boxInfo}>
          <View style={{margin: 14}}>
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
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  padding: 23,
                  alignItems: 'center',
                }}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <Text style={{fontSize: 11, color: '#AAAAAA', marginTop: 10}}>
                  Anda belum melakukan absen keluar hari ini
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
      </View>
    </ScrollView>
  );
}

export default Dashboard;
