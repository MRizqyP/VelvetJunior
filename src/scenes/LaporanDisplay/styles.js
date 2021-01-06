import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
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

  headerBox: {
    width: 320,
    height: 150,
    backgroundColor: 'white',
    marginTop: 120,
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
    marginTop: 30,
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
});
