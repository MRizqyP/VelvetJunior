import React, {useEffect} from 'react';
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
import {
  FONT_BOLD_10,
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_BOLD_18,
  FONT_REGULAR_10,
  FONT_REGULAR_12,
  FONT_REGULAR_14,
} from '../../styles/typography';

import {useNavigation} from '@react-navigation/native';
function DetailAbsenSM({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={() => navigation.navigate('Riwayat Kehadiran SM')}>
          <Feather name="clock" color={'white'} size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={[styles.formBox, {marginBottom: 10}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 15,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={Images.icon4}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 50,
                  }}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={FONT_BOLD_18}>Nerte Gronw</Text>

                  <Text
                    style={[
                      FONT_REGULAR_12,
                      {
                        backgroundColor: '#FA6400',
                        padding: 4,
                        borderRadius: 20,
                        textAlign: 'center',
                        color: '#FFFFFF',
                        marginTop: 4,
                      },
                    ]}>
                    Sales Person
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: 'white'}}>
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
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail Absen Masuk')}
                style={{
                  justifyContent: 'center',
                  padding: 10,
                  alignItems: 'center',
                }}>
                <Feather
                  name="arrow-up-circle"
                  color="#6BC60B"
                  size={20}
                  style={styles.backgroundArrowGreen}
                />
                <Text style={[FONT_BOLD_14, {color: '#6BC60B', marginTop: 5}]}>
                  Absen Masuk
                </Text>
                <Text
                  style={[FONT_REGULAR_12, {color: '#AAAAAA', marginTop: 5}]}>
                  11 Desember 2020
                </Text>
                <Text style={[FONT_BOLD_12, {color: 'black', marginTop: 5}]}>
                  09:28 AM
                </Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
              onPress={() => navigation.navigate('Absen Masuk')}>
              <Image
                source={Images.img_absen_masuk}
                style={{width: 100, height: 120}}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Absen Masuk</Text> */}
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
              <Feather
                name="arrow-down-circle"
                color="#DB5943"
                size={20}
                style={styles.backgroundArrowRed}
              />
              <Text style={[FONT_BOLD_14, {color: '#DB5943', marginTop: 5}]}>
                Absen Keluar
              </Text>
              <Text style={[FONT_REGULAR_12, {color: '#AAAAAA', marginTop: 5}]}>
                11 Desember 2020
              </Text>
              <Text style={[FONT_BOLD_12, {color: 'black', marginTop: 5}]}>
                05:28 AM
              </Text>
              {/* <TouchableOpacity
              onPress={() => navigation.navigate('Absen Keluar')}>
              <Image
                source={Images.img_absen_keluar}
                style={{width: 100, height: 120}}
              />
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>Absen Keluar</Text> */}
            </View>
          </View>
        </View>
        <View style={{padding: 18}}>
          <Text style={FONT_BOLD_16}>Kunjungan Hari Ini</Text>
          <Dashed />
        </View>
        <ScrollView>
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
        </ScrollView>
      </View>
    </View>
  );
}

export default DetailAbsenSM;
