import React from 'react';
import {StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Receptions } from './src/Screen/Receptions';
import { ReceptionState } from './src/States/ReceptionState/ReceptionState';


export default () => {
  return (
      <Provider store={store}>
        <StatusBar />
        <ReceptionState>
          <Receptions/>
        </ReceptionState>
      </Provider>
  );
};





