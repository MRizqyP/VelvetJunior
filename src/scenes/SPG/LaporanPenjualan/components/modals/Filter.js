import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../../components/LineDashed';
import {useCombinedRefs} from '../../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
export const Filter = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={500}
      modalHeight={500}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          flex: 1,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
          Filter
        </Text>
        <View style={styles.linelurus} />

        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Semua</Text>
        </View>
        <Dashed />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Menunggu</Text>
        </View>
        <Dashed />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Disetujui SM</Text>
        </View>
        <Dashed />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Disetujui PPIC</Text>
        </View>
        <Dashed />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Disetujui Admin</Text>
        </View>
        <Dashed />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Revisi</Text>
        </View>
        <Dashed />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text>Ditolak</Text>
        </View>
      </View>
    </Modalize>
  );
});
