import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

export default function CardInfo({title, number, text, colorline}) {
  return (
    <View style={[styles.child]}>
      <Text style={styles.textCard}>{title}</Text>
      <Text style={styles.textNumberCard}>{number}</Text>
      <Text style={styles.textPO}>{text}</Text>
      <View
        style={{
          width: 40,
          height: 4,
          borderRadius: 4,
          backgroundColor: colorline,
          marginBottom: 10,
        }}
      />
    </View>
  );
}
