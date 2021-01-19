import {StyleSheet, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageCover: {
    resizeMode: 'cover',
    flex: 1,
  },
  header: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').width / 3.2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Message: {
    margin: 28,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingBottom: 5,
  },
});
