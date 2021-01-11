import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageCover: {
    resizeMode: 'cover',
    flex: 1,
  },
  header: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessage: {
    marginTop: 30,
    backgroundColor: 'rgba(224,32,32,0.08)',
    padding: 8,
    flexDirection: 'row',
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 8,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E02020',
    paddingBottom: 5,
  },
});
