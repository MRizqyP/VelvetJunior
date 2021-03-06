import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    // flex: 1,
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: 'grey',
  },
  selectBox: {
    width: 20,
    height: 20,
    elevation: 5,
    backgroundColor: '#DEDEDE',
  },
  formProduk: {
    // marginTop: 20,
    padding: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#99C324',
  },
  formBox: {
    width: 335,
    height: 100,
    padding: 12,
    backgroundColor: 'white',
  },
  formBoxProduk: {
    marginTop: 20,
    padding: 12,
    // flex: 1,
    backgroundColor: 'white',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    color: '#05375a',
  },
  textInputArea: {
    flex: 1,
    paddingTop: 10,
    fontSize: 12,
    color: '#05375a',
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    // height: 60,
  },
  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  buttonBatal: {
    justifyContent: 'center',
    marginTop: 30,
    width: 140,
    borderColor: '#F89E1D',
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
  },
  buttonSimpan: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 15,
    width: 140,
    height: 45,
    backgroundColor: '#F89E1D',
    borderRadius: 8,
    elevation: 3,
  },
  roundImage: {
    height: 65,
    width: 65,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE6C4',
    borderColor: '#F18A04',
    marginTop: 10,
  },
});
