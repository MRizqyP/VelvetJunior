import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../../components/LineDashed';
import {useCombinedRefs} from '../../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
export const Toko = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={550}
      modalHeight={550}
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
            Pilih Toko
          </Text>
          <View style={styles.linelurus} />
          <View style={styles.containerSearch}>
            <Feather name="search" color="#AAAAAA" size={20} />
            <Text style={{color: '#AAAAAA', fontSize: 12, marginLeft: 10}}>
              Cari toko berdasarkan nama toko/alamat
            </Text>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                props.handleToko(
                  {
                    namatoko: 'Nerby Baby Shop',
                    alamat: 'Jl. Abdurahman Saleh No.2a Bandung',
                  },
                  true,
                );
                combinedRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  Nerby Baby Shop
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: '#F18A04',
                  }}>
                  Jl. Abdurahman Saleh No.2a Bandung
                </Text>
                <Dashed />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.handleToko(
                  {
                    namatoko: 'Kid’s Station',
                    alamat: 'Jl. Pajajaran No.90 Bandung',
                  },
                  true,
                );
                combinedRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  Kid’s Station
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: '#F18A04',
                  }}>
                  Jl. Pajajaran No.90 Bandung
                </Text>
                <Dashed />
              </View>
            </TouchableOpacity>
            <View style={{flex: 1, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>Kid’s Zone</Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#F18A04',
                }}>
                Jl. Dr.Setiabudi No.45 Bandung
              </Text>
              <Dashed />
            </View>
            <View style={{flex: 1, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '400'}}>Kid’s Zone</Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: '#F18A04',
                }}>
                Jl. Dr.Setiabudi No.45 Bandung
              </Text>
              <Dashed />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modalize>
  );
});
