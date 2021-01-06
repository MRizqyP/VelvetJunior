import React, {useRef, forwardRef} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../components/LineDashed';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
export const Npwp = forwardRef((props, ref) => {
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
    >
      <View style={{flex: 1}}>
        <View style={{margin: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
            Daftar NPWP
          </Text>
          <View style={styles.linelurus} />
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                props.handleNpwp({
                  npwp: '100002233847732',
                }),
                  combinedRef.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  100002233847732
                </Text>

                <Dashed />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setForm({
                  ...form,
                  npwp: '100002233847732',
                }),
                  modalizeRef3.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  100029938477734
                </Text>

                <Dashed />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setForm({
                  ...form,
                  npwp: '100002233847732',
                }),
                  modalizeRef3.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  100299388473782
                </Text>

                <Dashed />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setForm({
                  ...form,
                  npwp: '100002233847732',
                }),
                  modalizeRef3.current?.close();
              }}>
              <View style={{flex: 1, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: '400'}}>
                  100029388473784
                </Text>

                <Dashed />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modalize>
  );
});
