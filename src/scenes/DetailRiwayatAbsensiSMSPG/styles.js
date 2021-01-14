import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  backgroundArrowRed: {
    backgroundColor: '#F2C2BA',
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 5,
  },
  backgroundArrowGreen: {
    backgroundColor: '#E2F3B9',
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: 5,
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
    marginTop: Platform.OS === 'ios' ? 0 : -12,
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
    margin: 20,
    borderRadius: 8,
    // borderStyle: 'dashed',
    // borderWidth: 1,
    // borderColor: 'orange',
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
});
