import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputFocusEventData } from "react-native"

export function InputForm({ value, onChangeText, onBlur, placeholder, height, width, id, secureTextEntry }: { value?: string, onChangeText?: (e: string) => void, onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void, placeholder?: string, height?: number, width?: number, id?: string, secureTextEntry?: boolean }) {
    return (
        <TextInput
            style={[styles.input_style, { height: height, width: width }]}
            placeholder={placeholder}
            id={id}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
        />
    )
}

const styles = StyleSheet.create({
    input_style: {
        borderWidth: 0.5,
        borderColor: '#5F5F5F',
        borderRadius: 5,
        paddingLeft: 15,
        fontFamily: 'Montserrat',
        marginTop: 5,
        marginBottom: 5
    },
    input_style_error: {
        borderWidth: 0.5,
        borderColor: '#C41E3A',
        borderRadius: 5,
        paddingLeft: 15,
        fontFamily: 'Montserrat'
    }
})