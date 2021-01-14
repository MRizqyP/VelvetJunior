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
import {
  FONT_BOLD_10,
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_10,
  FONT_REGULAR_12,
  FONT_REGULAR_14,
} from '../../styles/typography';
function DetailAbsensiSMSSPG({navigation}) {
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
              <Text style={[FONT_REGULAR_12, {color: '#AAAAAA', marginTop: 5}]}>
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
            {/* <Feather
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
            </Text> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Absen Keluar')}>
              <Image
                source={Images.img_absen_keluar}
                style={{width: 100, height: 110}}
              />
            </TouchableOpacity>
            <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
              Absen Keluar
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 18}}>
        <Text style={FONT_BOLD_16}>Riwayat Absen</Text>
        <Dashed />
      </View>
      <ScrollView>
        <View style={[styles.boxInfo, {marginTop: 20}]}>
          <View style={{margin: 18}}>
            <Text style={FONT_BOLD_16}>Jum, 27 November 2020</Text>
            <Dashed />
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-up-circle"
                  color="green"
                  size={20}
                  style={styles.backgroundArrowGreen}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#6BC60B'}]}>
                    Absen Masuk
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    08:27 AM
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#DB5943'}]}>
                    Absen Keluar
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    05:27 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.boxInfo]}>
          <View style={{margin: 18}}>
            <Text style={FONT_BOLD_16}>Kam, 26 November 2020</Text>
            <Dashed />
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-up-circle"
                  color="green"
                  size={20}
                  style={styles.backgroundArrowGreen}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#6BC60B'}]}>
                    Absen Masuk
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    08:27 AM
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#DB5943'}]}>
                    Absen Keluar
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    05:27 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.boxInfo]}>
          <View style={{margin: 18}}>
            <Text style={FONT_BOLD_16}>Rab, 27 November 2020</Text>
            <Dashed />
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-up-circle"
                  color="green"
                  size={20}
                  style={styles.backgroundArrowGreen}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#6BC60B'}]}>
                    Absen Masuk
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    08:27 AM
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#DB5943'}]}>
                    Absen Keluar
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    05:27 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.boxInfo]}>
          <View style={{margin: 18}}>
            <Text style={FONT_BOLD_16}>Sel, 27 November 2020</Text>
            <Dashed />
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-up-circle"
                  color="green"
                  size={20}
                  style={styles.backgroundArrowGreen}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#6BC60B'}]}>
                    Absen Masuk
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    08:27 AM
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#DB5943'}]}>
                    Absen Keluar
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    05:27 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.boxInfo]}>
          <View style={{margin: 18}}>
            <Text style={FONT_BOLD_16}>Sen, 23 November 2020</Text>
            <Dashed />
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-up-circle"
                  color="green"
                  size={20}
                  style={styles.backgroundArrowGreen}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#6BC60B'}]}>
                    Absen Masuk
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    08:27 AM
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Feather
                  name="arrow-down-circle"
                  color="red"
                  size={20}
                  style={styles.backgroundArrowRed}
                />
                <View style={{marginLeft: 10}}>
                  <Text style={[FONT_BOLD_14, {color: '#DB5943'}]}>
                    Absen Keluar
                  </Text>
                  <Text
                    style={[FONT_REGULAR_10, {color: '#F18F01', marginTop: 5}]}>
                    05:27 PM
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Image
          source={Images.img_visiting_toko}
          style={{width: screenWidth / 2, height: screenHeight / 4}}
        />
        <Text style={[FONT_REGULAR_14, {color: '#AAAAAA'}]}>
          Anda belum melakukan kunjungan hari ini
        </Text>
      </View> */}
    </View>
  );
}

export default DetailAbsensiSMSSPG;
