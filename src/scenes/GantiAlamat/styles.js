import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  containerRadio: {
    // flex: 1,
    marginRight: 20,
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
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  buttonKirim: {
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 20,
    height: 45,
    marginLeft: 25,
    marginRight: 25,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -2,
    color: '#05375a',
    borderBottomWidth: 1,
  },
  headerBox: {
    padding: 16,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
  },
  boxInfo: {
    // height: Dimensions.get('window').height / 4,
    margin: 12,
    borderRadius: 3,
    backgroundColor: 'white',
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 1,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textsubTitle: {
    fontSize: 13,
    color: '#121212',
    fontWeight: '200',
  },
  buttonMasuk: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 25,
    width: 300,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 8,
    elevation: 3,
  },
  buttonBatal: {
    justifyContent: 'center',
    marginTop: 20,
    width: 140,
    borderColor: '#51C9C2',
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
  },
  buttonSimpan1: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
    width: 140,
    height: 45,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
  textBatal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  textBatal1: {
    color: '#51C9C2',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  textSimpan: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },

  linelurus: {
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#F18A04',
  },
});
