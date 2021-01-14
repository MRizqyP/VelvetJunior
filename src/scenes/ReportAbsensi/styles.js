import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  listtab: {
    backgroundColor: '#51C9C2',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 60,
  },
  btnTab: {
    width: width / 2.5,
    flexDirection: 'row',
    // borderWidth: 0.5,
    // borderColor: '#EBEBEB',
    padding: 15,
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnTabActive: {
    backgroundColor: '#FEB142',
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
  waitbox: {
    width: 70,
    height: 20,
    borderRadius: 8,
    backgroundColor: '#F18A04',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSub: {
    color: 'orange',
    fontSize: 12,
  },
  boxInfo: {
    // flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    elevation: 3,
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 0.8,
    borderRadius: 0.1,
    borderColor: '#D9D9D9',
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
});
