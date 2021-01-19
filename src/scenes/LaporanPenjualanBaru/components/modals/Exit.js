import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Images from '../../../../assets';
export const Exit = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={300}
      modalHeight={300}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={Images.img_keluar_dari_halaman}
          style={{width: 100, height: 120}}
        />
        <Text style={styles.title}>Keluar dari Halaman</Text>
        <Text style={{color: '#AAAAAA'}}>
          Perubahan yang dibuat akan menghilang
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => props.navigation.dispatch(props.back)}>
            <View style={styles.buttonBatal}>
              <Text
                style={{
                  color: '#51C9C2',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Ya
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modalizeRef1.current?.close()}>
            <View style={styles.buttonSimpan}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Tidak
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modalize>
  );
});
