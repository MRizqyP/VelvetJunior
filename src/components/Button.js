import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FONT_BOLD_18} from '../styles/typography';

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonMasuk}>
        <Text style={[FONT_BOLD_18, styles.textButton]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    // fontSize: FONT_BOLD_14,
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
