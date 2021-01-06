import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../assets';
import styles from './styles';
function GantiSandi() {
  const [form, setForm] = useState({
    password: '',
    secureTextEntry: true,
  });
  const updateSecureTextEntry = () => {
    setForm({
      ...form,
      secureTextEntry: !form.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxInfo}>
        <View>
          <Text>Kata Sandi Lama</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan kata sandi anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              secureTextEntry={form.secureTextEntry ? false : true}
              autoCapitalize="none"
              onChangeText={(text) => setForm({email: text})}
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              {form.secureTextEntry ? (
                <Feather name="eye-off" color="orange" size={20} />
              ) : (
                <Feather name="eye" color="orange" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Kata Sandi Baru</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan kata sandi anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              secureTextEntry={form.secureTextEntry ? false : true}
              autoCapitalize="none"
              onChangeText={(text) => setForm({email: text})}
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              {form.secureTextEntry ? (
                <Feather name="eye-off" color="orange" size={20} />
              ) : (
                <Feather name="eye" color="orange" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>Konfirmasi Kata Sandi</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Masukan kata sandi anda"
              placeholderTextColor="#666666"
              style={styles.textInput}
              secureTextEntry={form.secureTextEntry ? false : true}
              autoCapitalize="none"
              onChangeText={(text) => setForm({email: text})}
            />

            <TouchableOpacity onPress={updateSecureTextEntry}>
              {form.secureTextEntry ? (
                <Feather name="eye-off" color="orange" size={20} />
              ) : (
                <Feather name="eye" color="orange" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 220}}>
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
    </View>
  );
}

export default GantiSandi;
