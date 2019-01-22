import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'
import Styles from '../styles/GlobalStyle'
import NavigationButton from '../component/NavigationButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation'
const back = require("../../image/back.jpg");
export default class ShootingScore extends Component {
    static navigationOptions = {
		title: 'ShootingScore',
		header: null
    }
    render() {
        return (
            <View style = {Styles.flexOne}>
                <ImageBackground source = {back} style={Styles.resolution} resizeMode = 'cover'>
                    <SafeAreaView style = {[Styles.flexColumn, Styles.fitResolution]}>
                        <View style = {[Styles.flexRow,Styles.marginTop20, Styles.alignFlexCenter, Styles.alignSelfCenter, Styles.phoneWidth, Styles.headerHeight]}>
                            <TouchableOpacity style = {[Styles.left20Pos]} onPress = { () => this.props.navigation.pop()}>
                                <View>
                                    <Icon name = "chevron-left" size={20} color="#FFF" />
                                </View>
                            </TouchableOpacity>
                            <Text style = {[ Styles.colorWhite, sanFranciscoWeights.black, Styles.fontSize18]}>Shooing Score</Text>
                        </View>
                        <Text style = {[Styles.textSize40, Styles.marginTop100, sanFranciscoWeights.black, Styles.alignSelfCenter, Styles.colorWhite]}>ShootinG</Text>
                        <Text style = {[Styles.textSize40, sanFranciscoWeights.black, Styles.alignSelfCenter, Styles.colorWhite]}>Score</Text>
                        <Text style = {[Styles.textSize12, Styles.marginTop20, sanFranciscoWeights.black, Styles.alignSelfCenter, Styles.colorWhite]}>10M Air Rifle Log Book</Text>
                        <View style = {[Styles.flexColumn, Styles.bottom20Pos, Styles.alignSelfCenter, Styles.alignFlexCenter]}>
                            <NavigationButton text = "Add Session" actionName = "AddScore" action = {this.props.navigation.navigate} iconName = "plus"></NavigationButton>
                            <NavigationButton text = "View Session" iconName = "list"></NavigationButton>
                            <NavigationButton text = "Shooting Timer" iconName = "hourglass-2"></NavigationButton>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        );
    }
}