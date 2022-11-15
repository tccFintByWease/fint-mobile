import React, { useState } from 'react';
import axios from 'axios';
import { View, TextInput, Text, Image, StyleSheet, Pressable, TouchableWithoutFeedback, Keyboard, Parse, Alert } from "react-native";
import patternStyle from '../constantes/style';
import Subtitulo from '../componentes/Subtitulo';
import BotaoInicio from '../componentes/BotaoInicio';
import Colors from '../constantes/colors';
import { Ionicons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LOGIN_URL } from '../store/api-urls';
import { loginSchema } from '../store/schemas/login-schema';
import * as SecureStore from 'expo-secure-store';


function TelaLogin({ navigation }) {
    //Funções de abertura de telas
    function abreInicio() {
        navigation.navigate('inicio');
    }
    function abreCadastro() {
        navigation.navigate('cadastro');
    }
    function abreLinkRecuperacao() {
        navigation.navigate('recuperacaoLink');
    }
    function abreMoeda() {
        navigation.navigate('dinheiroMoeda');
    }
    function abreHome() {
        navigation.navigate('home');
    }

    //Formulário de Login
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    async function fazerLogin(data) {
        try {
            const response = await axios.post(LOGIN_URL, data);
            if (data.emailUsuario === response.data.result.emailUsuario && data.senhaUsuario === response.data.result.senhaUsuario && response.data.result.statusUsuario === "Ativo") {
                navigation.navigate('home');
                const sus = data.emailUsuario;
                await SecureStore.setItemAsync("email", sus);

                const subla = await SecureStore.getItemAsync("email");
                console.log(subla)
            } else {
                Alert.alert("Email ou senha inválido");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={patternStyle.rootContainer}>
                <View style={patternStyle.caixaLogo}>
                    <Image
                        style={patternStyle.image}
                        source={require('../assets/images/logo_preto.png')}
                    />
                </View>
                <View style={patternStyle.inputContainer}>
                    <View style={{ width: '90%' }}>
                        <Controller
                            name='emailUsuario'
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={patternStyle.input}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Email"
                                    maxLength={100}
                                />
                            )}
                        />
                        {errors.emailUsuario && <Text style={patternStyle.labelError}>{errors.emailUsuario?.message}</Text>}
                        <Controller
                            name='senhaUsuario'
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={patternStyle.input}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Senha"
                                    maxLength={50}
                                    secureTextEntry={true}
                                />
                            )}
                        />
                        {errors.senhaUsuario && <Text style={patternStyle.labelError}>{errors.senhaUsuario?.message}</Text>}
                    </View>
                    <BotaoInicio
                        onPress={handleSubmit(fazerLogin)}
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={patternStyle.botaoInterno}
                        styleTexto={patternStyle.textoBotao}>
                        Entrar
                    </BotaoInicio>
                    <Text onPress={abreLinkRecuperacao} style={patternStyle.texto}>Esqueceu a senha?</Text>
                </View>
                <View style={[patternStyle.inputContainer, styles.inputContainer2]}>
                    {/* <BotaoInicio
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={styles.botaoInternoG}
                        styleTexto={styles.textoBotao2}>
                        <Ionicons name="logo-google" size={20} />  Entrar com sua conta Google
                    </BotaoInicio>
                    <BotaoInicio
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={styles.botaoInternoF}
                        styleTexto={styles.textoBotao2}>
                        <Ionicons name="logo-facebook" size={20} />   Entrar com sua conta Facebook
                    </BotaoInicio> */}
                    <Text onPress={abreCadastro} style={patternStyle.texto}>Crie uma nova conta</Text>
                </View>
                <View style={[patternStyle.rodapeLogin, {marginTop: 220}]}>
                    <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default TelaLogin;

const styles = StyleSheet.create({
    inputContainer2: {
        marginTop: 25,
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 1,
        paddingVertical: 20,
        width: '90%'
    },
    botaoInternoG: {
        backgroundColor: Colors.vermelhoGoogle,
        paddingVertical: 10
    },
    botaoInternoF: {
        backgroundColor: Colors.azulFacebook,
        paddingVertical: 10
    },
    textoBotao2: {
        fontSize: 16,
        margin: 2
    },
});

// state.userToken == null ? (
//   <>
//     <Stack.Screen name="SignIn" component={SignInScreen} />
//     <Stack.Screen name="SignUp" component={SignUpScreen} />
//     <Stack.Screen name="ResetPassword" component={ResetPassword} />
//   </>
// ) : (
//   <>
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Profile" component={ProfileScreen} />
//   </>
// )