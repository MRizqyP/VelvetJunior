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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 55,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Message: {
    margin: 28,
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
    marginTop: 90,
    width: 300,
    height: 45,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },
  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  underlineStyleBase: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: '#51C9C2',
  },
  underlineStyleHighLighted: {
    borderColor: 'black',
  },
});
