import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Images from '../../assets';
import styles from './styles';
import Dashed from '../../components/LineDashed';
import {
  FONT_BOLD_10,
  FONT_BOLD_12,
  FONT_BOLD_14,
  FONT_BOLD_16,
  FONT_REGULAR_10,
  FONT_REGULAR_12,
  FONT_REGULAR_14,
} from '../../styles/typography';
import {greaterThan} from 'react-native-reanimated';
function Notifikasi({navigation}) {
  const [form, setForm] = useState({
    keterangan: '',
  });
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height / 1.8;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{padding: 16}}>
          <Text style={FONT_BOLD_16}>Terbaru</Text>
          <Dashed />
          <View style={styles.boxInfo}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View
                  style={{
                    width: 43,
                    height: 43,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <Image
                    source={Images.icon4}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'white',
                      borderRadius: 50,
                      width: 14,
                      height: 14,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        backgroundColor: 'green',
                        borderRadius: 50,
                      }}
                    />
                  </View>
                </View>

                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[FONT_BOLD_14, {color: '#AAAAAA'}]}>
                      Yahiro Ayuko
                    </Text>
                    <Text style={[FONT_REGULAR_12, {color: '#F18F01'}]}>
                      11:30 AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View>
                      <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                        <Text style={FONT_BOLD_14}>Purchase Order</Text> yang
                        Anda buat telah disetujui
                        <Text style={FONT_BOLD_14}> PPIC</Text>.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boxInfo}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View
                  style={{
                    width: 43,
                    height: 43,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <Image
                    source={Images.icon4}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'white',
                      borderRadius: 50,
                      width: 14,
                      height: 14,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        width: 12,
                        height: 12,
                        backgroundColor: 'green',
                        borderRadius: 50,
                      }}
                    />
                  </View>
                </View>

                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[FONT_BOLD_14, {color: '#AAAAAA'}]}>
                      Aasiya Jayavant
                    </Text>
                    <Text style={[FONT_REGULAR_12, {color: '#F18F01'}]}>
                      10:13 AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View>
                      <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                        <Text style={FONT_BOLD_14}>Purchase Order</Text> yang
                        Anda buat telah disetujui
                        <Text style={FONT_BOLD_14}> Sales Manager</Text>.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={[FONT_BOLD_16, {marginTop: 17}]}>Terdahulu</Text>
          <Dashed />
          <View style={styles.boxInfo}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View
                  style={{
                    width: 43,
                    height: 43,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <Image
                    source={Images.icon4}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                  />
                </View>

                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[FONT_BOLD_14, {color: '#AAAAAA'}]}>
                      Yahiro Ayuko
                    </Text>
                    <Text style={[FONT_REGULAR_10, {color: '#F18F01'}]}>
                      Kemarin, 10:23 AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View>
                      <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                        <Text style={FONT_BOLD_14}>Purchase Order</Text> yang
                        Anda buat telah disetujui
                        <Text style={FONT_BOLD_14}> PPIC</Text>.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.boxInfo}>
            <View style={{padding: 16}}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View
                  style={{
                    width: 43,
                    height: 43,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3,
                  }}>
                  <Image
                    source={Images.icon4}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                  />
                </View>

                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[FONT_BOLD_14, {color: '#AAAAAA'}]}>
                      Aasiya Jayavant
                    </Text>
                    <Text style={[FONT_REGULAR_10, {color: '#F18F01'}]}>
                      Kemarin, 10:23 AM
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View>
                      <Text style={[FONT_REGULAR_14, {color: 'black'}]}>
                        <Text style={FONT_BOLD_14}>Purchase Order</Text> yang
                        Anda buat telah disetujui
                        <Text style={FONT_BOLD_14}> Sales Manager</Text>.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Notifikasi;
