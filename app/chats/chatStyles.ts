import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container_header: {
        backgroundColor: '#7d02fd',
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.10
    },
    container_name_header: {
        // backgroundColor: '#f2ecf9',
        width: width * 0.70,
        height: 30,
        marginLeft: 10,
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 5
    },
    container_name_text: {
        fontFamily: 'MontserratBold',
        fontSize: 18
    },
    container_input: {
        height: 55,
        width: width,
        backgroundColor: '#f2ecf9',
        elevation: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default styles