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
function AbsenKeluar({navigation}) {
  const [form, setForm] = useState({
    keterangan: '',
  });
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 1.8;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.boxInfo}>
          <Image source={Images.camera} style={{width: 60, height: 48}} />
          <Text style={{fontSize: 12, color: '#AAAAAA', marginTop: 10}}>
            Tekan disini untuk mengambil gambar
          </Text>
        </View>
        <View style={styles.headerBox}>
          <Text style={styles.textTitle}>Keterangan</Text>

          <View style={styles.action}>
            <TextInput
              placeholder={'Masukan Keterangan Anda'}
              placeholderTextColor="#666666"
              multiline
              numberOfLines={4}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => setForm({keterangan: text})}
            />
          </View>
        </View>
      </ScrollView>
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Button text={'Kirim'} />
      </View>
    </View>
  );
}

export default AbsenKeluar;
