import { StyleSheet, Text, View } from "react-native";
import { useDimension } from "../../hooks/useDimension";

const { width } = useDimension()

export function CardAdvertising() {
    return (
        <View style={styles.cotainer}>
            <View style={styles.subcontainer_card}>
                <Text>PROPAGANDA</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        height: 300,
        marginTop: 10,
        width: width,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subcontainer_card: {
        backgroundColor: '#E5E4E2',
        width: width * 0.90,
        height: 280,
        alignItems: 'center',
        justifyContent: 'center'
    }
})