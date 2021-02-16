import React, {useState} from 'react';
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
import Dashed from '../../components/LineDashed';
import Feather from 'react-native-vector-icons/Feather';
import {
  FONT_BOLD_10,
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_10,
  FONT_REGULAR_14,
} from '../../styles/typography';

const listTab = [
  {
    status: 'Sales Person',
  },
  {
    status: 'SPG',
  },
];

function ReportAbsensi({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;
  const [status, setStatus] = useState('Sales Person');
  const setStatusFilter = (status) => {
    setStatus(status);
  };
  return (
    <View style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      <View style={styles.listtab}>
        {listTab.map((e) => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text
              style={[
                FONT_REGULAR_14,
                {color: 'black'},
                status === e.status && [FONT_BOLD_14, {color: 'white'}],
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {status === 'Sales Person' ? (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail Absen SM')}>
            <View style={[styles.boxInfo, {marginTop: screenWidth / 12}]}>
              <View style={{padding: 16}}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                  <Image
                    source={Images.icon4}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                  />
                  <View style={{marginLeft: 10, flex: 1}}>
                    <Text style={[FONT_BOLD_16, {color: 'black'}]}>
                      Nerte Gronw
                    </Text>
                    <Text
                      style={[
                        FONT_REGULAR_14,
                        {color: '#F18F01', marginTop: 8},
                      ]}>
                      27 November 2020
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        // justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={[FONT_BOLD_12, {color: '#6BC60B'}]}>
                          Absen Masuk
                        </Text>
                        <Text style={FONT_REGULAR_14}>10:30 AM</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={[FONT_BOLD_12, {color: '#E02020'}]}>
                          Absen Keluar
                        </Text>
                        <Text style={FONT_REGULAR_14}>-</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={[styles.boxInfo, {marginTop: screenWidth / 12}]}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={Images.icon4}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[FONT_BOLD_16, {color: 'black'}]}>
                    Nerte Gronw
                  </Text>
                  <Text
                    style={[FONT_REGULAR_14, {color: '#F18F01', marginTop: 8}]}>
                    27 November 2020
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View style={{flex: 1}}>
                      <Text style={[FONT_BOLD_12, {color: '#6BC60B'}]}>
                        Absen Masuk
                      </Text>
                      <Text style={FONT_REGULAR_14}>10:30 AM</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <Text style={[FONT_BOLD_12, {color: '#E02020'}]}>
                        Absen Keluar
                      </Text>
                      <Text style={FONT_REGULAR_14}>-</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail Absen SM SPG')}>
          <View style={[styles.boxInfo, {marginTop: screenWidth / 12}]}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Image
                  source={Images.icon4}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[FONT_BOLD_16, {color: 'black'}]}>
                    Nerte Gronw
                  </Text>
                  <Text
                    style={[FONT_REGULAR_14, {color: '#F18F01', marginTop: 8}]}>
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
                      <Text style={FONT_REGULAR_14}>27 Nov 2020</Text>
                    </View>
                    <View>
                      <Text style={[FONT_BOLD_10, {color: '#6BC60B'}]}>
                        Kondisi Awal
                      </Text>
                      <Text style={FONT_REGULAR_14}>10:30 AM</Text>
                    </View>
                    <View>
                      <Text style={[FONT_BOLD_10, {color: '#E02020'}]}>
                        Kondisi Akhir
                      </Text>
                      <Text style={FONT_REGULAR_14}>-</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default ReportAbsensi;
