import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../components/LineDashed';
import Header from '../../../../components/HeaderModal';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
export const Toko = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const {data, selected, navigation, PressedItem, handleToko} = props;

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          PressedItem(item.id, item.name);
          handleToko(
            {
              namatoko: item.name,
              alamat: item.address,
            },
            true,
          );
        }}
        style={{marginLeft: 20, marginRight: 20, marginTop: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontSize: 14, fontWeight: '400'}}>{item.name}</Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '400',
                color: '#F18A04',
                marginBottom: 10,
              }}>
              {item.address}
            </Text>
          </View>
          {selected.itemIndex == item.id ? (
            <Feather name="check" color={'orange'} size={20} />
          ) : null}
        </View>
        <Dashed />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Modalize
        ref={combinedRef}
        contentRef={contentRef}
        snapPoint={550}
        modalHeight={550}
        flatListProps={{
          data: data,
          renderItem: renderItem,
        }}
        HeaderComponent={() => {
          return (
            <>
              <Header />
              <View style={{margin: 20}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
                  Pilih Toko
                </Text>
                <View style={styles.linelurus} />
                <View style={styles.containerSearch}>
                  <Feather name="search" color="#AAAAAA" size={20} />
                  <Text
                    style={{color: '#AAAAAA', fontSize: 12, marginLeft: 10}}>
                    Cari toko berdasarkan nama toko/alamat
                  </Text>
                </View>
              </View>
            </>
          );
        }}
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
                {selected.btnDisabled == false ? (
                  <TouchableOpacity
                    onPress={() => {
                      combinedRef.current?.close();
                    }}>
                    <View style={styles.buttonSimpan1}>
                      <Text style={styles.textSimpan}>Pilih</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.buttonSimpan1}>
                    <Text style={styles.textSimpan}>Pilih</Text>
                  </View>
                )}
              </View>
            </View>
          );
        }}
      />
    </>
  );
});
