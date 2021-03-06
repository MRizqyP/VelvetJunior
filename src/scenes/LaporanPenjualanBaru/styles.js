import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  line: {
    marginTop: 10,
    marginBottom: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#F18A04',
  },
  boxColor: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F18F01',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  linegrey: {
    marginTop: 15,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderRadius: 0.1,
    borderColor: '#D9D9D9',
  },
  action: {
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  containerSearch: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingBottom: 5,
    marginTop: 23,
  },
  linelurus: {
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#F18A04',
  },
  textBatal: {
    color: '#51C9C2',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  textSimpan: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
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
  footerBottomSheet: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 6,
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
  selectBox: {
    width: 20,
    height: 20,
    elevation: 5,
    backgroundColor: '#DEDEDE',
  },
  formProduk: {
    padding: 15,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#51C9C2',
  },
  formBox: {
    padding: 14,
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
  textInputArea: {
    flex: 1,
    fontSize: 12,
    color: '#05375a',
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
  buttonSimpan: {
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
  containerButtonOrange: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    padding: 5,
  },
  textButtonOrange: {
    fontSize: 10,
    color: '#F18A04',
    fontWeight: 'bold',
  },
});
