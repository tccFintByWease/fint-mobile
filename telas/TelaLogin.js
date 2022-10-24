import React, { useState } from 'react';
import { View, TextInput, Text, Image, StyleSheet, Pressable } from "react-native";
import patternStyle from '../constantes/style';
import InputSenha from '../componentes/formulario/InputSenha';
import Subtitulo from '../componentes/Subtitulo';
import BotaoInicio from '../componentes/BotaoInicio';
import Colors from '../constantes/colors';
import { Ionicons } from '@expo/vector-icons';

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
                <BotaoInicio 
                    onPress={possuiConta ? abreHome : abreMoeda} 
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