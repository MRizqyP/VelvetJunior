import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get('window').height / 16,
  },
  padding: {
    margin: 20,
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: 'grey',
  },
  action: {
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
  },
  floatingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 10,
    right: Dimensions.get('window').width / 2.5,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#51C9C2',
    flexDirection: 'row',
    borderRadius: 25,
    elevation: 3,
  },
  containerSearch: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#AAAAAA',
    paddingBottom: 5,
    // marginTop: 10,
  },
  box: {
    flexWrap: 'wrap',
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'white',
  },

  linelurus: {
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: '#F18A04',
  },
  reviewbox: {
    flex: 1,
    padding: 5,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: '#F18A04',
    justifyContent: 'center',
  },
  PPICbox: {
    flex: 1,
    padding: 5,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: '#0091FF',
    justifyContent: 'center',
  },
  SMbox: {
    flex: 1,
    padding: 5,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: '#B620E0',
    justifyContent: 'center',
  },

  textStatus: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
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