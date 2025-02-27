import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    container_return: {
        width: width,
        justifyContent: 'center',
        paddingLeft: 8,
        paddingTop: 8
    },
    container_modal: {
        backgroundColor: '#f2ecf9',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_header: {
        flexDirection: 'row',
        width: width * 0.95,
        paddingTop: 15,
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container_buttons: {
        backgroundColor: '#E5E4E2',
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_data: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
    },
    container_image: {
        backgroundColor: '#E5E4E2',
        height: 230,
        alignItems: 'center',
        // justifyContent: 'center',
        width: width * 0.95
    },
    container_header_data: {
        backgroundColor: '#7d02fd',
        alignSelf: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5
    },
    container_header_text: {
        fontFamily: 'MontserratBold',
        color: '#fff'
    },
    container_header_title: {
        marginTop: 10,
    },
    container_header_title_text: {
        fontFamily: 'MontserratBold',
        fontSize: 20
    },
    container_data_information: {
        flexDirection: 'row'
    },
    container_data_information_text: {
        marginRight: 5,
        marginLeft: 5,
        fontFamily: 'MontserratBold'
    },
    line_separation: {
        width: width * 0.95,
        height: 1,
        backgroundColor: '#000'
    },
    container_value: {
        flexDirection: 'row'
    },
    container_value_data: {
        // marginLeft: 10,
        marginRight: 5
    },
    container_value_text: {
        fontFamily: 'MontserratRegular'
    },
    container_characteristics: {
        flexDirection: 'row'
    },
    container_information: {
        backgroundColor: '#f2ecf9',
        width: width * 0.45,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#7d02fd"
    },
    container_information_title: {
        fontFamily: 'MontserratBold'
    },
    container_information_data: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_icon: {
        marginRight: 10
    },
    container_information_data_text: {
        fontFamily: 'MontserratRegular',
        flexWrap: 'wrap'
    },
    container_update_description: {
        marginLeft: 5,
        flexDirection: 'row'
    },
    container_update_icon: {
        marginRight: 5
    },
    container_description: {
        marginLeft: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    container_description_text: {
        fontFamily: 'MontserratRegular'
    },
    container_broker: {
        borderWidth: 0.5,
        width: width * 0.95,
        borderColor: '#7d02fd',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 20
    },
    image_broker: {
        height: 60,
        width: 60,
        borderRadius: 5
    },
    container_name_broker: {
        marginLeft: 15
    },
    container_name_broker_text: {
        fontFamily: "MontserratBold",
        fontSize: 18
    },
    container_contact: {
        height: 65,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    container_contact_whatsapp_pressable: {
        backgroundColor: '#25d366',
        width: width * 0.15,
        height: 50,
        marginRight: 10,
        borderRadius: 5,
    },
    container_icon_whatsapp: {
        width: width * 0.15,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_contact_pressable: {
        backgroundColor: "#7d02fd",
        width: width * 0.80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    container_contact_text: {
        fontFamily: "MontserratBold",
        color: '#fff',
        fontSize: 20
    }
})

export default styles