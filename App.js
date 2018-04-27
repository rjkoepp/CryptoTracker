import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {View} from 'react-native';

import Store from './src/Store';
import {Header, CryptoContainer} from './src/components';

// https://medium.com/react-native-training/bitcoin-ripple-ethereum-price-checker-with-react-native-redux-e9d076037092

export default class App extends Component {
  render() {
    return (

    //Provider role is to glue React and Redux together.
      <Provider store={Store}>
          <View>
            <Header/>
            <CryptoContainer />
          </View>
        </Provider>
    );
  }
}
