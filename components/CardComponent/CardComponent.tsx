import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDimension } from "../../hooks/useDimension";

const { width } = useDimension()

export function CardComponent({ id, image, data, onPress }: { id: string, image: string, data: string, onPress: VoidFunction }) {
    return (
        <Pressable onPress={onPress} style={{ width: '100%', alignItems: 'center' }}>
            <View key={id} style={styles.container}>
                <View style={styles.container_image}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://projetaronline.com/wp-content/uploads/2024/12/Casa-de-Campo-pequena-1-quarto-02-1024x576.png'
                        }}
                    />
                </View>
                <View style={styles.container_data}>
                    <View style={styles.container_category}>
                        <View style={styles.category}>
                            <Text style={styles.category_text}>Casa</Text>
                        </View>
                        <View style={styles.category}>
                            <Text style={styles.category_text}>Aluguel</Text>
                        </View>
                    </View>
                    <View style={styles.container_title_category}>
                        <Text style={styles.title_category} numberOfLines={2}>{data}</Text>
                    </View>
                    <View style={styles.container_values}>
                        <View style={styles.container_values_data}>
                            <Text style={styles.container_values_data_text}>R$ 3000</Text>
                        </View>
                        <View style={styles.container_values_data}>
                            <Text>|</Text>
                        </View>
                        <View style={styles.container_values_data}>
                            <Text style={styles.container_values_data_text}>R$ 600</Text>
                        </View>
                    </View>
                    <View style={styles.container_property_data}>
                        <View style={styles.container_property}>
                            <Text style={styles.container_property_text}>300 m²</Text>
                        </View>
                        <View style={styles.container_property}>
                            <Text style={styles.container_property_text}>3 quartos</Text>
                        </View>
                        <View style={styles.container_property}>
                            <Text style={styles.container_property_text}>2 vagas</Text>
                        </View>
                    </View>
                    <View style={styles.container_date}>
                        <Text style={styles.container_date_text}>22 de janeiro</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 150,
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 5,
        elevation: 20,
        marginTop: 15,
        marginBottom: 5
    },
    container_image: {
        width: 140,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 140,
        height: 150,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    container_data: {
        alignItems: 'center',
        backgroundColor: '#f2ecf9',
        justifyContent: 'flex-start',
        width: 230,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    container_category: {
        flexDirection: 'row',
        // backgroundColor: "red",
        width: 230,
        paddingTop: 5,
        paddingBottom: 5
    },
    category: {
        backgroundColor: '#7d02fd',
        alignSelf: 'auto',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 5, 
        marginRight: 5,
        borderRadius: 25
    },
    category_text: {
        fontFamily: "MontserratBold",
        color: '#fff',
    },
    container_title_category: {
        // backgroundColor: 'red',
        width: 230,
        paddingLeft: 5
    },
    title_category: {
        fontFamily: "MontserratBold",
        color: '#2a3547'
    },
    container_values: {
        // backgroundColor: "red",
        width: 230,
        flexDirection: 'row',
        paddingLeft: 5
    },
    container_values_data: {
        marginRight: 5
    },
    container_values_data_text: {
        fontFamily: 'MontserratBold',
        color: "#2a3547"
    },
    container_property_data: {
        flexDirection: 'row',
        width: 230,
        paddingLeft: 5
    },
    container_property: {
        marginRight: 5
    },
    container_property_text: {
        fontFamily: "MontserratRegular"
    },
    container_date: {
        width: 230,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 10
    },
    container_date_text: {
        fontFamily: "MontserratRegular"
    }
})