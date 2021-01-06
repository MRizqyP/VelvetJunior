import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../assets';
import styles from './styles';
function Laporan({navigation}) {
  return (
    <View style={[styles.scene, {backgroundColor: '#DEDEDE'}]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Laporan Sales Order')}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 60,
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: 60,
          backgroundColor: 'orange',
          borderRadius: 100,
        }}>
        <Feather name="plus" size={40} color="white" />
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.title}>Toko Indah Busana</Text>
        <Text style={styles.sub}>No SO: 100002299388231</Text>
        <View style={{flexDirection: 'row', marginTop: 17}}>
          <View>
            <Text style={styles.subT}>Tanggal</Text>
            <Text style={styles.subTT}>13 Dec 2020</Text>
          </View>
          <View style={{marginLeft: 45}}>
            <Text style={styles.subT}>Jumlah</Text>
            <Text style={styles.subTT}>32 Pcs</Text>
          </View>
          <View style={{marginLeft: 45}}>
            <Text style={styles.subT}>Status</Text>
            <View style={styles.reviewbox}>
              <Text style={styles.textStatus}>Review</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Toko Makmur Jaya Apparel</Text>
        <Text style={styles.sub}>No SO: 100002299388873</Text>
        <View style={{flexDirection: 'row', marginTop: 17}}>
          <View>
            <Text style={styles.subT}>Tanggal</Text>
            <Text style={styles.subTT}>12 Dec 2020</Text>
          </View>
          <View style={{marginLeft: 45}}>
            <Text style={styles.subT}>Jumlah</Text>
            <Text style={styles.subTT}>87 Pcs</Text>
          </View>
          <View style={{marginLeft: 45}}>
            <Text style={styles.subT}>Status</Text>
            <View style={styles.suspendbox}>
              <Text style={styles.textStatus}>Suspend</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Laporan;
