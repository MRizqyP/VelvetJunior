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
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_BOLD_20,
  FONT_REGULAR_12,
  FONT_REGULAR_14,
} from '../../styles/typography';
function DashboardSM({navigation}) {
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
            Rizqy Pratamaaa
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
          List Purchase Order Baru
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
            onPress={() =>
              navigation.navigate('Input Absen', {name: 'Kunjungan Baru'})
            }
          />
        </View> */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Detail Purchase Order', {
              namatoko: 'Nerby Baby Shop',
              nopo: '100002299388231',
              status: 'Menunggu',
            })
          }>
          <View style={styles.box}>
            <Text style={[FONT_BOLD_20, {color: 'black'}]}>
              Nerby Baby Shop
            </Text>
            <Text style={[FONT_REGULAR_14, {color: '#F18F01'}]}>
              No PO: 100002299388231
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
              }}>
              <View style={{flex: 0.8}}>
                <Text style={[FONT_BOLD_12, {color: '#AAAAAA'}]}>Tanggal</Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  13 Dec 2020
                </Text>
              </View>

              <View style={{flex: 0.8}}>
                <Text style={[FONT_BOLD_12, {color: '#AAAAAA'}]}>
                  Dibuat Oleh
                </Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  Aneta Škodová
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
              }}>
              <View style={{flex: 0.8}}>
                <Text style={[FONT_BOLD_12, {color: '#AAAAAA'}]}>
                  Total Harga
                </Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  Rp 500.000.000
                </Text>
              </View>

              <View style={{flex: 0.8}}>
                <Text style={[FONT_BOLD_12, {color: '#AAAAAA'}]}>
                  Dibuat Oleh
                </Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  Aneta Škodová
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
              }}>
              <View style={{flex: 0.8}}>
                <Text style={[FONT_BOLD_12, {color: '#AAAAAA'}]}>Kategori</Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  Basic Wear
                </Text>
              </View>

              <View style={{flex: 0.8}}>
                <Text style={[FONT_BOLD_12, {color: '#AAAAAA'}]}>Status</Text>
                <Text
                  style={[
                    FONT_REGULAR_12,
                    {
                      backgroundColor: '#FA6400',
                      padding: 7,
                      borderRadius: 20,
                      textAlign: 'center',
                      color: '#FFFFFF',
                      marginRight: 50,
                    },
                  ]}>
                  Menunggu
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default DashboardSM;
