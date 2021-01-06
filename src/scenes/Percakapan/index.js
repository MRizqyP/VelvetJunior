import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Host, Portal} from 'react-native-portalize';
import {Modalize} from 'react-native-modalize';
import Header from '../../components/HeaderModal';
import {useNavigation} from '@react-navigation/native';
import Images from '../../assets';
import styles from './styles';
function Chat({navigation}) {
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 4;
  const modalizeRef = useRef(null);
  const [show, setShow] = useState(true);
  const nav = useNavigation();
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onOpen}>
          <Feather
            name="plus-circle"
            color={'white'}
            size={25}
            style={{paddingRight: 15}}
          />
        </TouchableOpacity>
      ),
    });
    setShow(false);
  }, [show]);
  return (
    <ScrollView style={styles.container}>
      <Portal>
        <Modalize
          ref={modalizeRef}
          snapPoint={450}
          modalHeight={450}
          HeaderComponent={<Header />}
          FooterComponent={() => {
            return (
              <View style={styles.footerBottomSheet}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => modalizeRef.current?.close()}>
                    <View style={styles.buttonBatal}>
                      <Text style={styles.textBatal1}>Batal</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <View style={styles.buttonSimpan1}>
                      <Text style={styles.textSimpan}>Buat Room</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 16,
              flex: 1,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Pilih Kontak</Text>
            <View style={styles.line} />
            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  borderBottomWidth: 1,
                  borderColor: '#AAAAAA',
                }}>
                <Feather
                  name="search"
                  color={'#AAAAAA'}
                  size={25}
                  style={{paddingRight: 15, marginBottom: 10}}
                />
                <Text style={{fontSize: 14, color: '#AAAAAA'}}>
                  Pilih kontak...
                </Text>
              </View>
              <View style={{flexDirection: 'row', padding: 10}}>
                <Image
                  source={Images.icon4}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 12,
                  }}>
                  Rizqy Pratama
                </Text>
              </View>
              <View style={{flexDirection: 'row', padding: 10}}>
                <Image
                  source={Images.icon4}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 12,
                  }}>
                  Rizqy Pratama
                </Text>
              </View>
            </View>
          </View>
        </Modalize>
      </Portal>

      <Image
        source={Images.backgroundprofile}
        style={{width: screenWidth, height: screenHeight, position: 'absolute'}}
      />

      <View style={{marginTop: 50}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Chatting', {name: 'Yahiro Ayuko'})
          }>
          <View style={styles.box}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={Images.icon4}
                  style={{width: 50, height: 50, borderRadius: 50}}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Yahiro Ayuko
                  </Text>
                  <Text style={{fontSize: 12, color: 'grey'}}>04.25 PM</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 12, color: 'grey', marginRight: 10}}>
                    Saya Tunggu Infonya ya pak
                  </Text>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      backgroundColor: 'orange',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 50,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'white',
                      }}>
                      2
                    </Text>
                  </View>
                  <Feather name="more-vertical" color="black" size={20} />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={Images.icon4}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Yahiro Ayuko
                </Text>
                <Text style={{fontSize: 12, color: 'grey'}}>04.25 PM</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: 'grey', marginRight: 10}}>
                  Saya Tunggu Infonya ya pak
                </Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: 'orange',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                    }}>
                    2
                  </Text>
                </View>
                <Feather name="more-vertical" color="black" size={20} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={Images.icon4}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Yahiro Ayuko
                </Text>
                <Text style={{fontSize: 12, color: 'grey'}}>04.25 PM</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: 'grey', marginRight: 10}}>
                  Saya Tunggu Infonya ya pak
                </Text>
                <View
                  style={{
                    height: 20,
                    width: 20,
                    backgroundColor: 'orange',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'white',
                    }}>
                    2
                  </Text>
                </View>
                <Feather name="more-vertical" color="black" size={20} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Chat;
