import { Pressable, StyleSheet, View } from "react-native";
import Icons from "../../constants/Icons";

export default function ReturnButton({ onPress }: { onPress: VoidFunction }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                {Icons.ArrowGoBack(25, 25, '#7d02fd', 2)}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2ecf9',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        margin: 5
    }
})