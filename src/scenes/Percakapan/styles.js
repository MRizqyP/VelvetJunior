import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 20,
  },
  box: {
    // width: 300,
    // height: 90,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  line: {
    marginTop: 10,
    // borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: 'orange',
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
});
