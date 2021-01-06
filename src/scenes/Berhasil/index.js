import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Images from '../../assets';
import styles from './styles';

export default function Berhasil({navigation, route}) {
  return (
    <View style={styles.container}>
      <Image
        source={Images.img_berhasil}
        style={{width: '100%', height: '50%'}}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Berhasil</Text>
      <Text style={{color: '#AAAAAA', textAlign: 'center'}}>
        Purchase Order <Text style={{color: 'orange'}}>PO1000027736288439</Text>{' '}
        telah dikonfirmasi oleh customer
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('PO')}>
        <View style={styles.buttonSimpan}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
            }}>
            Kembali
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
