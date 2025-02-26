import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import Icons from "../../constants/Icons";
import { router } from "expo-router";

const { width } = Dimensions.get('screen')

const DATA = [
    {
        id: "972aa5fc-e2d5-482b-afe3-298244cc8c0f",
        image: "Imagem",    
        data: "Rua professor Virgínio de Campos - 60 Maceió - AL"
    },
    {
        id: "34915210-29e2-43f6-983a-7957506f7451",
        image: "Imagem",
        data: "Rua professor Virgínio de Campos - 60 Maceió - AL"
    },
    {
        id: "c8e10258-4119-40f9-9ac4-8afa1a22e085",
        image: "Imagem",
        data: "Rua professor Virgínio de Campos - 60 Maceió - AL"
    },
    {
        id: "b22a3d8a-4983-4dae-8d92-065c586894b4",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "1dc1fcbf-5504-42bb-a2d6-a07c7b0e228e",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "4705ea8c-0c4e-480e-aa4a-ba9faac65123",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "794473d2-764b-4d0d-a1d3-7b4f2ba4b373",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "e4fbd90d-b7da-481e-bbe4-3cfd9c169d79",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "d7584929-e3e1-4718-8e54-755116f6d51f",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "58faf65c-75da-4ad3-b81f-5db967788048",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "c66cdc28-f0c3-4af4-9eab-21ab3ebd6d41",
        image: "Imagem",
        data: "Dados do imóvel"
    },
    {
        id: "25a141ce-d665-4b71-854a-23a0203a95f0",
        image: "Imagem",
        data: "Dados do imóvel"
    }
]

export default function Favorites() {

    const navigationToPropertyView = (id: string) => {
        router.push({ pathname: '/propertyView/[id]', params: { id: id } })
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <View style={styles.container_title}>
                    <Text style={styles.container_title_text}>Favoritos</Text>
                </View>
                <View style={styles.container_icon}>
                    {Icons.Favorite(25, 25, '#7d02fd', 2)}
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) => <CardComponent onPress={() => navigationToPropertyView(item.id)} id={item.id} image={item.image} data={item.data}/>}
                    keyExtractor={item => item.id}
                />
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