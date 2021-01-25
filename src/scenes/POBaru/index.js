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
import Header from '../../components/HeaderModal';
import CheckBox from '@react-native-community/checkbox';
import NumberFormat from 'react-number-format';
import Dashed from '../../components/LineDashed';
import RadioButton from '../../components/RadioButton';
import Images from '../../assets';
import styles from './styles';
import {Toko} from './components/modals/Toko';
import {Npwp} from './components/modals/Npwp';
import {Produk} from './components/modals/Produk';
import {Exit} from './components/modals/Exit';
import ImagePicker from 'react-native-image-crop-picker';
function POBaru({navigation, route}) {
  const modals = Array.from({length: 3}).map((_) => useRef(null).current);

  const {kategori} = route.params;

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
    fotonpwp: '',
    fotonik: '',
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
    },
  ]);

  let total = fields.reduce(function (prev, current) {
    return prev + +current.jumlah;
  }, 0);
  let totalHarga = fields.reduce(function (prev, current) {
    return prev + +current.harga;
  }, 0);
  let totalHargaDisc = totalHarga * 0.1 + totalHarga;

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
  const takePhotoFromCameraNik = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(async (image) => {
      console.log(image);
      setForm({...form, fotonik: image.path});
    });
  };

  const takePhotoFromCameraNpwp = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(async (image) => {
      console.log(image);
      setForm({...form, fotonpwp: image.path});
    });
  };

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
    <View style={{flex: 1}}>
      <ScrollView>
        <Portal>
          <Toko ref={(el) => (modals[0] = el)} handleToko={handleToko} />
          <Npwp ref={(el) => (modals[1] = el)} handleNpwp={handleNpwp} />
          <Produk ref={(el) => (modals[2] = el)} handleProduk={handleProduk} />
          <Exit
            ref={(el) => (modals[3] = el)}
            navigation={navigation}
            back={back}
          />
        </Portal>

        <View style={{flex: 1}}>
          <View style={styles.formBox}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.title}>Toko</Text>
              {!detailToko ? (
                <TouchableOpacity onPress={onOpenToko}>
                  <View style={styles.containerButtonOrange}>
                    <Text style={styles.textButtonOrange}>Tambah</Text>
                    <Feather
                      name="plus-circle"
                      color={'orange'}
                      size={13}
                      style={{paddingLeft: 2}}
                    />
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>
            {!detailToko ? (
              <View style={{padding: 15}}>
                <Text
                  style={{color: '#AAAAAA', fontSize: 12, textAlign: 'center'}}>
                  Tekan tombol “Tambah” untuk menambahkan toko
                </Text>
              </View>
            ) : (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginBottom: 15,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={Images.ic_toko}
                      style={{width: 25, height: 25}}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 10,
                        fontSize: 14,
                      }}>
                      {form.namatoko}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setDetailToko(false),
                        setForm({...form, namatoko: '', alamat: ''});
                    }}>
                    <Feather
                      name="x-circle"
                      color={'red'}
                      size={25}
                      style={{marginRight: 10}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.formProduk}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{fontSize: 14, fontWeight: 'bold', marginLeft: 2}}>
                      Alamat Pengiriman
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Ganti Alamat')}>
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 2,
                          color: '#51C9C2',
                        }}>
                        Ganti Alamat
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{marginTop: 15}}>
                    <Text style={styles.textInfoCus}>
                      Kantor {form.namatoko}
                    </Text>
                    <Text style={styles.textInfoCusSub}>{form.alamat}</Text>
                  </View>
                </View>
                <View style={[styles.formBoxProduk, {marginTop: 20}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[styles.title, {color: '#51C9C2'}]}>
                      Informasi Pelanggan
                    </Text>
                    {!detail ? (
                      <TouchableOpacity onPress={() => setDetail(true)}>
                        <Feather
                          name="chevron-down"
                          color={'#51C9C2'}
                          size={25}
                          style={{paddingLeft: 15}}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => setDetail(false)}>
                        <Feather
                          name="chevron-up"
                          color={'#51C9C2'}
                          size={25}
                          style={{paddingLeft: 15}}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  {detail ? (
                    <View style={{marginTop: 10}}>
                      <View>
                        <Text style={styles.textInfoCus}>Alamat</Text>
                        <Text style={styles.textInfoCusSub}>
                          Jl. Abdurahman Saleh No.2a Bandung
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 10,
                          marginBottom: 10,
                        }}>
                        <View>
                          <Text style={styles.textInfoCus}>Nomor Telepon</Text>
                          <Text style={styles.textInfoCusSub}>022-6676234</Text>
                        </View>
                        <View style={{marginLeft: 30}}>
                          <Text style={styles.textInfoCus}>Kontak Pribadi</Text>
                          <Text style={styles.textInfoCusSub}>
                            081122223432
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={styles.textInfoCus}>Email</Text>
                        <Text style={styles.textInfoCusSub}>
                          admin@nerby.com
                        </Text>
                      </View>
                    </View>
                  ) : null}
                </View>
                <View style={[styles.formBoxProduk, {marginTop: 20}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[styles.title, {color: '#51C9C2'}]}>
                      Informasi NPWP/NIK
                    </Text>
                    {!detail1 ? (
                      <TouchableOpacity onPress={() => setDetail1(true)}>
                        <Feather
                          name="chevron-down"
                          color={'#51C9C2'}
                          size={25}
                          style={{paddingLeft: 15}}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity onPress={() => setDetail1(false)}>
                        <Feather
                          name="chevron-up"
                          color={'#51C9C2'}
                          size={25}
                          style={{paddingLeft: 15}}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                  {detail1 ? (
                    <>
                      <View style={{flexDirection: 'row'}}>
                        <View style={{padding: 8, flex: 1}}>
                          <TouchableOpacity onPress={onOpenNpwp}>
                            <View style={styles.boxColor}>
                              <Text
                                style={{
                                  fontSize: 12,
                                  color: '#F18F01',
                                  fontWeight: 'bold',
                                }}>
                                Daftar NPWP
                              </Text>
                            </View>
                          </TouchableOpacity>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                            No.NPWP
                          </Text>
                          <View style={styles.action}>
                            <TextInput
                              placeholder={'Masukan no.npwp'}
                              placeholderTextColor="#666666"
                              keyboardType="numeric"
                              style={[styles.textInputArea]}
                              autoCapitalize="none"
                              value={form.npwp}
                              onChangeText={(text) => setForm({npwp: text})}
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'bold',
                              marginTop: 10,
                            }}>
                            Photo NPWP
                          </Text>
                          {form.fotonpwp ? (
                            <Image
                              source={{uri: form.fotonpwp}}
                              style={{
                                width: '100%',
                                height: Dimensions.get('window').height / 8,
                                borderRadius: 8,
                                marginTop: 10,
                              }}
                            />
                          ) : (
                            <TouchableOpacity onPress={takePhotoFromCameraNpwp}>
                              <View
                                style={[
                                  styles.formProduk,
                                  {marginTop: 15, borderColor: '#F18F01'},
                                ]}>
                                <View style={{alignItems: 'center'}}>
                                  <Image
                                    source={Images.camera}
                                    style={{width: 40, height: 30}}
                                  />
                                </View>
                              </View>
                            </TouchableOpacity>
                          )}
                        </View>
                        <View style={{padding: 8, flex: 1}}>
                          <View style={styles.boxColor}>
                            <Text
                              style={{
                                fontSize: 12,
                                color: '#F18F01',
                                fontWeight: 'bold',
                              }}>
                              Daftar NIK
                            </Text>
                          </View>
                          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                            No. NIK
                          </Text>
                          <View style={styles.action}>
                            <TextInput
                              placeholder={'Masukan no nik'}
                              placeholderTextColor="#666666"
                              keyboardType="numeric"
                              style={[styles.textInputArea]}
                              autoCapitalize="none"
                              value={form.nik}
                              onChangeText={(text) => setForm({nik: text})}
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 'bold',
                              marginTop: 10,
                            }}>
                            Photo NIK
                          </Text>
                          {form.fotonik ? (
                            <Image
                              source={{uri: form.fotonik}}
                              style={{
                                width: '100%',
                                height: Dimensions.get('window').height / 8,
                                borderRadius: 8,
                                marginTop: 10,
                              }}
                            />
                          ) : (
                            <TouchableOpacity onPress={takePhotoFromCameraNik}>
                              <View
                                style={[
                                  styles.formProduk,
                                  {marginTop: 15, borderColor: '#F18F01'},
                                ]}>
                                <View style={{alignItems: 'center'}}>
                                  <Image
                                    source={Images.camera}
                                    style={{width: 40, height: 30}}
                                  />
                                </View>
                              </View>
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                      <View style={{padding: 8}}>
                        <Dashed color={'#44B4AD'} />
                      </View>
                      <View
                        style={{
                          padding: 8,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Feather
                          name="plus-circle"
                          color={'#44B4AD'}
                          size={15}
                          style={{paddingRight: 5}}
                        />
                        <Text
                          style={{
                            color: '#44B4AD',
                            fontSize: 12,
                            textAlign: 'center',
                          }}>
                          Tambah Form
                        </Text>
                      </View>
                    </>
                  ) : null}
                </View>
              </>
            )}
          </View>
          <View style={[styles.formBox, {marginTop: 10}]}>
            {!pesanan ? (
              <View>
                <Text style={styles.title}>List Pesanan</Text>
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
                    source={Images.img_list_pesanan}
                    style={{width: '70%', height: 200}}
                  />
                  <Text style={{color: '#AAAAAA', fontSize: 14, marginTop: 10}}>
                    Belum ada list pesanan
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
          <View style={[styles.formBox, {marginTop: 10}]}>
            <Text style={styles.title}>Pembayaran</Text>
            <View>
              <RadioButton PROP={PROP} onChange={handleChange} />
            </View>
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
            <Text style={styles.textTotal}>PPN</Text>
            {detail ? (
              <NumberFormat
                suffix={'%'}
                displayType={'text'}
                decimalScale={2}
                value={0.1 * 100}
                renderText={(value) => (
                  <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>
                    {value}{' '}
                  </Text>
                )}
              />
            ) : (
              <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>10 %</Text>
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
                  value={totalHargaDisc}
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

export default POBaru;
