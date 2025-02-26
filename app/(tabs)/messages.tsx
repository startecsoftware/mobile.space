import { Dimensions, StyleSheet, Text, View } from "react-native";
import Icons from "../../constants/Icons";

const { width, height } = Dimensions.get('screen')

export default function Messages() {
    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <View style={styles.container_title}>
                    <Text style={styles.container_title_text}>Mensagens</Text>
                </View>
                <View style={styles.container_icon}>
                    {Icons.Chat(25, 25, '#7d02fd', 2)}
                </View>
            </View>
        </View>
    )
}

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
        paddingLeft: 10
    },
    container_icon: {
        paddingRight: 10
    },
    container_title_text: {
        fontFamily: "MontserratBold",
        fontSize: 25
    }
})