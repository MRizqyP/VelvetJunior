import React, {useRef, forwardRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../components/LineDashed';
import Header from '../../../../components/HeaderModal';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Images from '../../../../assets';
export const DiSetuju = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const {navigation} = props;
  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={320}
      modalHeight={320}
      HeaderComponent={<Header />}
      FooterComponent={() => {
        return (
          <View style={styles.footerBottomSheet}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity onPress={() => combinedRef.current?.close()}>
                <View style={styles.buttonBatal}>
                  <Text style={styles.textBatal1}>Tidak</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Berhasil'), combinedRef.current?.close();
                }}>
                <View style={styles.buttonSimpan1}>
                  <Text style={styles.textSimpan}>Ya</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={Images.img_keluar_dari_halaman}
          style={{width: 120, height: 140}}
        />
        <View style={{padding: 20}}>
          <Text style={[styles.title, {textAlign: 'center'}]}>Menyetujui</Text>
          <Text style={{color: '#AAAAAA', textAlign: 'center'}}>
            Apakah Anda yakin akan menyetujui PO ini?
          </Text>
        </View>
      </View>
    </Modalize>
  );
});
