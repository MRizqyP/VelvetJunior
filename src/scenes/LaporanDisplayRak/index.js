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
import Dashed from '../../components/LineDashed';
import Feather from 'react-native-vector-icons/Feather';
import {
  FONT_BOLD_10,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_10,
  FONT_REGULAR_14,
} from '../../styles/typography';
function LaporanDisplayRak({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;
  return (
    <View style={styles.container}>
      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />
      <View style={[styles.boxInfo, {marginTop: screenWidth / 5}]}>
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
              <Text style={[FONT_BOLD_16, {color: 'black'}]}>Nerte Gronw</Text>
              <Text style={[FONT_REGULAR_14, {color: '#F18F01', marginTop: 8}]}>
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
      <TouchableOpacity onPress={() => navigation.navigate('DetailDisplayRak')}>
        <View style={styles.boxInfo}>
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
      <View style={styles.boxInfo}>
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
              <Text style={[FONT_BOLD_16, {color: 'black'}]}>Nerte Gronw</Text>
              <Text style={[FONT_REGULAR_14, {color: '#F18F01', marginTop: 8}]}>
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

      <View style={styles.boxInfo}>
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
              <Text style={[FONT_BOLD_16, {color: 'black'}]}>Nerte Gronw</Text>
              <Text style={[FONT_REGULAR_14, {color: '#F18F01', marginTop: 8}]}>
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
    </View>
  );
}

export default LaporanDisplayRak;
