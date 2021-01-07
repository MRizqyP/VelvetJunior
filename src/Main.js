import Router from './navigations/index';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import store from './configs/store';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default Main;
