import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "../../constants/Icons";
import ReturnButton from "../ReturnButton/ReturnButton";
import { router } from "expo-router";

const { width, height } = Dimensions.get("screen")

export function Header({ pageType }: { pageType: string }) {

    const navigateToLogin = () => {
        router.push({ pathname: '/(tabs)/authentication' })
    }

    return (
        <View style={pageType === "home-screen" ? styles.container_header : styles.container_header_register}>
                {pageType === "register" && 
                    <View style={{ width: '100%', paddingTop: 5 }}>
                        <ReturnButton onPress={() => navigateToLogin()}/>
                    </View>
                }
            <View style={{ paddingTop: 15 }}>
                {pageType === "home-screen" && 
                    <TouchableOpacity style={styles.container_search_button}>
                        <View>
                            {Icons.Search(15, 15, 'black', 2)}
                        </View>
                        <View>
                            <Text style={styles.container_input_text}>Inicie sua busca</Text>
                        </View>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container_header: {
        backgroundColor: "#7d02fd",
        width: width,
        height: height * 0.13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_header_register: {
        backgroundColor: "#7d02fd",
        width: width,
        height: height * 0.13,
    },
    container_search_button: {
        backgroundColor: '#fff',
        width: 250,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        flexDirection: 'row'
    },
    container_input_text: {
        fontFamily: "MontserratBold"
    }
})