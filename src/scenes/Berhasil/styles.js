import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSimpan: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 15,
    width: 280,
    height: 42,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
});
