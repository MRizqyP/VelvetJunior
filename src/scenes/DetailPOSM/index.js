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
import RadioButton from '../../components/RadioButton';
import Images from '../../assets';
import Dashed from '../../components/LineDashed';
import styles from './styles';
import {Revisi} from './components/modals/Revisi';
import {DiSetuju} from './components/modals/Disetujui';

function DetailPO({navigation, route}) {
  const modalizeRef = useRef(null);

  const PROP = [
    {
      key: 'tunai',
      text: 'Tunai',
    },
  ];

  const [detail, setDetail] = useState(true);
  const [show, setShow] = useState(true);

  const nav = useNavigation();

  const [fields, setFields] = useState([
    {
      size: 'S',
      jumlah: '100',
      harga: '5000000',
    },
    {
      size: 'M',
      jumlah: '25',
      harga: '1500000',
    },
  ]);

  const [detail1, setDetail1] = useState(false);

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
  const modals = Array.from({length: 3}).map((_) => useRef(null).current);
  const onOpenRevisi = () => {
    modals[0].open();
  };
  const onOpenDisetujui = () => {
    modals[1].open();
  };
  return (
    <View style={{flex: 1}}>
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={480}
          modalHeight={480}
          HeaderComponent={<Header />}
          FooterComponent={() => {
            return (
              <View style={styles.footerBottomSheet}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.buttonBatal}>
                    <Text style={styles.textBatal}>Batal</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Berhasil'),
                        modalizeRef.current?.close();
                    }}>
                    <View style={styles.buttonSimpan1}>
                      <Text style={styles.textSimpan}>Konfirmasi</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={Images.kode_otp} style={{width: 120, height: 140}} />
            <View style={{padding: 20}}>
              <Text style={{color: '#AAAAAA', textAlign: 'center'}}>
                Masukan kode OTP yang diterima oleh customer untuk melakukan
                konfirmasi pesanan
              </Text>
            </View>
            <View>
              <OTPInputView
                style={{
                  width: '80%',
                  height: 120,
                  alignSelf: 'center',

                  paddingLeft: 40,
                }}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={(code) => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
              <Text style={{color: '#F18F01', textAlign: 'center'}}>
                Kirim Ulang OTP
              </Text>
            </View>
          </View>
        </Modalize>
      </Portal>
      <Portal>
        <Revisi ref={(el) => (modals[0] = el)} />
        <DiSetuju ref={(el) => (modals[1] = el)} navigation={navigation} />
      </Portal>

      <ScrollView>
        <View style={{flex: 1}}>
          <View style={[styles.formBox, {marginBottom: 10}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1}}>
                <Text style={styles.texttitleList}>No.PO</Text>
                <Text style={{color: 'orange', fontWeight: 'bold'}}>
                  {nopo}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.texttitleList}>Status</Text>
                <View style={styles.reviewbox}>
                  <Text style={styles.textStatus}>{status}</Text>
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
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  13 Des 2022
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.texttitleList}>Dibuat Oleh</Text>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  Aneta Škodová
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.formBox}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>Toko</Text>
            </View>

            <View>
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
                    {namatoko}
                  </Text>
                </View>
              </View>
              <View style={styles.formProduk}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: 'red',
                  }}>
                  <Text
                    style={{fontSize: 14, fontWeight: 'bold', marginLeft: 2}}>
                    Alamat Pengiriman
                  </Text>
                </View>
                <View style={{marginTop: 15}}>
                  <Text style={[styles.textInfoCus, {color: 'orange'}]}>
                    Kantor {namatoko}
                  </Text>
                  <Text style={styles.textInfoCusSub}>
                    Jl. Cibeurem No.56a Bandung
                  </Text>
                </View>
              </View>
              <View style={[styles.formBoxProduk, {marginTop: 20}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1.5,
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={[styles.title, {color: '#51C9C2'}]}>
                      Informasi Pelanggan
                    </Text>
                  </View>
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
                    <View style={{flex: 1}}>
                      <Text style={styles.textInfoCus}>Alamat</Text>
                      <Text style={styles.textInfoCusSub}>
                        Jl. Abdurahman Saleh No.2a Bandung
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.textInfoCus}>Nomor Telepon</Text>
                        <Text style={styles.textInfoCusSub}>022-6676234</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.textInfoCus}>Email</Text>
                        <Text style={styles.textInfoCusSub}>
                          admin@babyshop.com
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.textInfoCus}>PIC</Text>
                        <Text style={styles.textInfoCusSub}>
                          Dusya Sigachyova
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.textInfoCus}>PIC</Text>
                        <Text style={styles.textInfoCusSub}>081122223432</Text>
                      </View>
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
                        <TouchableOpacity>
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
                      </View>
                    </View>
                  </>
                ) : null}
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
                }}>
                <Text style={[styles.title, {color: '#51C9C2', marginLeft: 5}]}>
                  Kancing Tengah Lengan Pendek
                </Text>
                {!detail ? (
                  <TouchableOpacity onPress={() => setDetail(true)}>
                    <Feather
                      name="chevron-down"
                      color={'orange'}
                      size={25}
                      style={{paddingLeft: 45}}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setDetail(false)}>
                    <Feather
                      name="chevron-up"
                      color={'orange'}
                      size={25}
                      style={{paddingLeft: 45}}
                    />
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
                            <View style={{flex: 1.5, paddingRight: 12}}>
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
          <View style={[styles.formBox, {marginTop: 10}]}>
            <Text style={styles.title}>Pembayaran</Text>
            <View>
              <RadioButton PROP={PROP} />
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
          <TouchableOpacity onPress={onOpenRevisi}>
            <View style={styles.buttonRevisi}>
              <Text style={styles.textBatal}>Revisi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOpenDisetujui}>
            <View style={styles.buttonDisetujui}>
              <Text style={styles.textSimpan}>Disetujui</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DetailPO;
