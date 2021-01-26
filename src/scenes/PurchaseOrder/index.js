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
import Header from '../../components/HeaderModal';
import Dashed from '../../components/LineDashed';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets';
import styles from './styles';
import {Filter} from './components/modals/Filter';
import {KategoriProduk} from './components/modals/KategoriProduk';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../reduxs/actions';

function PurchaseOrder(props) {
  const modals = Array.from({length: 2}).map((_) => useRef(null).current);
  const {stateLogin, stateCategory, actions, navigation, route} = props;

  const [value, setValue] = useState('');
  // console.log(stateCategory.category);
  useEffect(() => {
    actions.GET_CATEGORY({token: stateLogin.userToken});
  }, []);

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
              Buat PO Baru
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
          data={stateCategory.category}
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
              Cari Po Berdasarkan nama toko/no.PO
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
              <Text style={styles.title}>Nerby Baby Shop</Text>
              <Text style={styles.sub}>No PO: 100002299388231</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 17,
                }}>
                <View style={{flex: 0.8}}>
                  <Text style={styles.subT}>Tanggal</Text>
                  <Text style={styles.subTT}>13 Dec 2020</Text>
                </View>

                <View>
                  <Text style={styles.subT}>Status</Text>
                  <View style={styles.reviewbox}>
                    <Text style={styles.textStatus}>Menunggu</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.box}>
            <Text style={styles.title}>Kid’s Zone</Text>
            <Text style={styles.sub}>No PO: 100002299238212</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
              }}>
              <View style={{flex: 0.8}}>
                <Text style={styles.subT}>Tanggal</Text>
                <Text style={styles.subTT}>12 Dec 2020</Text>
              </View>

              <View>
                <Text style={styles.subT}>Status</Text>
                <View style={styles.PPICbox}>
                  <Text style={styles.textStatus}>Disetujui PPIC</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Kid’s Station</Text>
            <Text style={styles.sub}>No PO: 100099887362773</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
              }}>
              <View style={{flex: 0.8}}>
                <Text style={styles.subT}>Tanggal</Text>
                <Text style={styles.subTT}>11 Dec 2020</Text>
              </View>

              <View>
                <Text style={styles.subT}>Status</Text>
                <View style={styles.SMbox}>
                  <Text style={styles.textStatus}>Disetujui SM</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Baby Shop</Text>
            <Text style={styles.sub}>No PO: 100002299388231</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 17,
              }}>
              <View style={{flex: 0.8}}>
                <Text style={styles.subT}>Tanggal</Text>
                <Text style={styles.subTT}>13 Dec 2020</Text>
              </View>

              <View>
                <Text style={styles.subT}>Status</Text>
                <View style={styles.reviewbox}>
                  <Text style={styles.textStatus}>Menunggu</Text>
                </View>
              </View>
            </View>
          </View>
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

const mapStateToProps = (state) => {
  return {
    stateLogin: state.login,
    stateCategory: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(appActions.actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchaseOrder);
