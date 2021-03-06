import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerName: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 80,
  },
  formBox: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  textCard: {
    fontSize: 12,
    color: '#AAAAAA',
    fontWeight: 'bold',
  },
  textNumberCard: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  textPO: {
    fontSize: 12,
    color: '#51C9C2',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  waitbox: {
    width: 70,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#F18A04',
    justifyContent: 'center',
    alignItems: 'center',
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
  box: {
    flexWrap: 'wrap',
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 3,
  },

  headerBox: {
    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    elevation: 3,
  },
  textSub: {
    color: 'orange',
    fontSize: 12,
  },
  boxInfo: {
    marginTop: 20,
    // marginBottom: 20,
    backgroundColor: 'white',
    // marginLeft: 16,
    // marginRight: 16,
    borderRadius: 8,
    elevation: 3,
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 0.8,
    borderRadius: 0.1,
    borderColor: 'grey',
  },
  textTitle: {
    fontSize: 16,
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
  parent: {
    width: '100%',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 30,
    // backgroundColor: 'red',
  },
  child: {
    width: '32%',
    height: '30%',
    margin: '1%',
    aspectRatio: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    elevation: 1,
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSimpan: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
    width: Dimensions.get('window').width / 1.15,
    height: 45,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
  textSimpan: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
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
});
