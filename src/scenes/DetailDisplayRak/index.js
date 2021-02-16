import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/HeaderModal';
import NumberFormat from 'react-number-format';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '../../components/Button';
import Images from '../../assets';
import styles from './styles';
import {
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_18,
  FONT_REGULAR_14,
} from '../../styles/typography';
import LineDashed from '../../components/LineDashed';

function DetailDisplayRak({navigation, route}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Riwayat Display Rak')}
          style={{flex: 1, marginTop: 10}}>
          <Image
            source={Images.ic_history}
            style={{
              width: 25,
              height: 25,
              marginRight: 20,
              // paddingRight: 15,
              // flex: 1,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={[styles.formBox, {marginBottom: 10}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                      <Text
                        style={{
                          fontWeight: 'bold',

                          fontSize: 14,
                        }}>
                        Nerte Gronw
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Text
                          style={[
                            FONT_REGULAR_14,
                            {
                              backgroundColor: '#FA6400',
                              padding: 7,
                              borderRadius: 20,
                              textAlign: 'center',
                              color: '#FFFFFF',
                              marginRight: 10,
                            },
                          ]}>
                          SPG
                        </Text>
                        <View
                          style={{
                            borderRightWidth: 1,
                            borderColor: '#DEDEDE',
                            marginTop: 2,
                            marginBottom: 2,
                            marginRight: 10,
                          }}
                        />
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={Images.ic_toko}
                            style={{width: 25, height: 25, marginRight: 8}}
                          />
                          <Text
                            style={[
                              FONT_BOLD_14,
                              {
                                color: '#F18F01',
                                textAlign: 'center',
                              },
                            ]}>
                            Nerby Baby Shop
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.formBox, {marginTop: 10}]}>
            <Text style={[FONT_BOLD_18, {color: '#6DD400', marginBottom: 8}]}>
              Kondisi Awal Display Rak
            </Text>
            <LineDashed />
            <View style={[styles.boxInfo, {marginTop: 20}]}>
              <Image
                source={Images.dummy}
                style={{
                  width: '100%',
                  height: screenHeight / 4,
                  borderRadius: 8,
                }}
              />
            </View>
            <View style={styles.headerBox}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  padding: 10,
                }}>
                <View style={{flex: 1.5}}>
                  <Text
                    style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                    Tanggal
                  </Text>
                  <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                    27 November 2020
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                    Waktu Pengecekan
                  </Text>
                  <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                    08:32 AM
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 5, padding: 10}}>
                <Text
                  style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                  Keterangan
                </Text>
                <Text>
                  Display baju terlihat kusam dan berdebu, perlu diganti dengan
                  display baru.
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.formBox, {marginTop: 10}]}>
            <Text style={[FONT_BOLD_18, {color: '#E02020', marginBottom: 8}]}>
              Kondisi Akhir Display Rak
            </Text>
            <LineDashed />
            <View style={[styles.boxInfo, {marginTop: 20}]}>
              <Image
                source={Images.dummy}
                style={{
                  width: '100%',
                  height: screenHeight / 4,
                  borderRadius: 8,
                }}
              />
            </View>
            <View style={styles.headerBox}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 30,
                  padding: 10,
                }}>
                <View style={{flex: 1.5}}>
                  <Text
                    style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                    Tanggal
                  </Text>
                  <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                    27 November 2020
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                    Waktu Pengecekan
                  </Text>
                  <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                    08:32 AM
                  </Text>
                </View>
              </View>
              <View style={{marginTop: 5, padding: 10}}>
                <Text
                  style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                  Keterangan
                </Text>
                <Text>
                  Display baju terlihat kusam dan berdebu, perlu diganti dengan
                  display baru.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailDisplayRak;
