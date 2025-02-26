import { Dimensions, KeyboardAvoidingView, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Icons from "../../constants/Icons";

const { width } = Dimensions.get('screen')
export function ChatComponent() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
            >
                <View style={styles.container_input}>
                    <TextInput
                        style={styles.input_style}
                        placeholder="Mensagem"
                    />
                </View>
            </KeyboardAvoidingView>
            <View>
                <TouchableOpacity style={styles.container_send_buttom}>
                    {Icons.Send(25, 25, '#fff', 2)}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_input: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8
    },
    input_style: {
        fontFamily: 'MontserratRegular',
        backgroundColor: '#fff',
        width: width * 0.80,
        borderRadius: 25,
        paddingLeft: 10
    },
    container_send_buttom: {
        backgroundColor: "#7d02fd",
        padding: 8,
        borderRadius: 25
    }
})