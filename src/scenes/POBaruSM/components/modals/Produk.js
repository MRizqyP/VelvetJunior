import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../components/LineDashed';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
export const Produk = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={550}
      modalHeight={550}
      //   HeaderComponent={<Header />}
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
              <TouchableOpacity onPress={() => navigation.navigate('Berhasil')}>
                <View style={styles.buttonSimpan}>
                  <Text style={styles.textSimpan}>Pilih</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}>
      <View style={{flex: 1}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
            Pilih Produk
          </Text>
          <View style={styles.linelurus} />
          <View style={styles.containerSearch}>
            <Feather name="search" color="#AAAAAA" size={20} />
            <Text style={{color: '#AAAAAA', fontSize: 12, marginLeft: 10}}>
              Cari produk berdasarkan SKU/nama produk
            </Text>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                props.handleProduk(
                  {
                    namaproduk: 'Kancing Tengah Lengan Pendek',
                    sku: 'A-SDS-123123-12',
                    harga: 50000,
                  },
                  true,
                );

                combinedRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  Kancing Tengah Lengan Pendek
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: '#F18A04',
                  }}>
                  A-SDS-123123-12
                </Text>
                <Dashed />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setForm({
                  ...form,
                  namaproduk: 'Kancing Tengah Lengan Kutung',
                  sku: 'A-SDS-123123-12',
                }),
                  setPesanan(true);
                modalizeRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  Kancing Tengah Lengan Kutung
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: '#F18A04',
                  }}>
                  A-SDS-123123-12
                </Text>
                <Dashed />
              </View>
            </TouchableOpacity>
            <View style={{flex: 1, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>
                Kancing Tengah Lengan Panjang
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#F18A04',
                }}>
                A-SDS-123123-12
              </Text>
              <Dashed />
            </View>
            <View style={{flex: 1, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>Singlet</Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#F18A04',
                }}>
                A-SDS-123123-12
              </Text>
              <Dashed />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modalize>
  );
});
