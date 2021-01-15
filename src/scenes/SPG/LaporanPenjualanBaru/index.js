import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/HeaderModal';
import CheckBox from '@react-native-community/checkbox';
import NumberFormat from 'react-number-format';
import Dashed from '../../../components/LineDashed';
import RadioButton from '../../../components/RadioButton';
import Images from '../../../assets';
import styles from './styles';
// import {Toko} from './components/modals/Toko';
import {Toko} from './components/modals/Toko';
import {Npwp} from './components/modals/Npwp';
import {Produk} from './components/modals/Produk';
import {Exit} from './components/modals/Exit';
function LaporanPenjualanBaru({navigation, route}) {
  const modals = Array.from({length: 3}).map((_) => useRef(null).current);

  const {kategori} = route.params;
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [value, setValue] = useState('');

  const PROP = [
    {
      key: 'tunai',
      text: 'Tunai',
    },
    {
      key: '<30hari',
      text: '<30 Hari',
    },
  ];
  const varian = [
    {
      key: 1,
      text: '0623',
      checked: false,
    },
    {
      key: 2,
      text: '0624',
      checked: false,
    },
    {
      key: 3,
      text: '0625',
      checked: false,
    },
    {
      key: 4,
      text: '0626',
      checked: false,
    },
  ];
  const [form, setForm] = useState({
    namatoko: '',
    produk: '0',
    npwp: '',
    alamat: '',
    namaproduk: '',
    sku: '',
    harga: '',
  });

  function handleChange(newValue) {
    setValue(newValue);
  }

  function handleToko(value, detailtoko) {
    setForm({
      ...form,
      namatoko: value.namatoko,
      alamat: value.alamat,
    });
    setDetailToko(detailtoko);
  }
  function handleProduk(value, pesanan) {
    setForm({
      ...form,
      namaproduk: value.namaproduk,
      sku: value.sku,
      harga: value.harga,
    });
    setPesanan(pesanan);
  }

  function handleNpwp(value) {
    setForm({
      ...form,
      npwp: value.npwp,
    });
  }

  const onOpenProduk = () => {
    modals[2].open();
  };
  const onOpenToko = () => {
    modals[0].open();
  };
  const onOpenNpwp = () => {
    modals[1].open();
  };

  const [selectedValue1, setSelectedValue1] = useState('0');
  const [pesanan, setPesanan] = useState(false);
  const [detail, setDetail] = useState(false);
  const [detail1, setDetail1] = useState(false);
  const [detailToko, setDetailToko] = useState(false);
  const [show, setShow] = useState(true);
  const [back, setBack] = useState('');
  const nav = useNavigation();
  const hasUnsavedChanges = Boolean(form.namatoko);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [fields, setFields] = useState([
    {
      size: '',
      jumlah: '',
      harga: '',
      total: '',
    },
  ]);

  let total = fields.reduce(function (prev, current) {
    return prev + +current.jumlah;
  }, 0);
  let totalHarga = fields.reduce(function (prev, current) {
    return prev + +current.harga;
  }, 0);

  var totalHargaD = fields.reduce(function (prev, cur) {
    return prev + cur.jumlah * cur.harga;
  }, 0);
  console.log(fields);
  console.log(totalHargaD);

  function handleChangeInput(i, value, name) {
    const values = [...fields];
    values[i][name] = value;
    setFields(values);
  }

  function handleaddInput() {
    const values = [...fields];
    values.push({
      size: '',
      jumlah: '',
      harga: '',
    });
    setFields(values);
  }

  function handleRemoveInput(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  const [selectedValue, setSelectedValue] = useState(varian);
  const checkingBox = (itemId) => {
    const data = varian;
    const index = data.findIndex((x) => x.key === itemId);
    data[index].checked = !data[index].checked;
    setSelectedValue(data);
    setShow(true);
  };
  function getSelectedFruits() {
    var keys = selectedValue.map((t) => t.text);
    var checks = selectedValue.map((t) => t.checked);
    let Selected = [];
    for (let i = 0; i < checks.length; i++) {
      if (checks[i] == true) {
        Selected.push(keys[i]);
      }
    }
  }

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 8,
        }}>
        <CheckBox
          disabled={false}
          value={item.checked}
          tintColors={{true: 'orange', false: '#AAAAAA'}}
          onCheckColor={'orange'}
          onValueChange={(value) => checkingBox(item.key)}
        />
        <Text style={{textAlign: 'center'}}>{item.text}</Text>
      </View>
    );
  };

  useEffect(() => {
    // getSelectedFruits();
    if (toggleCheckBox) {
      nav.setOptions({
        headerRight: () => (
          <TouchableOpacity>
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
          <TouchableOpacity onPress={onOpenProduk}>
            <Feather
              name="plus"
              color={'white'}
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
          return;
        }

        e.preventDefault();

        modals[3].open();
        setBack(e.data.action);
      }),
    [navigation, hasUnsavedChanges],
  );
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Portal>
          <Produk ref={(el) => (modals[2] = el)} handleProduk={handleProduk} />
          <Exit
            ref={(el) => (modals[3] = el)}
            navigation={navigation}
            back={back}
          />
        </Portal>

        <View style={{flex: 1}}>
          <View style={[styles.formBox]}>
            {!pesanan ? (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#E0F5F4',
                    padding: 12,
                    marginTop: 10,
                    marginBottom: 20,
                    borderRadius: 6,
                  }}>
                  <Text style={{color: '#44B4AD'}}>Kategori Produk</Text>
                  <Text style={{color: '#44B4AD', fontWeight: 'bold'}}>
                    {kategori}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={Images.img_laporan}
                    style={{width: '70%', height: 200}}
                  />
                  <Text style={{color: '#AAAAAA', fontSize: 14, marginTop: 10}}>
                    Belum ada list produk yang Anda tambahkan
                  </Text>
                </View>
              </View>
            ) : (
              <View
                style={[
                  styles.formBoxProduk,
                  {marginBottom: 15, elevation: 5, backgroundColor: 'white'},
                ]}>
                <View style={{alignItems: 'center', flexDirection: 'row'}}>
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    tintColors={{true: 'orange', false: '#AAAAAA'}}
                    onValueChange={(newValue) => {
                      setToggleCheckBox(newValue), setShow(true);
                    }}
                  />
                  <Text
                    style={[styles.title, {color: '#51C9C2', marginLeft: 5}]}>
                    {form.namaproduk}
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
                    <Text style={[styles.title, {paddingTop: 10}]}>
                      {form.sku}
                    </Text>
                    <View style={{marginTop: 15}}>
                      <Text style={[styles.title, {fontSize: 14}]}>Varian</Text>
                      <View>
                        <FlatList
                          data={selectedValue}
                          renderItem={renderItem}
                          numColumns={5}
                          keyExtractor={(item, index) => index}
                        />
                      </View>
                    </View>
                    <View style={{padding: 5, marginTop: 10}}>
                      <View style={styles.formProduk}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.title}>Jumlah Produk</Text>
                          <TouchableOpacity onPress={handleaddInput}>
                            <Feather
                              name="plus-circle"
                              color={'orange'}
                              size={20}
                              style={{marginLeft: 10}}
                            />
                          </TouchableOpacity>
                        </View>
                        {fields.map((field, idx) => {
                          return (
                            <View
                              style={{flexDirection: 'row', marginTop: 10}}
                              key={`${field}-${idx}`}>
                              <View style={{flex: 1.5, paddingRight: 12}}>
                                <Text>Size</Text>
                                <View style={styles.action}>
                                  <Picker
                                    selectedValue={field.size}
                                    style={{
                                      flex: 1,
                                      fontSize: 10,
                                      transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                                    }}
                                    onValueChange={(itemValue, itemIndex) => {
                                      if (itemValue != '0') {
                                        setSelectedValue1(itemValue);
                                        handleChangeInput(
                                          idx,
                                          itemValue,
                                          'size',
                                        );
                                      }
                                    }}>
                                    <Picker.Item label="-" value="0" />
                                    <Picker.Item label="S" value="S" />
                                    <Picker.Item label="M" value="M" />
                                  </Picker>
                                </View>
                              </View>
                              <View style={{flex: 1.2}}>
                                <Text>Jumlah</Text>
                                <View style={styles.action}>
                                  <NumberFormat
                                    value={field.jumlah}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    decimalSeparator="."
                                    // prefix={'Rp.'}
                                    suffix={' Pcs'}
                                    onValueChange={(values) => {
                                      const {value} = values;
                                      handleChangeInput(idx, value, 'jumlah');
                                    }}
                                    renderText={(value) => (
                                      <TextInput
                                        placeholder={'0 Pcs'}
                                        placeholderTextColor="#666666"
                                        keyboardType="numeric"
                                        style={[styles.textInputArea]}
                                        autoCapitalize="none"
                                        value={value}
                                        onChangeText={(text) =>
                                          handleChangeInput(idx, text, 'jumlah')
                                        }
                                      />
                                    )}
                                  />
                                </View>
                              </View>
                              <View style={{flex: 1.5, paddingLeft: 10}}>
                                <Text>Harga</Text>
                                <View style={styles.action}>
                                  <NumberFormat
                                    value={field.harga}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    decimalSeparator="."
                                    prefix={'Rp.'}
                                    onValueChange={(values) => {
                                      const {value} = values;
                                      handleChangeInput(idx, value, 'harga');
                                    }}
                                    renderText={(value) => (
                                      <TextInput
                                        placeholder={'Rp .0'}
                                        placeholderTextColor="#666666"
                                        keyboardType="numeric"
                                        style={styles.textInputArea}
                                        autoCapitalize="none"
                                        value={value}
                                        onChangeText={(text) =>
                                          handleChangeInput(idx, text, 'harga')
                                        }
                                      />
                                    )}
                                  />
                                </View>
                              </View>
                              <View
                                style={{
                                  flex: 0.5,
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                  onPress={() => handleRemoveInput(idx)}>
                                  <Feather
                                    name="trash-2"
                                    color={'red'}
                                    size={25}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                          );
                        })}
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          backgroundColor: '#FFECD2',
                          marginTop: 10,
                          padding: 12,
                          marginBottom: 10,
                        }}>
                        <Text style={{color: '#D67A02'}}>
                          Jumlah Seluruh Produk
                        </Text>
                        <Text style={{color: '#D67A02'}}>{total}</Text>
                      </View>
                    </View>
                  </>
                ) : null}
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View
          style={{
            borderRadius: 8,
            backgroundColor: '#FFECD2',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTotal}>Total Produk</Text>
            {detail ? (
              <NumberFormat
                suffix={' Pcs'}
                displayType={'text'}
                decimalScale={2}
                value={total}
                renderText={(value) => (
                  <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>
                    {value}
                  </Text>
                )}
              />
            ) : (
              <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>
                0 Pcs
              </Text>
            )}
          </View>

          <View style={styles.line} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTotal}>Total Harga</Text>
            {detail ? (
              <View style={{flexDirection: 'row'}}>
                <NumberFormat
                  value={totalHargaD}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'Rp.'}
                  renderText={(value) => (
                    <Text
                      style={[
                        styles.textTotal,
                        {marginLeft: 10, fontWeight: 'bold'},
                      ]}>
                      {value}
                    </Text>
                  )}
                />
              </View>
            ) : (
              <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>
                Rp. 0
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={styles.buttonBatal}>
            <Text style={styles.textBatal}>Batal</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Berhasil')}>
            <View style={styles.buttonSimpan}>
              <Text style={styles.textSimpan}>Kirim</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default LaporanPenjualanBaru;
