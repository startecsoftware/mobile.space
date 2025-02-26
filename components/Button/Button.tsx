import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const { width } = Dimensions.get('screen')

export function Button ({ title }: { title: string }) {
    return (
        <TouchableOpacity style={styles.container_contact_pressable}>
            <Text style={styles.container_text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container_contact_pressable: {
        backgroundColor: "#7d02fd",
        width: width * 0.90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    container_text: {
        fontFamily: "MontserratBold",
        fontSize: 18,
        color: '#fff'
    }
})