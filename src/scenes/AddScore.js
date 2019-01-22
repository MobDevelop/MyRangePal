import React, { Component } from 'react';
import { Text, Alert, View, ImageBackground,Keyboard, TouchableOpacity, ListView, Slider, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography'
import Styles from '../styles/GlobalStyle'
import NavigationButton from '../component/NavigationButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-navigation'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import RadioGroup from 'react-native-radio-buttons-group';
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker';
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';
const back = require("../../image/back.jpg");
const UserID = "test";
class AddScore extends Component {
    constructor(props){
        super(props)
    }
    static navigationOptions = {
		title: 'AddScore',
		header: null
    }
    setRadioValue = ( value) => {
        var selLabel = "";
        var count = 3;
        value.map((data) => {
            if(data.selected == true){
                selLabel = data.label
            }
        })
        switch(selLabel){
            case '30':
                count = 3
                break
            case '40':
                count = 4
                break
            case '60':
                count = 6
                break
            default:
                count = 3
                break
        }
        var appD = this.props.appData
        appD.radioData = value
        appD.seriesCount = count
        this.props.saveData(appD)
    }
    sliderChange =  ( i, value) => {
        
        var sValue = this.props.appData.seriesValue
        var total = 0;
        sValue[i].value = Number(value)
        sValue.map((data) => {
            total = total + Number(data.value)
        })
        var appD = this.props.appData
        appD.seriesValue = sValue
        appD.total = total
        this.props.saveData(appD)
    }
    textChanged = ( i, value) => {
        
        if(Number(value)>100){
            value = 100
            var sValue = this.props.appData.seriesValue
        }
        var sValue = this.props.appData.seriesValue
        var total = 0;
        sValue[i].value = Number(value)
        sValue.map((data) => {
            total = total + Number(data.value)
        })
        var appD = this.props.appData
        appD.seriesValue = sValue
        appD.total = total
        this.props.saveData(appD)
    }
    noteChanged = (value) => {
        var appD = this.props.appData
        appD.note = value
        this.props.saveData(appD)
    }
    changeDate = (date) => {
        var appD = this.props.appData
        appD.date = date
        this.props.saveData(appD)
    }
    checkStatus = () => {
        const stat = this.props.saving
        if(stat == 2){
            Alert.alert('Alert',"Error occured!", 
                [{text: 'OK', onPress : () => {this.props.initSaving()}},
                 ],
                {cancelable: false}
            )
        } else if(stat == 3){
            alert("Timeout!!!  Check the network status")
            this.props.initSaving()
        } else if(stat == 4){
            Alert.alert('Alert',"Success!", 
                [{text: 'OK', onPress : () => {this.props.initSaving()}},
                 ],
                {cancelable: false}
            )
        }
    }
    render = () => {
        this.checkStatus()
        var seriesList = [];
        for (let i = 0; i < this.props.appData.seriesCount; i++){
            seriesList.push (
                <View key = {i} style = { [ Styles.flexRow, Styles.alignFlexCenter, Styles.phoneWidth, Styles.headerHeight] }>
                    <Text style = {[ Styles.left20Pos, Styles.colorWhite, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>Series {i + 1}</Text>
                    <Slider
                        style = {{ left:20, width: 200 }}
                        step={1}
                        maximumValue={100}
                        value={Number(this.props.appData.seriesValue[i].value)}
                        onValueChange={ value => this.sliderChange( i, value)}
                        minimumTrackTintColor='#FFF'
                        maximumTrackTintColor='#FFF'
                    />
                    <TextInput keyboardType = 'number-pad' onChangeText={ (text) => this.textChanged( i, text)} maxLength = {100} style = {[ Styles.right20Pos ,Styles.keyBoardNum, Styles.textWidth40, Styles.textBorderWhite, Styles.colorWhite, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>
                        {Number(this.props.appData.seriesValue[i].value)}
                    </TextInput>
                </View>
            )
        }
        return (
            <View style = {Styles.flexOne}>
                <Spinner
                    visible={this.props.saving == 1}
                    textContent={'Loading...'}
                    textStyle={Styles.colorWhite}
                />
                <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
                    <ImageBackground source = {back} style={Styles.resolution} resizeMode = 'cover'>
                        <SafeAreaView style = {[Styles.flexColumn, Styles.fitResolution]}>
                            <View style = {[Styles.flexRow, Styles.marginTop20, Styles.alignFlexCenter, Styles.phoneWidth, Styles.headerHeight]}>
                                <TouchableOpacity style = {[Styles.left20Pos]} onPress = { () => this.props.navigation.pop()}>
                                    <View >
                                        <Icon name = "chevron-left" size={20} color="#FFF" />
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Text style = {[ Styles.colorWhite, sanFranciscoWeights.black, Styles.fontSize18]}>Add Score</Text>
                                </View>
                                <TouchableOpacity style = {[Styles.right20Pos]} onPress = {  () => this.props.saveScore() }>
                                    <View >
                                        <Icon name = "save" size={20} color="#FFF" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style = {[ Styles.flexRow, Styles.alignSelfCenter, Styles.alignFlexCenter, Styles.phoneWidth, Styles.headerHeight]}>
                                <Text style = {[ Styles.colorWhite, Styles.left20Pos, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>Shots</Text>
                                <RadioGroup flexDirection = "row" radioButtons={this.props.appData.radioData} onPress={ value => this.setRadioValue( value)} />
                            </View>
                            <View style = {[ Styles.flexColumn, Styles.alignFlexCenter, Styles.phoneWidth]}>
                                {
                                    seriesList
                                }
                            </View>
                            <View style = {[ Styles.flexRow, Styles.alignSelfCenter, Styles.alignFlexCenter, Styles.phoneWidth, Styles.headerHeight]}>
                                <Text style = {[ Styles.colorWhite, Styles.left20Pos, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>Total</Text>
                                <Text style = {[ Styles.colorWhite, Styles.left30, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>{this.props.appData.total}</Text>
                            </View>
                            <View style = {[ Styles.flexRow, Styles.alignSelfCenter, Styles.alignFlexCenter, Styles.phoneWidth, Styles.headerHeight]}>
                                <Text style = {[ Styles.colorWhite, Styles.left20Pos, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>Date</Text>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.props.appData.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    minDate="2000-01-01"
                                    maxDate="2050-12-31"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 20,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 56,
                                        borderColor: 'white',
                                        borderWidth: 2,
                                        height: 30
                                    },
                                    dateText: {
                                        fontFamily: 'System',
                                        color: 'rgba(255, 255, 255, 1)',
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                    },
                                    btnTextText: {
                                        color: 'white',
                                        fontSize:40,
                                    },
                                    }}
                                    onDateChange={(date) => this.changeDate(date)}
                            />
                            </View>
                            <View style = {[ Styles.flexRow, Styles.alignSelfCenter, Styles.alignFlexCenter, Styles.phoneWidth, Styles.headerHeight]}>
                                <Text style = {[ Styles.colorWhite, Styles.left20Pos, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}>Note</Text>
                                <TextInput onChangeText={ (text) => this.noteChanged(text)} style = {[ Styles.left30 ,Styles.keyBoardNum, Styles.textWidth200, Styles.textBorderWhite, Styles.colorWhite, Styles.alignSelfCenter, sanFranciscoWeights.black, Styles.fontSize18]}> 
                                </TextInput>
                            </View>
                        </SafeAreaView>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
mapStateToProps = (state) => {
    return {
      appData: state.appData,
      saving: state.saving
    }
}
  
mapDispatchToProps = (dispatch) => {
    return {
      saveScore: () => dispatch( {type: "SAVING_SCORE"} ),
      saveData: (appData) => dispatch( {type: "SAVE_APP_DATA", appData} ),
      initSaving: () => dispatch( {type: "INIT_SAVING"} ),
    }
  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScore)