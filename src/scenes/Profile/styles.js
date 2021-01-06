import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    width: Dimensions.get('window').width,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSub: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '200',
  },
  boxInfo: {
    width: 320,
    height: 240,
    backgroundColor: 'white',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    elevation: 3,
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: 'grey',
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
