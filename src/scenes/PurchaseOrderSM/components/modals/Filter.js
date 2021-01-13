import React, {useRef, forwardRef, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Platform} from 'react-native';
import {Modalize} from 'react-native-modalize';
import styles from '../../styles';
import Dashed from '../../../../components/LineDashed';
import {useCombinedRefs} from '../../../../utils/use-combined-refs';
import Feather from 'react-native-vector-icons/Feather';
import Header from '../../../../components/HeaderModal';
import {Picker} from '@react-native-picker/picker';
import {
  FONT_BOLD_10,
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
} from '../../../../styles/typography';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
export const Filter = forwardRef((props, ref) => {
  const modalizeRef = useRef(null);
  const contentRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, modalizeRef);
  const [selectedValue2, setSelectedValue2] = useState('0');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  const [filter, setFilter] = useState({
    status: '',
    kategori: '',
    date: '2016-06-15',
  });

  return (
    <Modalize
      ref={combinedRef}
      contentRef={contentRef}
      snapPoint={450}
      HeaderComponent={<Header />}
      modalHeight={450}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
          flex: 1,
        }}>
        <Text style={[FONT_BOLD_16, {marginBottom: 15}]}>Filter</Text>
        <View style={styles.linelurus} />
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text style={[FONT_BOLD_14]}>Status</Text>
          <View style={styles.action}>
            <Picker
              selectedValue={filter.status}
              itemStyle={[FONT_BOLD_10, {color: '#AAAAAA'}]}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue != '0') {
                  setSelectedValue2(itemValue);

                  setFilter({status: itemValue});
                  // setPerson(itemValue);
                }
              }}>
              <Picker.Item
                label="Pilih status yang akan dimunculkan"
                value="0"
              />
              <Picker.Item label="Menunggu" value="Menunggu" />
              <Picker.Item label="Revisi" value="Revisi" />
              <Picker.Item label="Disetujui SM" value="Disetujui SM" />
            </Picker>
          </View>
        </View>
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text style={[FONT_BOLD_14]}>Kategori</Text>
          <View style={styles.action}>
            <Picker
              selectedValue={filter.status}
              itemStyle={[FONT_BOLD_10, {color: '#AAAAAA'}]}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) => {
                if (itemValue != '0') {
                  setSelectedValue2(itemValue);

                  setFilter({status: itemValue});
                  // setPerson(itemValue);
                }
              }}>
              <Picker.Item
                label="Pilih kategori yang akan dimunculkan"
                value="0"
              />
              <Picker.Item label="Dream Wear" value="Dream Wear" />
              <Picker.Item label="Singlet" value="Singlet" />
              <Picker.Item label="Basic Wear" value="Basic Wear" />
            </Picker>
          </View>
        </View>
        <View style={{marginTop: 15, marginBottom: 15}}>
          <Text style={[FONT_BOLD_14]}>Tanggal</Text>
          <View style={[styles.action, {flexDirection: 'row'}]}>
            <TouchableOpacity
              onPress={showDatepicker}
              style={{flexDirection: 'row', margin: 10}}>
              <Feather
                name="calendar"
                color={'orange'}
                size={25}
                style={{paddingRight: 15, paddingLeft: 4}}
              />
              <Text>{moment(date).format('LL')}</Text>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => props.navigation.dispatch(props.back)}>
            <View style={styles.buttonBatal}>
              <Text
                style={{
                  color: '#51C9C2',
                  fontWeight: 'bold',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Atur Ulang
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modalizeRef1.current?.close()}>
            <View style={styles.buttonSimpan1}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Ok
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modalize>
  );
});
