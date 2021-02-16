import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
export const KategoriProduk = forwardRef((_, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={550}
      modalHeight={550}
      // HeaderComponent={<Header />}
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
              <TouchableOpacity onPress={() => combinedRef.current?.close()}>
                <View style={styles.buttonSimpan1}>
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
            Pilih Kategori Produk
          </Text>
          <View style={styles.linelurus} />
          <View style={styles.containerSearch}>
            <Feather name="search" color="#AAAAAA" size={20} />
            <Text style={{color: '#AAAAAA', fontSize: 12, marginLeft: 10}}>
              Cari kategori Produk
            </Text>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                modalizeRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  Basic Wear
                </Text>

                <View style={styles.linegrey} />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              onPress={() => {
                modalizeRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  Dream Wear
                </Text>

                <View style={styles.linegrey} />
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
            <View style={{flex: 1, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>Singlet</Text>

              <View style={styles.linegrey} />
            </View>
            <View style={styles.line} />
            <View style={{flex: 1, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>Singlet</Text>

              <View style={styles.linegrey} />
            </View>
            <View style={styles.line} />
          </ScrollView>
        </View>
      </View>
    </Modalize>
  );
});
