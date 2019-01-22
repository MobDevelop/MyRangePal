import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");
export default Styles = StyleSheet.create({
	flexOne: {
		flex: 1,
    },
    resolution: {
		width,
        height,
    },
    alignFlexCenter: {
        justifyContent: 'center',
    },
    textSize40: {
        fontSize: 40
    },
    textSize20: {
        fontSize: 20
    },
    textSize12: {
        fontSize: 12
    },
    marginTop200: {
        marginTop: 200
    },
    marginTop100: {
        marginTop: 100
    },
    marginTop20: {
        marginTop: 20
    },
    marginTop10: {
        marginTop: 10
    },
    colorWhite: {
        color: 'white'
    },
    colorPink: {
        color: 'pink'
    },
    phoneWidth: {
        width
    },
    phoneHeight: {
        height
    },
    headerHeight: {
        height: 40
    },
    nButtonHeight: {
        height: 50
    },
    flexColumn: {
        flexDirection:'column'
    },
    flexRow: {
        flexDirection:'row'
    },
    topPos: {
        position: 'absolute',
        top: 0
    },
    bottomPos: {
        position: 'absolute',
        bottom: 0   
    },
    bottom20Pos: {
        position: 'absolute',
        bottom: 20 
    },
    left20Pos: {
        position: 'absolute',
        left: 20 
    },
    right20Pos: {
        position: 'absolute',
        right: 20
    },
    backLightWhite: {
        backgroundColor: '#cccccc'
    },
    heightOne: {
        height: 1
    },
    nButtonWidth: {
        width: width - 100
    },
    alignSelfCenter: {
        alignSelf:'center'
    },
    fontSize18: {
        fontSize: 18
    },
    fitResolution: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    },
    left30: {
        left: 30
    },
    textBorderWhite: {
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
    },
    textWidth40: {
        width: 40
    },
    textWidth200: {
        width: 200
    }
})