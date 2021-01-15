import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Host, Portal} from 'react-native-portalize';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../../components/HeaderModal';
import Dashed from '../../../components/LineDashed';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../assets';
import styles from './styles';
import {Filter} from './components/modals/Filter';
import {KategoriProduk} from './components/modals/KategoriProduk';
import {
  FONT_BOLD_14,
  FONT_BOLD_18,
  FONT_BOLD_20,
  FONT_BOLD_22,
} from '../../../styles/typography';

function LaporanPenjualan({navigation}) {
  const width = Dimensions.get('window').width;
  const modalizeRef = useRef(null);
  const modalizeRef2 = useRef(null);
  const modals = Array.from({length: 2}).map((_) => useRef(null).current);

  function handleFilter(value, detailtoko) {
    // setForm({
    //   ...form,
    //   namatoko: value.namatoko,
    //   alamat: value.alamat,
    // });
    // setDetailToko(detailtoko);
  }
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;
  const nav = useNavigation();
  const [show, setShow] = useState(true);
  const [selected, setSelected] = useState({
    itemIndex: '',
    btnDisabled: true,
    NCategory: '',
  });

  const data = [
    {
      id: 1,
      kategori: 'Basic Wear',
    },
    {
      id: 2,
      kategori: 'Dream Wear',
    },
    {
      id: 3,
      kategori: 'Singlet',
    },
    {
      id: 4,
      kategori: 'Singlet2',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          PressedItem(item.id, item.kategori);
        }}>
        <View style={{flex: 1, marginTop: 10, marginLeft: 20, marginRight: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, fontWeight: '400', marginBottom: 12}}>
              {item.kategori}
            </Text>
            {selected.itemIndex == item.id ? (
              <Feather name="check" color={'orange'} size={20} />
            ) : null}
          </View>
          <Dashed />
        </View>
      </TouchableOpacity>
    );
  };

  const PressedItem = (itemId, Category) => {
    setSelected({itemIndex: itemId, btnDisabled: false, NCategory: Category});
  };
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => modals[1].open()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 12, color: 'white', textAlign: 'center'}}>
              Buat Laporan
            </Text>
            <Feather
              name="plus-circle"
              color={'white'}
              size={20}
              style={{paddingRight: 15, paddingLeft: 4}}
            />
          </View>
        </TouchableOpacity>
      ),
    });

    setShow(false);
  }, [show]);
  return (
    <>
      <Portal>
        <Filter ref={(el) => (modals[0] = el)} />
        <KategoriProduk
          ref={(el) => (modals[1] = el)}
          navigation={navigation}
          data={data}
          selected={selected}
          PressedItem={PressedItem}
        />
      </Portal>

      <Image
        source={Images.backgroundprofile}
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.padding}>
          <View style={styles.containerSearch}>
            <Feather name="search" color="white" size={20} />
            <Text style={{color: 'white', fontSize: 12, marginLeft: 10}}>
              Cari laporan berdasarkan kategori
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail Laporan Penjualan', {
                namatoko: 'Nerby Baby Shop',
                nopo: '100002299388231',
                status: 'Menunggu',
              })
            }>
            <View style={styles.box}>
              <Text style={[FONT_BOLD_20, {color: 'black'}]}>Basic Wear</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 17,
                }}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Tanggal</Text>
                  <Text style={styles.subTT}>13 Dec 2020</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Terjual</Text>
                  <Text style={styles.subTT}>2000 Pack</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Harga</Text>
                  <Text style={styles.subTT}>Rp 500.000.000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail Laporan Penjualan', {
                namatoko: 'Nerby Baby Shop',
                nopo: '100002299388231',
                status: 'Menunggu',
              })
            }>
            <View style={styles.box}>
              <Text style={[FONT_BOLD_20, {color: 'black'}]}>Basic Wear</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 17,
                }}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Tanggal</Text>
                  <Text style={styles.subTT}>13 Dec 2020</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Terjual</Text>
                  <Text style={styles.subTT}>2000 Pack</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Harga</Text>
                  <Text style={styles.subTT}>Rp 500.000.000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail Laporan Penjualan', {
                namatoko: 'Nerby Baby Shop',
                nopo: '100002299388231',
                status: 'Menunggu',
              })
            }>
            <View style={styles.box}>
              <Text style={[FONT_BOLD_20, {color: 'black'}]}>Singlet</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 17,
                }}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Tanggal</Text>
                  <Text style={styles.subTT}>13 Dec 2020</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Terjual</Text>
                  <Text style={styles.subTT}>2000 Pack</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Harga</Text>
                  <Text style={styles.subTT}>Rp 500.000.000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail Laporan Penjualan', {
                namatoko: 'Nerby Baby Shop',
                nopo: '100002299388231',
                status: 'Menunggu',
              })
            }>
            <View style={styles.box}>
              <Text style={[FONT_BOLD_20, {color: 'black'}]}>Dream Wear</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 17,
                }}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Tanggal</Text>
                  <Text style={styles.subTT}>13 Dec 2020</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Terjual</Text>
                  <Text style={styles.subTT}>2000 Pack</Text>
                </View>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Total Harga</Text>
                  <Text style={styles.subTT}>Rp 500.000.000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => modals[0].open()}>
        <Feather name="filter" size={25} color="white" />
        <Text style={{fontSize: 14, color: 'white'}}>Filter</Text>
      </TouchableOpacity>
    </>
  );
}

export default LaporanPenjualan;
