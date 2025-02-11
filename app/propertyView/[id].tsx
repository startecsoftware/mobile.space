import { BottomSheet } from "@rneui/themed";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Pressable, ScrollView } from "react-native";
import Icons from "../../constants/Icons";

const { width } = Dimensions.get('screen')


export default function PropertyView() {

    const { id } = useLocalSearchParams();

    const [isVisible, setIsVisible] = useState(false);

    const navigateToHome = () => {
        setIsVisible(false)
        router.push({ pathname: '/(tabs)' })
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', paddingTop: 10, alignItems: 'flex-end', paddingRight: 8, backgroundColor: '#f2ecf9' }}>
                <Pressable style={styles.container_buttons} onPress={() => setIsVisible(true)}>
                    {Icons.PropertyData(25, 25, '#7d02fd', 2)}
                </Pressable>
            </View>
            <View style={{ backgroundColor: '#f2ecf9', width: width, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>MAPA</Text>
            </View>
            <BottomSheet modalProps={{
                animationType: 'slide'

            }} containerStyle={styles.container_modal} isVisible={isVisible}>
                <ScrollView>
                    <View style={{ justifyContent: 'center' }}>
                        <View style={styles.container_header}>
                            <View>
                                <Pressable onPress={() => navigateToHome()} style={styles.container_buttons}>
                                    {Icons.ArrowGoBack(25, 25, '#7d02fd', 2)}
                                </Pressable>
                            </View>
                            <View>
                                <Pressable onPress={() => setIsVisible(false)} style={styles.container_buttons}>
                                    {Icons.Localization(25, 25, '#7d02fd', 2)}
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container_data}>
                        <View style={styles.container_image}>
                            <Text>IMAGEM</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 20, backgroundColor: '#fff', paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5 }}>
                        <View style={styles.container_header_data}>
                            <Text style={styles.container_header_text}>Super destaque</Text>
                        </View>
                        <View style={styles.container_header_title}>
                            <Text style={styles.container_header_title_text}>Casa para vender</Text>
                        </View>
                        <View style={styles.container_data_information}>
                            <Text style={styles.container_data_information_text}>300 m²</Text>
                            <View>
                                <Text>|</Text>
                            </View>
                            <Text style={styles.container_data_information_text}>3 quartos</Text>
                            <View>
                                <Text>|</Text>
                            </View>
                            <Text style={styles.container_data_information_text}>2 vagas</Text>
                        </View>
                        <View style={{ justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                            <View style={styles.line_separation}></View>
                        </View>
                        <View style={styles.container_value}>
                            <View style={styles.container_value_data}>
                                <Text style={styles.container_value_text}>R$ 3000</Text>
                            </View>
                            <View>
                                <Text style={styles.container_value_text}>R$ 600/mês</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginTop: 10, paddingBottom: 10 }}>
                        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 20, paddingLeft: 5 }}>Localização</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: "MontserratRegular", fontSize: 18, paddingLeft: 5 }}>Rua Professor Virgínio de Campos - 60 Maceió - AL</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginTop: 10, paddingBottom: 10 }}>
                        <View>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 20, paddingLeft: 5 }}>Características</Text>
                        </View>
                        <View>
                            <View>
                                <Text>300 m²</Text>
                                <Text>2 quartos</Text>
                            </View>
                            <View></View>
                        </View>
                    </View>
                </ScrollView>
            </BottomSheet>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
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
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container_buttons: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_data: {
        flex: 1,
        backgroundColor: 'red',
        marginTop: 10,
        marginBottom: 10
    },
    container_image: {
        backgroundColor: '#E5E4E2',
        height: 230,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_header_data: {
        backgroundColor: '#000',
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
    }
})