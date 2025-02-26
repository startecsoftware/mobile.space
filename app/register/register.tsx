import { Dimensions, Text, View } from "react-native";
import styles from "../../styles/registerStyles";
import ReturnButton from "../../components/ReturnButton/ReturnButton";
import { router } from "expo-router";
import { Formik } from "formik";
import { InputForm } from "../../components/InputForm/InputForm";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";

const { width, height } = Dimensions.get('screen')

export default function Register() {

    const navigateToLogin = () => {
        router.push({ pathname: '/(tabs)/authentication' })
    }

    return (
        <View style={styles.container}>
            <Header pageType="register"/>
            <View style={styles.container_form}>
                <Formik
                    initialValues={{name: "", email: "", password: "", confirm_password: "" }}
                    onSubmit={(values) => {

                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={styles.container_form_inputs}>
                            <View style={styles.container_input}>
                                <View>
                                    <Text style={styles.text_input}>Nome</Text>
                                </View>
                                <InputForm
                                    width={width * 0.9}
                                    height={50}
                                    id="name"
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder="Nome"
                                />
                            </View>
                            <View style={styles.container_input}>
                                <View>
                                    <Text style={styles.text_input}>E-mail</Text>
                                </View>
                                <InputForm
                                    width={width * 0.9}
                                    height={50}
                                    id="email"
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="E-mail"
                                />
                            </View>
                            <View style={styles.container_input}>
                                <View>
                                    <Text style={styles.text_input}>
                                        Senha
                                    </Text>
                                </View>
                                <InputForm
                                    width={width * 0.9}
                                    height={50}
                                    id="password"
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder="Senha"
                                />
                            </View>
                            <View style={styles.container_input}>
                                <View>
                                    <Text style={styles.text_input}>
                                        Confirmar senha
                                    </Text>
                                </View>
                                <InputForm
                                    width={width * 0.9}
                                    height={50}
                                    id="confirm-password"
                                    onChangeText={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirm_password}
                                    placeholder="Confirme sua senha"
                                />
                            </View>
                            <View>
                                <Button title="Finalizar cadastro"/>
                            </View>
                        </View>
                    )}
                </Formik>
                <View style={{ marginTop: 25 }}>
                    <Text>Google</Text>
                </View>
            </View>
        </View>
    )
}