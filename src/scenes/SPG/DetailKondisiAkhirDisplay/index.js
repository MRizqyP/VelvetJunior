import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../../assets';
import styles from './styles';
import Button from '../../../components/Button';
import {
  FONT_BOLD_12,
  FONT_BOLD_18,
  FONT_REGULAR_14,
} from '../../../styles/typography';
import LineDashed from '../../../components/LineDashed';
function DetailKondisiAkhirDisplay({navigation}) {
  const [form, setForm] = useState({
    keterangan: '',
  });
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View style={styles.boxInfo}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text
                style={[
                  FONT_BOLD_18,
                  {color: 'black', marginLeft: 10, textAlign: 'center'},
                ]}>
                Kondisi Awal Display Rak
              </Text>
            </View>
            <LineDashed />
            <Image
              source={Images.dummy}
              style={{
                width: '100%',
                height: screenHeight / 4,
                borderRadius: 8,
                marginTop: 20,
              }}
            />
          </View>
          <View style={styles.headerBox}>
            <View
              style={{
                flexDirection: 'row',
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
                  Jam Masuk
                </Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  08:32 AM
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                Keterangan
              </Text>
              <Text>
                Sedang persiapan melakukan visiting ke toko kawasan Bandung
                Barat
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <View style={styles.boxInfo}>
            <View style={{flexDirection: 'row', marginBottom: 10}}>
              <Text
                style={[
                  FONT_BOLD_18,
                  {color: 'black', marginLeft: 10, textAlign: 'center'},
                ]}>
                Kondisi Akhir Display Rak
              </Text>
            </View>
            <LineDashed />
            <Image
              source={Images.dummy}
              style={{
                width: '100%',
                height: screenHeight / 4,
                borderRadius: 8,
                marginTop: 20,
              }}
            />
          </View>
          <View style={styles.headerBox}>
            <View
              style={{
                flexDirection: 'row',
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
                  Jam Masuk
                </Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  08:32 AM
                </Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                Keterangan
              </Text>
              <Text>
                Sedang persiapan melakukan visiting ke toko kawasan Bandung
                Barat
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailKondisiAkhirDisplay;
