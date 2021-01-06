import React, {Component, useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function RadioButton({PROP, onChange}) {
  const [value, setValue] = useState({value: PROP[0].key});

  return (
    <View style={{flexDirection: 'row'}}>
      {PROP.map((res) => {
        return (
          <View key={res.key} style={styles.container}>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setValue({
                  value: res.key,
                });
                onChange(res.key);
              }}>
              {value.value === res.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text style={styles.radioText}>{res.text}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 5,
    marginTop: 10,
    flexDirection: 'row',
  },
  radioText: {
    marginRight: 35,
    fontSize: 13,
    color: '#000',
    marginLeft: 15,
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: '#F18F01',
    elevation: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 7.5,
    height: 7.5,
    borderRadius: 50,
    backgroundColor: '#F18F01',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F18F01',
  },
});
export default RadioButton;
