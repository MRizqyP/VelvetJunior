import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  texttitleList: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#AAAAAA',
  },
  action: {
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    borderColor: '#AAAAAA',
    borderBottomWidth: 1,
  },
  line: {
    marginTop: 10,
    marginBottom: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#F18A04',
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
  footer: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    borderTopWidth: 0.1,
    borderColor: '#AAAAAA',
    elevation: 24,
    padding: 20,
  },

  textTotal: {
    fontSize: 14,
    color: 'black',
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
  linelurus: {
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#F18A04',
  },
  formProduk: {
    padding: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#51C9C2',
  },
  formBox: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  formBoxProduk: {
    padding: 12,
    backgroundColor: '#E0F5F4',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  buttonRevisi: {
    justifyContent: 'center',
    marginTop: 20,
    width: 140,
    borderColor: '#E02020',
    backgroundColor: '#E02020',
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
  },
  buttonDisetujui: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
    width: 140,
    height: 45,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },

  textInfoCus: {
    fontSize: 12,
    marginLeft: 2,
    fontWeight: 'bold',
    color: 'black',
  },
  textInfoCusSub: {
    fontSize: 13,
    marginLeft: 2,
    color: 'black',
  },
  reviewbox: {
    padding: 5,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: '#F18A04',
    justifyContent: 'center',
  },
  textStatus: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
  },
});
