import React, { Component } from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import Styles from '../styles/GlobalStyle'
import { sanFranciscoWeights } from 'react-native-typography'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class NavigationButton extends Component {
    static defaultProps = {
        text: '',
        iconName: '',
        action: ''
    }
    press = () => {
        if(this.props.action != "")
            this.props.action(this.props.actionName)
    }
    render = () => {
        return (
            <TouchableOpacity style = {Styles.flexOne} onPress = { () => this.press()}>
                <View style = {[Styles.alignFlexCenter, Styles.nButtonWidth, Styles.nButtonHeight]}>
                    <View style = {[Styles.flexRow, Styles.alignFlexCenter]}>
                        <View style = {[Styles.left20Pos]}>
                            <Icon name={this.props.iconName} size={20} color="#FFF" />
                        </View>
                        <View>
                            <Text style = {[Styles.alignSelfCenter, Styles.colorWhite, sanFranciscoWeights.black, Styles.fontSize18]}>{this.props.text}</Text>
                        </View>
                        <View style = {[Styles.right20Pos]}>
                            <Icon name="chevron-right" size={20} color="#FFF" />
                        </View>
                    </View>
                    <View style = {[Styles.bottomPos, Styles.backLightWhite, Styles.nButtonWidth, Styles.heightOne]}></View>
                </View>
            </TouchableOpacity> 
        );
    }
}
