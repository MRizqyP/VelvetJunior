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
    width: Dimensions.get('window').width,
    height: 310,
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
