import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  boxInfo: {
    width: 320,
    height: 250,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    elevation: 3,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  buttonBatal: {
    justifyContent: 'center',
    marginTop: 30,
    width: 140,
    borderColor: '#51C9C2',
    height: 45,
    // backgroundColor: '#AAAAAA',
    borderRadius: 8,
    borderWidth: 2,
  },
  buttonSimpan: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 15,
    width: 140,
    height: 45,
    backgroundColor: '#51C9C2',
    borderRadius: 8,
    elevation: 3,
  },
});
