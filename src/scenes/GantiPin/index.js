import React, {useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styles from './styles';
import Images from '../../assets';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {FONT_BOLD_18, FONT_REGULAR_14} from '../../styles/typography';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../../reduxs/actions';

import PINCode, {
  hasUserSetPinCode,
  resetPinCodeInternalStates,
  deleteUserPinCode,
} from '@haskkor/react-native-pincode';
function InputPin(props) {
  var screenWidth = Dimensions.get('window').width;
  const [form, setForm] = useState({
    code: '',
    statusPin: 'choose',
  });
  // console.log(form.code);
  const {state, actions} = props;
  console.log(state);
  const _finishProcess = async () => {
    const hasPin = await hasUserSetPinCode();
    // setForm({...form, statusPin: 'enter'});
    // console.log(hasPin);
    if (hasPin) {
      actions.SET_PIN({pin: state.pin.userPin, authPin: true});
      // props.navigation.navigate('DashboardSP');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.header}>
          <Image source={Images.logo} style={{width: 120, height: 70}} />
          {/* <View style={styles.Message}>
            <Text style={[FONT_BOLD_18, {textAlign: 'center'}]}>
              {props.title}
            </Text>
            <Text
              style={[FONT_REGULAR_14, {marginTop: 20, textAlign: 'center'}]}>
              {props.subTitle}
            </Text>
          </View> */}
        </View>

        <PINCode
          status={props.statusPin}
          touchIDDisabled={true}
          titleChoose={props.title}
          subtitleChoose={props.subTitle}
          colorCircleButtons="#fff"
          styleMainContainer={{backgroundColor: 'white'}}
          numbersButtonOverlayColor={'#ff9800'}
          styleLockScreenText={{color: 'red'}}
          stylePinCodeButtonNumber={'#000'}
          stylePinCodeColorSubtitle={'#000'}
          stylePinCodeColorTitle={'#000'}
          stylePinCodeCircle={{
            backgroundColor: '#F18F01',
            width: 15,
            height: 15,
            borderRadius: 25,
          }}
          storePin={(pin) => {
            actions.PIN_REQ({pin, authPin: false});
          }}
          stylePinCodeTextSubtitle={FONT_REGULAR_14}
          stylePinCodeTextTitle={FONT_BOLD_18}
          finishProcess={_finishProcess}
          vibrationEnabled={false}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(appActions.actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputPin);
