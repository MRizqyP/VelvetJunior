import React, {useRef, useState} from 'react';
import styled from 'styled-components/native';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
// import {Transition, Transitioning} from 'react-native-reanimated';
// import moduleName from 're'
// import Icon from 'react-native-vector-icons/Feather';

// import Images from '../images';
import Svg, {Circle, Path} from 'react-native-svg';
// import icon from './Icon';
import icon from '../assets'
const bgColors = {
  home: '#ffe1c5',
  logger: '#e5c1e5',
  documents: '#d7d8f8',
  menu: '#bce3fa',
};

const textColors = {
  home: '#c56b14',
  logger: '#f37ff3',
  documents: '#4b458c',
  menu: '#2d9cdb',
};

const Container = styled.TouchableWithoutFeedback``;

const Background = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #51c9c2;
  border-radius: 100px;
  margin: 6px;
`;
// const Icon = styled.Image`
//   height: 24px;
//   width: 24px;
// `;

const Label = styled.Text`
  color: ${(props) => textColors[props.label]};
  font-weight: 600;
  margin-left: 8px;
`;

function Tab({label, accessibilityState, onPress, namaicon}) {
  const focused = accessibilityState.selected;
  //   const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];

  //   const transition = (
  //     <Transition.Sequence>
  //       <Transition.Out type="fade" durationMs={0} />
  //       <Transition.Change interpolation="easeInOut" durationMs={100} />
  //       <Transition.In type="fade" durationMs={10} />
  //     </Transition.Sequence>
  //   );
  const [profile, setProfile] = useState('');
  if (namaicon === 'ic_report') {
    var iconnss = icon.icon1
  } else if (namaicon === 'ic_kehadiran') {
    var iconnss = icon.icon3;
  } else if (namaicon === 'ic_chat') {
    var iconnss = icon.icon2;
  } else if (namaicon === 'pasfoto') {
    var iconnss = icon.icon4;
  } else if (namaicon === 'dashboard') {
    var iconnss = icon.icon;
  }else if(namaicon === 'ic_menu'){
    var iconnss = icon.ic_menu
  }
  // {
  //    ?  : null;
  // }
  const ref = useRef();

  return (
    <Container
      onPress={() => {
        // ref.current.animateNextTransition();
        onPress();
      }}>
      <View
        focused={focused}
        label={label}
        style={styles.backgroundIcon}
        // ref={ref}
        // transition={transition}
      >
        {focused ? (
          <>
            <View
              style={{
                top: -1,
                position: 'absolute',
              }}>
              <Svg height="116" width="64">
                <Path
                  fill="#51C9C2"
                  d="M29.9825 32.8856C15.3008 31.2364 26.6184 6.66385 1 1H60C34.6403 6.24431 49.1223 35.0355 29.9825 32.8856Z"
                />
              </Svg>

              <Image source={iconnss} style={styles.imageIconActive} />
            </View>
          </>
        ) : (
          <View>
            <Image source={iconnss} style={styles.imageIcon} />
          </View>
        )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 10,
    borderColor: '#51C9C2',
  },
  imageIconActive: {
    borderRadius: 50,
    width: 20,
    height: 20,
    left: 21,
    position: 'absolute',
    top: 3,
  },
  imageIcon: {
    borderRadius: 50,
    width: 25,
    height: 25,
  },
});

export default Tab;
