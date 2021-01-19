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
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/HeaderModal';
import NumberFormat from 'react-number-format';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Button from '../../components/Button';
import Images from '../../assets';
import styles from './styles';
import {FONT_REGULAR_14} from '../../styles/typography';

function DetailPO({navigation, route}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [detail, setDetail] = useState(true);
  const [show, setShow] = useState(true);

  const nav = useNavigation();

  const [fields, setFields] = useState([
    {
      size: 'S',
      jumlah: '1000',
      harga: '125000000',
    },
    {
      size: 'M',
      jumlah: '1000',
      harga: '375000000',
    },
  ]);

  let total = fields.reduce(function (prev, current) {
    return prev + +current.jumlah;
  }, 0);
  let totalHarga = fields.reduce(function (prev, current) {
    return prev + +current.harga;
  }, 0);
  let totalHargaDisc = totalHarga * 0.1 + totalHarga;

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{marginRight: 15}}>
          <Image
            source={Images.icon_download_pdf}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      ),
    });
    setShow(false);
  }, [show]);
  const {namatoko, nopo, status} = route.params;
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={[styles.formBox, {marginBottom: 10}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                    marginBottom: 15,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Feather
                      name="shopping-cart"
                      color={'orange'}
                      size={25}
                      style={{marginLeft: 10}}
                    />
                    <Text
                      style={{
                        fontWeight: 'bold',
                        marginLeft: 10,
                        fontSize: 14,
                      }}>
                      {namatoko}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={styles.texttitleList}>Tanggal</Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  13 Des 2020
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.texttitleList}>Dibuat Oleh</Text>
                <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                  Aneta Škodová
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.formBox, {marginTop: 10}]}>
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
                Basic Wear
              </Text>
            </View>
            <View
              style={[
                styles.formBoxProduk,
                {marginBottom: 15, elevation: 5, backgroundColor: 'white'},
              ]}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.title, {color: '#51C9C2', marginLeft: 5}]}>
                  Kancing Tengah Lengan Pendek
                </Text>
                {!detail ? (
                  <TouchableOpacity onPress={() => setDetail(true)}>
                    <Feather name="chevron-down" color={'orange'} size={25} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setDetail(false)}>
                    <Feather name="chevron-up" color={'orange'} size={25} />
                  </TouchableOpacity>
                )}
              </View>

              {detail ? (
                <View>
                  <View style={{padding: 5, marginBottom: 10}}>
                    <View style={{flexDirection: 'row', paddingBottom: 15}}>
                      <View style={{flex: 1}}>
                        <Text style={styles.texttitleList}>No. SKU</Text>
                        <Text style={[styles.textInfoCusSub, {paddingTop: 5}]}>
                          A-SDS-123123-12
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.texttitleList}>Varian</Text>
                        <Text style={[styles.textInfoCusSub, {paddingTop: 5}]}>
                          0623
                        </Text>
                      </View>
                    </View>
                    <View style={styles.formProduk}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>Jumlah Produk</Text>
                      </View>
                      {fields.map((field, idx) => {
                        return (
                          <View
                            style={{flexDirection: 'row', marginTop: 10}}
                            key={`${field}-${idx}`}>
                            <View style={{flex: 1, paddingRight: 12}}>
                              <Text style={styles.texttitleList}>Size</Text>
                              <Text
                                style={[
                                  styles.textInfoCusSub,
                                  {paddingTop: 5},
                                ]}>
                                {field.size}
                              </Text>
                            </View>
                            <View style={{flex: 1.2}}>
                              <Text style={styles.texttitleList}>Jumlah</Text>
                              <NumberFormat
                                value={field.jumlah}
                                displayType={'text'}
                                thousandSeparator={true}
                                decimalSeparator="."
                                suffix={' Pcs'}
                                renderText={(value) => (
                                  <Text
                                    style={[
                                      styles.textInfoCusSub,
                                      {paddingTop: 5},
                                    ]}>
                                    {value}
                                  </Text>
                                )}
                              />
                            </View>
                            <View style={{flex: 1.5, paddingLeft: 10}}>
                              <Text style={styles.texttitleList}>Harga</Text>
                              <NumberFormat
                                value={field.harga}
                                displayType={'text'}
                                thousandSeparator={true}
                                decimalSeparator="."
                                prefix={'Rp.'}
                                renderText={(value) => (
                                  <Text
                                    style={[
                                      styles.textInfoCusSub,
                                      {paddingTop: 5},
                                    ]}>
                                    {value}
                                  </Text>
                                )}
                              />
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
                        padding: 12,
                        borderRadius: 6,
                        marginTop: 10,
                      }}>
                      <Text style={{color: '#D67A02'}}>
                        Jumlah Seluruh Produk
                      </Text>
                      <NumberFormat
                        value={total}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalSeparator="."
                        suffix={' Pcs'}
                        renderText={(value) => (
                          <Text style={{color: '#D67A02', fontWeight: 'bold'}}>
                            {value}
                          </Text>
                        )}
                      />
                    </View>
                  </View>
                </View>
              ) : null}
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
            <Text style={styles.textTotal}>Total Produk</Text>
            {detail ? (
              <NumberFormat
                suffix={' Pcs'}
                displayType={'text'}
                decimalScale={2}
                value={total}
                renderText={(value) => (
                  <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>
                    {value}{' '}
                  </Text>
                )}
              />
            ) : (
              <Text style={[styles.textTotal, {fontWeight: 'bold'}]}>
                {total}
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
          <Button text={'Ubah'} />
        </View>
      </View>
    </View>
  );
}

export default DetailPO;
