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
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_10,
} from '../../styles/typography';
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
    </View>
  );
}

export default RiwayatAbsen;
