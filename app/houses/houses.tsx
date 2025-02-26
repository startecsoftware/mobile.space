import { useState } from "react";
import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";
// import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { useDimension } from "../../hooks/useDimension";
import { CardComponent } from "../../components/CardComponent/CardComponent";
import { CardAdvertising } from "../../components/CardAdvertising/CardAdvertising";
import { router } from "expo-router";
import { Tab, TabView } from "@rneui/themed"
const DATA = [
    {
        advertising: 'PROPAGANDA',
        data: [
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
            }
        ]
    },
    {
        advertising: 'PROPAGANDA',
        data: [
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
            }
        ]
    },
    {
        advertising: 'PROPAGANDA',
        data: [
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
            }
        ]
    },
    {
        advertising: 'PROPAGANDA',
        data: [
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
    }
]

export default function Houses() {

    const [index, setIndex] = useState(0)
    const { width } = useDimension()

    const navigationToPropertyView = (id: string) => {
        router.push({ pathname: '/propertyView/[id]', params: { id: id }})
    }

    const HighlightsRoute = () => (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <SectionList
                style={styles.list_container}
                sections={DATA}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => (
                    <CardComponent onPress={() => navigationToPropertyView(item.id)} id={item.id} image={item.image} data={item.data}/>
                )}
                renderSectionFooter={({section: { advertising }}) => (
                    <CardAdvertising/>
                )}
            />
        </View>
    )

    const AllhouseRoute = () => (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <SectionList
                style={styles.list_container}
                sections={DATA}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => (
                    <CardComponent onPress={() => navigationToPropertyView(item.id)} id={item.id} image={item.image} data={item.data}/>
                )}
                renderSectionFooter={({section: { advertising }}) => (
                    <CardAdvertising/>
                )}
            />
        </View>
    )

    // const renderTabBar = (props: any) => (
    //     <TabBar
    //         {...props}
    //         indicatorStyle={{ backgroundColor: '#f2ecf9' }}
    //         tabStyle={{ backgroundColor: '#f2ecf9' }}
    //         contentContainerStyle={{
    //             shadowColor: 'transparent'
    //         }}
    //         style={{
    //             elevation: 0,
    //             backgroundColor: '#f2ecf9'
    //         }}
    //     />
    // )

    // const renderScene = SceneMap({
    //     highlights: HighlightsRoute,
    //     allhouse: AllhouseRoute
    // })


    // const routes = [
    //     { key: 'highlights', title: 'Destaques' },
    //     { key: 'allhouse', title: 'Todos' }
    // ]

    return (
        <View style={styles.container}>
            <View style={styles.container_navigation}>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    disableIndicator={true}
                    variant="primary"
                    style={{
                        backgroundColor: "transparent"
                    }}
                >
                    <Tab.Item
                        title="Destaques"
                        titleStyle={{ fontFamily: "MontserratBold", fontSize: 15 }}
                        dense={true}
                        containerStyle={{
                            backgroundColor: "#7d02fd",
                            borderRadius: 10,
                            margin: 5,
                            height: 45,
                            padding: 0
                        }}
                        variant="default"
                    />
                    <Tab.Item
                        title="Todos"
                        titleStyle={{ fontFamily: "MontserratBold", fontSize: 15 }}
                        dense={true}
                        containerStyle={{
                            backgroundColor: "#7d02fd",
                            borderRadius: 10,
                            margin: 5,
                            height: 45
                        }}
                    />
                </Tab>
                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={{ width: width }}>
                        {HighlightsRoute()}
                    </TabView.Item>
                    <TabView.Item style={{ width: width }}>
                        {AllhouseRoute()}
                    </TabView.Item>
                </TabView>
                {/* <TabView
                    options={{
                        highlights: {
                            label: ({focused}) => (
                                <View style={ focused ? styles.container_button : styles.container_button_inactive}>
                                    <Text style={ focused ? styles.container_button_text : styles.container_button_text_inactive}>Destaques</Text>
                                </View>
                            )
                        },
                        allhouse: {
                            label: ({focused}) => (
                                <View style={focused ? styles.container_button : styles.container_button_inactive}>
                                    <Text style={focused ? styles.container_button_text : styles.container_button_text_inactive}>Todos</Text>
                                </View>
                            )
                        }
                    }}
                    swipeEnabled={false}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: width }}
                    renderTabBar={renderTabBar}
                /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2ecf9'
    },
    container_navigation: {
        flex: 1,
        // justifyContent: 'center',
    },
    container_button: {
        width: 180,
        height: 35,
        borderRadius: 8,
        backgroundColor: "#7d02fd",
        alignItems: 'center',
        justifyContent: 'center',
    },
    container_button_text: {
        fontFamily: "MontserratBold",
        color: '#fff'
    },
    container_button_inactive: {
        width: 180,
        height: 35,
        borderRadius: 8,
        backgroundColor: "#7d02fd",
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_button_text_inactive: {
        fontFamily: "Montserrat",
        color: '#fff'
    },
    list_container: {
        width: "100%",
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})