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
import Images from '../../assets';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
function KondisiAkhir({navigation}) {
  const [form, setForm] = useState({
    keterangan: '',
    image: '',
  });
  var screenWidth = Dimensions.get('window').width;
  var screenHeight = Dimensions.get('window').height;

  const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(async (image) => {
      console.log(image);
      setForm({image: image.path});
    });
  };
  console.log(form.image);
  return (
    <View style={styles.container}>
      <ScrollView>
        {form.image ? (
          <View style={styles.boxInfoIsi}>
            <Image
              source={{uri: form.image}}
              style={{width: '100%', height: screenHeight / 4, borderRadius: 8}}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={takePhotoFromCamera}>
            <View style={styles.boxInfo}>
              <Image source={Images.camera} style={{width: 60, height: 48}} />
              <Text style={{fontSize: 12, color: '#AAAAAA', marginTop: 10}}>
                Tekan disini untuk mengambil gambar
              </Text>
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.headerBox}>
          <Text style={styles.textTitle}>Keterangan</Text>

          <View style={styles.action}>
            <TextInput
              placeholder={'Masukan Keterangan Anda'}
              placeholderTextColor="#666666"
              multiline
              numberOfLines={4}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(text) => setForm({keterangan: text})}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonKirim}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Kirim
        </Text>
      </View>
    </View>
  );
}

export default KondisiAkhir;
