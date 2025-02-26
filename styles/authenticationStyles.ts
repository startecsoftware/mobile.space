import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    container_header: {
        height: height * 0.20,
        width: width,
        backgroundColor: '#7d02fd',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20
    },
    container_form: {
        alignContent: 'center',
        // justifyContent: 'center',
        width: width * 0.98,
        height: height * 0.4,
        borderRadius: 5,
        // borderWidth: 1,
        // borderColor: '#7d02fd'
    },
    container_form_inputs_text: {
        width: width * 0.90,
        // paddingBottom: 5,
        fontFamily: 'MontserratRegular'
    },
    container_form_inputs: {
        alignItems: 'center',
        margin: 10
    },
    container_register: {
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_register_text: {
        fontSize: 20,
        fontFamily: "MontserratBold",
        color: "#7d02fd"
    }
})

export default styles