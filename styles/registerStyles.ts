import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2ecf9',
        alignItems: 'center'
    },
    container_header: {
        height: height * 0.20,
        width: width,
        backgroundColor: '#7d02fd',
        alignItems: 'center',
        // justifyContent: 'center',
        elevation: 20
    },
    container_return: {
        width: width,
        paddingTop: 10
    },
    container_form: {
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        width: width,
        height: height * 0.6,
    },
    container_form_inputs: {
       backgroundColor: "#fff", 
       padding: 15,
       borderRadius: 10,
       width: width * 0.95, 
       height: height * 0.55,
       alignItems: 'center',
       justifyContent: 'center',
       elevation: 5
    },
    container_input: {
        // backgroundColor: "red",
        paddingTop: 5,
        paddingBottom: 10
    },
    text_input: {
        fontFamily: "MontserratRegular"
    }
})

export default styles