import React, {useState, useEffect, useRef} from 'react';
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
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/HeaderModal';
import Images from '../../assets';
import styles from './styles';
function GantiAlamat({navigation}) {
  const [value, setValue] = useState({value: ''});
  const [form, setForm] = useState({
    keterangan: '',
  });
  const modalizeRef = useRef(null);
  const nav = useNavigation();
  const [show, setShow] = useState(true);
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => modalizeRef.current?.open()}>
          <Feather
            name="plus"
            color={'white'}
            size={25}
            style={{paddingRight: 15}}
          />
        </TouchableOpacity>
      ),
    });

    setShow(false);
  }, [show]);
  const PROP = [
    {
      key: 1,
      nama: 'Kantor Nerby Baby Shop',
      alamat: 'Jl. Abdurahman Saleh No.2a Bandung',
    },
    {
      key: 2,
      nama: 'Toko Nerby Baby Shop Cabang Pajajaran',
      alamat: 'Jl. Pajajaran No.13 Bandung',
    },
    {
      key: 3,
      nama: 'Toko Nerby Baby Shop Cabang Setiabudi',
      alamat: 'Jl. Setiabudi No.154 Bandung',
    },
    {
      key: 4,
      nama: 'Toko Nerby Baby Shop Cabang Buah Batu',
      alamat: 'Jl. Buah batu No.24a Bandung',
    },
  ];
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 1.8;
  return (
    <View style={styles.container}>
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={400}
          modalHeight={400}
          HeaderComponent={<Header />}
          FooterComponent={() => {
            return (
              <View style={styles.footerBottomSheet}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => modalizeRef2.current?.close()}>
                    <View style={styles.buttonBatal}>
                      <Text style={styles.textBatal1}>Batal</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      modalizeRef2.current?.close();
                      modalizeRef3.current?.open();
                    }}>
                    <View style={styles.buttonSimpan1}>
                      <Text style={styles.textSimpan}>Tambahkan</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}>
          <View style={{flex: 1, margin: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
              Tambah Alamat
            </Text>
            <View style={styles.linelurus} />
            <View style={{marginTop: 20}}>
              <Text style={styles.textTitle}>Nama Tempat</Text>
              <TextInput
                placeholderTextColor="#666666"
                placeholder={'Masukan nama tempat yang dituju'}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(text) => setForm({keterangan: text})}
              />
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.textTitle}>Alamat Lengkap</Text>
              <TextInput
                placeholderTextColor="#666666"
                placeholder={'Masukan alamat toko/kantor'}
                multiline
                numberOfLines={4}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(text) => setForm({keterangan: text})}
              />
            </View>
          </View>
        </Modalize>
      </Portal>

      {PROP.map((res) => {
        return (
          <View style={styles.boxInfo} key={res.key}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.containerRadio}>
                <TouchableOpacity
                  style={styles.radioCircle}
                  onPress={() => {
                    setValue({
                      value: res.key,
                    });
                  }}>
                  {value.value === res.key && (
                    <View style={styles.selectedRb} />
                  )}
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.textTitle}>{res.nama}</Text>
                <Text style={[styles.textsubTitle, {color: '#F18F01'}]}>
                  {res.alamat}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default GantiAlamat;
