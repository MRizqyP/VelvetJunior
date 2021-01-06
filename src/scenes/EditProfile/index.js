import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Images from '../../assets';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

function EditProfile({navigation}) {
  const [form, useForm] = useState({
    namalengkap: 'Rizqy',
    nik: '123456789',
    email: 'rizqy.pratama@bts.id',
    notelp: '082218456868',
    jeniskelamin: 'Perempuan',
  });
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 3;
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={Images.backgroundprofile}
        style={{
          width: screenWidth,
          height: screenHeight,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 98,
            height: 98,
            borderRadius: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 3,
            position: 'absolute',
          }}>
          <Image
            source={Images.icon4}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
          />
          <View
            style={{
              position: 'absolute',
              left: 70,
              bottom: 0,
              backgroundColor: 'orange',
              borderRadius: 50,
              width: 25,
              height: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name="camera" color="white" size={15} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.boxInfo}>
        <View>
          <Text style={styles.textTitle}>Nama Lengkap</Text>
          <View style={styles.action}>
            <TextInput
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.namalengkap}
              onChangeText={(text) => setForm({namalengkap: text})}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>NIK</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Email Anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              value={form.nik}
              onChangeText={(text) => setForm({nik: text})}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Email Anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.email}
              onChangeText={(text) => setForm({email: text})}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>No. Telepon</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Email Anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.notelp}
              onChangeText={(text) => setForm({notelp: text})}
            />
          </View>
        </View>
        <View>
          <Text style={styles.textTitle}>Jenis Kelamin</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan Email Anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.jeniskelamin}
              onChangeText={(text) => setForm({jeniskelamin: text})}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 28}}>
          <View style={styles.buttonBatal}>
            <Text
              style={{
                color: '#51C9C2',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Batal
            </Text>
          </View>
          <View style={styles.buttonSimpan}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Simpan
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default EditProfile;
