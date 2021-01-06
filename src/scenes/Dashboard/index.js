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
import Dashed from '../../components/LineDashed';
import styles from './styles';
import Images from '../../assets';
import CardInfo from './components/CardInfo';
import Button from '../../components/Button';
import {KategoriProduk} from './components/modals/KategoriProduk';
function Dashboard({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 3;
  const modals = Array.from({length: 1}).map((_) => useRef(null).current);
  const onOpen = () => {
    modals[0].open();
  };
  return (
    <ScrollView style={styles.container}>
      <Portal>
        <KategoriProduk ref={(el) => (modals[0] = el)} />
      </Portal>

      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      <View>
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
            <View
              style={{
                padding: 30,
                justifyContent: 'center',
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
            </View> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Dashboard;
