import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'
import Styles from '../styles/GlobalStyle'
const back = "https://i.pinimg.com/474x/da/23/c4/da23c46b5174d25ed20efcdf8e42c10c.jpg";
export default class Splash extends Component {
    static navigationOptions = {
		title: 'Splash',
		header: null
    }

    render() {
        return (
            <View style = {Styles.flexOne}>
                <ImageBackground source = {{uri:back}} style={Styles.resolution} resizeMode = 'cover'>
                    <Text style = {[Styles.textFont, sanFranciscoWeights.black, Styles.alignVCenter, Styles.colorWhite]}>My Range PAL</Text>
                </ImageBackground>
            </View> 
        );
    }
}
