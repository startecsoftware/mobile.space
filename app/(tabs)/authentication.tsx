import { Dimensions, Platform, Text, View } from "react-native";
import styles from "../../styles/authenticationStyles";
import { Formik } from "formik";
import { InputForm } from "../../components/InputForm/InputForm";
import { Button } from "../../components/Button/Button";
import { Link } from "expo-router";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import UserView from "../userView/userView";

const { width } = Dimensions.get('screen')

export default function Authentication() {

    const [token, setToken] = useState(true)

    return (
        !token ?
            <View style={styles.container}>
                <Header pageType="authentication"/>
                <View style={{ elevation: 10, backgroundColor: '#fff', marginTop: 15, borderRadius: 5, width: width * 0.95, alignItems: 'center' }}>
                    <View style={{ width: '100%', height: '15%', alignItems: 'center', justifyContent: 'center'   }}>
                        <Text style={{ fontFamily: "MontserratBold", fontSize: 20 }}>Bem-vindo de volta</Text>
                    </View>
                    <Formik
                        initialValues={{email: "", password: ""}}
                        onSubmit={(values) => {

                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View style={styles.container_form}>
                                    <View style={styles.container_form_inputs}>
                                        <View style={styles.container_form_inputs_text}>
                                            <Text style={styles.container_form_inputs_text}>E-mail</Text>
                                        </View>
                                        <InputForm
                                            width={width * 0.90}
                                            height={50}
                                            id="email"
                                            onChangeText={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="E-mail"
                                        />
                                    </View>
                                    <View style={styles.container_form_inputs}>
                                        <View style={styles.container_form_inputs_text}>
                                            <Text style={styles.container_form_inputs_text}>Senha</Text>
                                        </View>
                                        <InputForm
                                            width={width * 0.90}
                                            height={50}
                                            id="password"
                                            onChangeText={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="Senha"
                                            secureTextEntry={true}
                                        />
                                    </View>
                                <View style={{ alignItems: 'center', marginTop: 40 }}>
                                    <Button title="Entrar"/>
                                </View>
                                <View style={{ alignItems: 'center', marginTop: 10 }}>
                                    <Text>Google</Text>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
                <View style={styles.container_register}>
                    <Text style={{ fontFamily: "MontserratRegular", fontSize: 18 }}>Novo no Space iMóveis? <Link style={{fontFamily: "MontserratBold", color: "#7d02fd", fontSize: 18}} href={"/register/register"}>Crie uma conta</Link></Text>
                </View>
            </View>
        :
            <UserView/>
    )
}