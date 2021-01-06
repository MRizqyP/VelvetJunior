import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  scene: {
    flex: 1,
  },
  box: {
    width: 320,
    height: 140,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  subT: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subTT: {
    fontSize: 14,
    color: '#99C324',
    fontWeight: '200',
  },
  sub: {
    fontSize: 14,
    color: '#F18A04',
  },
  reviewbox: {
    width: 70,
    height: 25,
    borderRadius: 8,
    backgroundColor: '#F18A04',
    justifyContent: 'center',
  },
  suspendbox: {
    width: 70,
    height: 25,
    borderRadius: 8,
    backgroundColor: '#E02020',
    justifyContent: 'center',
  },
  textStatus: {
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
  },
});
