import React, {useRef, forwardRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../components/LineDashed';
import Header from '../../../../components/HeaderModal';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
import {Setuju} from './Setuju';
export const Revisi = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const modals = Array.from({length: 3}).map((_) => useRef(null).current);
  const onOpenSetuju = () => {
    modals[0].open();
  };
  return (
    <>
      <Setuju ref={(el) => (modals[0] = el)} />
      <Modalize
        ref={combinedRef}
        contentRef={contentRef}
        snapPoint={330}
        modalHeight={330}
        HeaderComponent={<Header />}
        FooterComponent={() => {
          return (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 40,
              }}>
              <TouchableOpacity onPress={() => combinedRef.current?.close()}>
                <View style={styles.buttonBatal}>
                  <Text style={styles.textBatal1}>Batal</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  combinedRef.current?.close();
                  modals[0].open();
                }}>
                <View style={styles.buttonSimpan1}>
                  <Text style={styles.textSimpan}>Kirim</Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}>
        <View style={{flex: 1, margin: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>
            Catatan Revisi
          </Text>
          <View style={styles.linelurus} />
          <View style={styles.action}>
            <Text>Catatan</Text>
            <TextInput
              placeholderTextColor="#666666"
              placeholder={'Tulis Catatan Revisi'}
              style={styles.textInput}
              multiline
              numberOfLines={3}
              autoCapitalize="none"
              onChangeText={(text) => setForm({keterangan: text})}
            />
          </View>
        </View>
      </Modalize>
    </>
  );
});
