/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * export PATH=~/Library/Android/sdk/tools:$PATH
 * export PATH=~/Library/Android/sdk/platform-tools:$PATH
 * @format
 * @flow
 */

import React, {Component} from 'react'; 
import { Provider } from 'react-redux'
import {createStackNavigator,createAppContainer} from "react-navigation";
import Splash from './src/scenes/Splash'
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from './src/store/store'

const AppNavigator = createStackNavigator({
  Splash: {screen:Splash, params: {name: 'Splash'}},
},
{
  initialRouteName: 'Splash'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  render() {
    return (
      <Provider store={ store}>
				<AppContainer />
			</Provider>
    );
  }
}