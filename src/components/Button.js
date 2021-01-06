import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FONT_SIZE_20} from '../styles/typography';

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonMasuk}>
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: FONT_SIZE_20,
    textAlign: 'center',
  },
  buttonMasuk: {
    justifyContent: 'center',
    marginTop: 30,
    width: 300,
    height: 45,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
});
