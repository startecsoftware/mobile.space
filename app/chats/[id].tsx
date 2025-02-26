import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import styles from "./chatStyles";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { ChatComponent } from "../../components/ChatComponent/ChatComponent";

export default function ChatView() {

    const { id } = useLocalSearchParams();

    const navigateToPropertyView = (id: string) => {
        router.push({ pathname: '/propertyView/[id]', params: { id: id } })
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <View>
                    <ReturnButton onPress={() => navigateToPropertyView(id.toString())}/>
                </View>
                <View style={styles.container_name_header}>
                    <Text style={styles.container_name_text}>Pablo Santos Imóveis</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                
            </View>
            <View style={styles.container_input}>
                <ChatComponent/>
            </View>
        </View>
    )
}