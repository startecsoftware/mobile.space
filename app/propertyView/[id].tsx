import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useMemo, useRef } from "react";
import { Text, View, Dimensions, Pressable, Image, TouchableOpacity, Platform } from "react-native";
import Icons from "../../constants/Icons";
import styles from './propertyStyles'
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const { width } = Dimensions.get('screen')


export default function PropertyView() {

    const { id } = useLocalSearchParams();
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['80%', '50%', '15%'], [])

    const navigateToHome = () => {
        router.push({ pathname: '/(tabs)' })
    }

    const handleSheetChanges = useCallback((index: number) => {
        // console.log('handleSheedChanges', index)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={styles.container_return}>
                    <Pressable onPress={() => navigateToHome()} style={styles.container_buttons}>
                        {Icons.ArrowGoBack(25, 25, '#7d02fd', 2)}
                    </Pressable>
                </View>
            </View>
            <BottomSheet
                snapPoints={snapPoints}
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enableContentPanningGesture={true}
            >
                <BottomSheetScrollView style={{ flex: 1 }}>
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
                        <View style={styles.container_characteristics}>
                            <View style={styles.container_information}>
                                <View style={styles.container_information_data}>
                                    <Text style={styles.container_information_title}>Imóvel</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Bed(25, 25, '#7d02fd', 2)}
                                    </View>
                                    <Text style={styles.container_information_data_text}>2 quartos</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Bath(25, 25, '#7d02fd', 2)}
                                    </View>
                                    <Text style={styles.container_information_data_text}>3 banheiros</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Car(25, 25, '#7d02fd', 2)} 
                                    </View>
                                    <Text style={styles.container_information_data_text}>2 vagas</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Check(25, 25, '#7d02fd', 2)}
                                    </View>
                                    <Text style={styles.container_information_data_text}>Aceita animais</Text>
                                </View>
                            </View>
                            <View style={styles.container_information}>
                                <View style={styles.container_information_data}>
                                    <Text style={styles.container_information_title}>Condomínio</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Check(25, 25, '#7d02fd', 2)}
                                    </View>
                                    <Text style={styles.container_information_data_text}>Sauna</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Check(25, 25, '#7d02fd', 2)}
                                    </View>
                                    <Text style={styles.container_information_data_text}>Área de lazer</Text>
                                </View>
                                <View style={styles.container_information_data}>
                                    <View style={styles.container_icon}>
                                        {Icons.Check(25, 25, '#7d02fd', 2)}
                                    </View>
                                    <Text style={styles.container_information_data_text}>Salão de festar</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginTop: 10, paddingBottom: 10 }}>
                        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 20, paddingLeft: 5 }}>Descrição do anúncio</Text>
                            <View style={styles.container_update_description}>
                                <View style={styles.container_update_icon}>
                                    {Icons.Clock(20, 20, '#7d02fd', 1)}
                                </View>
                                <Text>Criado em 22/01/25</Text>
                            </View>
                        </View>
                        <View style={styles.container_description}>
                            <Text style={styles.container_description_text}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', marginTop: 10, paddingBottom: 10, }}>
                        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ fontFamily: "MontserratBold", fontSize: 20, paddingLeft: 5 }}>Com quem falar?</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.container_broker}>
                                <View>
                                    <Image 
                                        style={styles.image_broker}
                                        source={{
                                            uri: 'https://costaetavaresadv.com.br/wp-content/uploads/2024/03/xx.xx_.2024-Comissao-de-corretor-de-imoveis.jpg'
                                        }}
                                    />
                                </View>
                                <View style={styles.container_name_broker}>
                                    <Text style={styles.container_name_broker_text}>
                                        Pablo Santos Imóveis
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </BottomSheetScrollView>
                <View style={styles.container_contact}>
                    <TouchableOpacity style={styles.container_contact_pressable}>
                        <Text style={styles.container_contact_text}>
                            Contatar
                        </Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    )
}

