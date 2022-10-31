import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, Pressable } from "react-native";
import patternStyle from '../constantes/style';
import InputSenha from '../componentes/formulario/InputSenha';
import Subtitulo from '../componentes/Subtitulo';
import BotaoInicio from '../componentes/BotaoInicio';
import Colors from '../constantes/colors';
import { Ionicons } from '@expo/vector-icons';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'; 
import * as yup from 'yup';

//Validações
const schema = yup.object({
    email: yup.string().email("Informe um email válido").required("Informe seu email"),
    senha: yup.string().min(8, "A senha deve conter pelo menos 8 dígitos").required("Informe sua senha"),
})

function TelaLogin({navigation}) {
    const [possuiConta, setPossuiConta] = useState(false);
    //Funções de abertura de telas
    function abreInicio(){
        navigation.navigate('inicio');
    }
    function abreCadastro(){
        navigation.navigate('cadastro');
    }
    function abreLinkRecuperacao(){
        navigation.navigate('recuperacaoLink');
    }
    function abreMoeda(){
        navigation.navigate('dinheiroMoeda');
    }
    function abreHome(){
        navigation.navigate('home');
    }

    //Formulário de Login
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function fazerLogin(data){
        console.log(data); 
    }

    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Pressable onPress={abreInicio}>
                    <Image
                        style={patternStyle.image}
                        source={require('../assets/images/logo_preto.png')}
                    />
                </Pressable>
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={{width: '90%'}}>
                    <Controller 
                        name='email'
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
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
                    {errors.email && <Text style={patternStyle.labelError}>{errors.email?.message}</Text>}
                    <Controller 
                        name='senha'
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
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
                    {errors.senha && <Text style={patternStyle.labelError}>{errors.senha?.message}</Text>}
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
                <BotaoInicio
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
                </BotaoInicio>
                <Text onPress={abreCadastro} style={patternStyle.texto}>Crie uma nova conta</Text>
            </View>
            <View style={[patternStyle.rodapeLogin, {marginTop: 150}]}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
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