import { ScrollView, Text, View } from "react-native";
import styles from "./userViewStyles";
import Icons from "../../constants/Icons";
import { ListItem } from '@rneui/themed'

export default function UserView() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container_header}>
                    <View style={styles.container_title}>
                        <Text style={styles.container_title_text}>Perfil</Text>
                    </View>
                    <View style={styles.container_icon}>
                        {Icons.BellNotificationOff(30, 30, '#7d02fd', 2)}
                    </View>
                </View>
                <View style={styles.container_title}>
                    <Text style={[styles.container_title_text, { fontSize: 18 }]}>Configurações</Text>
                </View>
                <View>
                    <ListItem>
                        <View>{Icons.User(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Informações pessoais</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                <View style={styles.container_title}>
                    <Text style={[styles.container_title_text, { fontSize: 18 }]}>Anuncios</Text>
                </View>
                <View>
                    <ListItem>
                        <View>{Icons.Graph(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Métricas</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                <View style={styles.container_title}>
                    <Text style={[styles.container_title_text, { fontSize: 18 }]}>Social</Text>
                </View>
                <View>
                    <ListItem>
                        <View>{Icons.Feed(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Feed</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <View>{Icons.Publications(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Minhas publicações</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <View>{Icons.Follow(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Seguindo</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <View>{Icons.Following(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Seguidores</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                <View style={styles.container_title}>
                    <Text style={[styles.container_title_text, { fontSize: 18 }]}>Atendimento</Text>
                </View>
                <View>
                    <ListItem>
                        <View>{Icons.Question(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Acesse a Central de Ajuda</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <View>{Icons.Security(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Ajuda com problema de segurança</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Como funciona o Space iMóveis</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <View>{Icons.Feedback(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Envie-nos seu feedback</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                <View style={styles.container_title}>
                    <Text style={[styles.container_title_text, { fontSize: 18 }]}>Jurídico</Text>
                </View>
                <View>
                    <ListItem>
                        <View>{Icons.Documents(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Termos de servico</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                    <ListItem>
                        <View>{Icons.Documents(20, 20, '#7d02fd', 2)}</View>
                        <ListItem.Content>
                            <Text style={styles.text_list_buttons}>Política de privacidade</Text>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                    </ListItem>
                </View>
                <View style={styles.container_title}>
                <Text style={[styles.container_title_text, { fontSize: 18, color: '#D22B2B' }]}>Sair</Text>
                </View>
            </ScrollView>
        </View>
    )
}