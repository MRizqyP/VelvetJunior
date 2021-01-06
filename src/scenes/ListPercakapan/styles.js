import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerReceive: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#51C9C2',
    borderRadius: 12,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '75%',
    marginRight: 10,
    borderRadius: 8,
  },
});
