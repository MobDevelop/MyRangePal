import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'
import Styles from '../styles/GlobalStyle'
import NavigationButton from '../component/NavigationButton'
import back from '../util/loadImage'
export default class Splash extends Component {
    static navigationOptions = {
		title: 'Splash',
        header: null,
        headerForceInset: {top: 'never'},
    }
    render() {
        return (
            <View style = {Styles.flexOne}>
                <ImageBackground source = {back} style={Styles.resolution} resizeMode = 'cover'>
                    <Text style = {[Styles.textSize40, Styles.marginTop200, sanFranciscoWeights.black, Styles.alignSelfCenter, Styles.colorWhite]}>My Range PAL</Text>
                    <View style = {[Styles.flexColumn, Styles.bottom20Pos,Styles.alignSelfCenter]}>
                        <NavigationButton text = "TargetScan" iconName = "crosshairs"></NavigationButton>
                        <NavigationButton text = "Shooting Score" actionName = "ShootingScore" action = {this.props.navigation.navigate} iconName = "pencil-square-o"></NavigationButton>
                        <NavigationButton text = "Calculate Score" iconName = "calculator"></NavigationButton>
                        <NavigationButton text = "Timer" iconName = "clock-o"></NavigationButton>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

/*function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash)*/