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
import Images from '../../assets';
import styles from './styles';
import Button from '../../components/Button';
import {
  FONT_BOLD_10,
  FONT_BOLD_12,
  FONT_REGULAR_12,
  FONT_REGULAR_14,
} from '../../styles/typography';
function DetailAbsen2({navigation}) {
  const [form, setForm] = useState({
    keterangan: '',
  });
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.boxInfo}>
          <Image
            source={Images.dummy}
            style={{width: '100%', height: screenHeight / 4, borderRadius: 8}}
          />
        </View>
        <View style={styles.headerBox}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1.5}}>
              <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                Nama
              </Text>
              <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                Praskovya Dubinina
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                Jabatan
              </Text>

              <Text
                style={[
                  FONT_REGULAR_14,
                  {
                    backgroundColor: '#FA6400',
                    padding: 5,
                    borderRadius: 20,
                    textAlign: 'center',
                    color: '#FFFFFF',
                  },
                ]}>
                Sales Person
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
            }}>
            <View style={{flex: 1.5}}>
              <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                Tanggal
              </Text>
              <Text style={FONT_REGULAR_14}>27 November 2020</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
                Jam Masuk
              </Text>
              <Text style={FONT_REGULAR_14}>08:32 AM</Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={[FONT_BOLD_12, {color: '#AAAAAA', marginBottom: 8}]}>
              Keterangan
            </Text>
            <Text>
              Sedang persiapan melakukan visiting ke toko kawasan Bandung Barat
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailAbsen2;
