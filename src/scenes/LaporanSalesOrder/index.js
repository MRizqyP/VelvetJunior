import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/HeaderModal';
import CheckBox from '@react-native-community/checkbox';
import Images from '../../assets';
import styles from './styles';
function LaporanSalesOrder({navigation}) {
  const modalizeRef = useRef(null);
  const modalizeRef1 = useRef(null);
  const [form, setForm] = useState({
    namatoko: '',
    produk: '0',
    model: '',
    motif: '',
    detailproduk: '',
    size: '',
    jumlah: '',
    jumlahseluuruh: '',
  });
  const [selectedValue, setSelectedValue] = useState('0');
  const [selectedValue1, setSelectedValue1] = useState('0');
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const [detail, setDetail] = useState(false);
  const [show, setShow] = useState(true);
  const [back, setBack] = useState('');
  const nav = useNavigation();
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(form.produk);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    if (toggleCheckBox) {
      nav.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={onOpen}>
            <Feather
              name="trash-2"
              color={'red'}
              size={25}
              style={{paddingRight: 15}}
            />
          </TouchableOpacity>
        ),
      });
    } else {
      nav.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={onOpen}>
            <Feather
              name="plus"
              color={'#000'}
              size={25}
              style={{paddingRight: 15}}
            />
          </TouchableOpacity>
        ),
      });
    }

    setShow(false);
  }, [show]);
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        modalizeRef1.current?.open();
        setBack(e.data.action);
      }),
    [navigation, hasUnsavedChanges],
  );

  return (
    <ScrollView style={styles.container}>
      <Portal>
        <Modalize
          ref={modalizeRef1}
          snapPoint={300}
          HeaderComponent={<Header />}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={Images.img_keluar_dari_halaman}
              style={{width: 100, height: 120}}
            />
            <Text style={styles.title}>Keluar dari Halaman</Text>
            <Text style={{color: '#AAAAAA'}}>
              Perubahan yang dibuat akan menghilang
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => navigation.dispatch(back)}>
                <View style={styles.buttonBatal}>
                  <Text
                    style={{
                      color: '#F89E1D',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    Ya
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => modalizeRef1.current?.close()}>
                <View style={styles.buttonSimpan}>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    Tidak
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modalize>
      </Portal>
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={300}
          HeaderComponent={<Header />}>
          <View style={{margin: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
              Pilih Produk
            </Text>
            <View style={styles.line} />
            <View style={{marginTop: 10, padding: 16}}>
              <Text style={styles.title}>Nama Produk</Text>
              <View style={styles.action}>
                <Picker
                  selectedValue={selectedValue}
                  style={{flex: 1}}
                  onValueChange={(itemValue, itemIndex) => {
                    if (itemValue != '0') {
                      setSelectedValue(itemValue);
                      setForm({
                        ...form,
                        produk: itemValue,
                      });
                    }
                  }}>
                  <Picker.Item label="Pilih nama produk" value="0" />
                  <Picker.Item
                    label="Baju Casual Anak U-1 Tahun"
                    value="Baju Casual Anak U-1 Tahun"
                  />
                  <Picker.Item
                    label="Baju Casual Anak U-2 Tahun"
                    value="Baju Casual Anak U-2 Tahun"
                  />
                </Picker>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity>
                  <View style={styles.buttonBatal}>
                    <Text
                      style={{
                        color: '#F89E1D',
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      Batal
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => modalizeRef.current?.close()}>
                  <View style={styles.buttonSimpan}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 18,
                        textAlign: 'center',
                      }}>
                      Pilih
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modalize>
      </Portal>
      <View style={{margin: 16, flex: 1}}>
        <View style={styles.formBox}>
          <Text style={styles.title}>Nama Toko</Text>
          <View style={styles.action}>
            <TextInput
              placeholder={'Masukan nama toko Anda'}
              placeholderTextColor="#666666"
              style={styles.textInput}
              autoCapitalize="none"
              value={form.namatoko}
              onChangeText={(text) => setForm({namatoko: text})}
            />
          </View>
        </View>
        {form.produk != '0' ? (
          <View style={styles.formBoxProduk}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => {
                  setToggleCheckBox(newValue), setShow(true);
                }}
              />
              <Text style={[styles.title, {color: '#99C324', marginLeft: 20}]}>
                {form.produk}
              </Text>
              {!detail ? (
                <TouchableOpacity onPress={() => setDetail(true)}>
                  <Feather
                    name="chevron-down"
                    color={'orange'}
                    size={25}
                    style={{paddingLeft: 15}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setDetail(false)}>
                  <Feather
                    name="chevron-up"
                    color={'orange'}
                    size={25}
                    style={{paddingLeft: 15}}
                  />
                </TouchableOpacity>
              )}
            </View>
            {detail ? (
              <>
                <View style={styles.line} />
                <View style={styles.roundImage}>
                  <Feather name="camera" color={'orange'} size={25} />
                </View>
                <View style={{marginTop: 10, marginBottom: 20}}>
                  <View>
                    <Text style={styles.title}>Model</Text>
                    <View style={styles.action}>
                      <TextInput
                        placeholder={'Masukan model'}
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={form.model}
                        onChangeText={(text) => setForm({...form, model: text})}
                      />
                    </View>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={styles.title}>Motif</Text>
                    <View style={styles.action}>
                      <TextInput
                        placeholder={'Masukan motif'}
                        placeholderTextColor="#666666"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={form.motif}
                        onChangeText={(text) => setForm({...form, motif: text})}
                      />
                    </View>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text style={styles.title}>Detail Produk</Text>
                    <View style={styles.action}>
                      <TextInput
                        placeholder={'Masukan detail produk'}
                        placeholderTextColor="#666666"
                        multiline={true}
                        numberOfLines={3}
                        style={styles.textInputArea}
                        autoCapitalize="none"
                        value={form.detailproduk}
                        onChangeText={(text) =>
                          setForm({...form, detailproduk: text})
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.formProduk}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.title}>Jumlah Produk</Text>
                    <Feather
                      name="plus-circle"
                      color={'orange'}
                      size={20}
                      style={{marginLeft: 10}}
                    />
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 10}}>
                    <View style={{flex: 1, paddingRight: 12}}>
                      <Text>Size</Text>
                      <View style={styles.action}>
                        <Picker
                          selectedValue={selectedValue1}
                          style={{flex: 1, fontSize: 12}}
                          onValueChange={(itemValue, itemIndex) => {
                            if (itemValue != '0') {
                              setSelectedValue1(itemValue);
                              setForm({
                                ...form,
                                jumlah: itemValue,
                              });
                            }
                          }}>
                          <Picker.Item label="Pilih size" value="0" />
                          <Picker.Item label="S" value="S" />
                          <Picker.Item label="M" value="M" />
                        </Picker>
                      </View>
                    </View>
                    <View style={{flex: 1.8}}>
                      <Text>Jumlah</Text>
                      <View style={styles.action}>
                        <TextInput
                          placeholder={'Masukan jumlah produk'}
                          placeholderTextColor="#666666"
                          keyboardType="numeric"
                          style={styles.textInputArea}
                          autoCapitalize="none"
                          value={form.jumlah}
                          onChangeText={(text) =>
                            setForm({...form, jumlah: text})
                          }
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Feather
                        name="trash-2"
                        color={'red'}
                        size={25}
                        style={{paddingLeft: 15}}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      backgroundColor: '#EBFFB3',
                      flex: 1,
                      padding: 12,
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#99C324'}}>
                      Jumlah Seluruh Produk
                    </Text>
                    <Text style={{color: '#99C324'}}>0 </Text>
                  </View>
                </View>
              </>
            ) : null}
          </View>
        ) : null}
      </View>
      <View
        style={{
          bottom: 0,
          marginBottom: 35,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.buttonBatal}>
            <Text
              style={{
                color: '#F89E1D',
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
              }}>
              Batal
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Berhasil')}>
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
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default LaporanSalesOrder;
