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
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_10,
  FONT_REGULAR_14,
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailRiwayatAbsensiSM', {nama: 'Nerte Gronw'})
        }>
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
      </TouchableOpacity>
    </View>
  );
}

export default RiwayatAbsen;
