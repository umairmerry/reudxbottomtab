import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Provider } from 'react-redux';
import { Store } from "./src/Store"
import Home from './src/screen/Home';
import Navig from './src/nav/Navig'
import BottomTab from './src/nav/BottomTab';

export default function App() {
  return (
    <Provider store={Store}>
      <BottomTab/>
    </Provider>

  )
}