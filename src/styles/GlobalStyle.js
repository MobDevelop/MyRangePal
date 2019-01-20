import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
export default Styles = StyleSheet.create({
	flexOne: {
		flex: 1,
    },
    resolution: {
		width,
        height,
    },
    alignVCenter: {
        alignSelf: 'center',
    },
    textFont: {
        fontSize: 40,
        marginTop:200
    },
    colorWhite: {
        color: 'white'
    }
})