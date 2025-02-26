import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container_header: {
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container_title: {
        height: 70,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    container_icon: {
        paddingRight: 10
    },
    container_title_text: {
        fontFamily: "MontserratBold",
        fontSize: 25
    },
    text_list_buttons: {
        fontFamily: "MontserratRegular",
        fontSize: 12
    }
})

export default styles