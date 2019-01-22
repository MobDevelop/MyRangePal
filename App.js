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
import store from './src/store/store'
import firebase from "firebase";
import config from './src/config/FirebaseConfig'
import AddScore from './src/scenes/AddScore'
import ShootingScore from './src/scenes/ShootingScore'
const AppNavigator = createStackNavigator({
  Splash: {screen:Splash, params: {name: 'Splash'}},
  ShootingScore: {screen:ShootingScore, params: {name: 'ShootingScore'}},
  AddScore: {screen:AddScore, params: {name: 'AddScore'}},
},
{
  initialRouteName: 'Splash'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component{
  componentWillMount() {
    
    firebase.initializeApp(config);
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
  }
  render() {
    return (
      <Provider store={ store}>
				<AppContainer />
			</Provider>
    );
  }
}