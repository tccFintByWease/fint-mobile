import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import Colors from '../constantes/colors';
import patternStyle from "../constantes/style";

function TelaInicio({navigation}) {
    //Funções para abertura de telas
    function abreLogin(){
        navigation.navigate('login');
    } 
    function abreCadastro(){
        navigation.navigate('cadastro');
    }

    return (
        <LinearGradient colors={[Colors.verdePrincipal, Colors.verdeSecundario]} style={styles.rootContainer}>
            <View style={styles.caixaLogo}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/logo_branco.png')}
                />
                <Subtitulo>Facilitando sua vida financeira</Subtitulo>
            </View>
            <View style={styles.caixaBotoes}>
                <View>
                    <BotaoInicio
                        onPress={abreLogin}
                        styleCorpo={styles.botao} styleTexto={styles.textoBotao}>
                        Conectar-se
                    </BotaoInicio>
                </View>
                <View>
                    <BotaoInicio onPress={abreCadastro}>Criar uma Conta</BotaoInicio>
                </View>
            </View>
            <View style={[patternStyle.rodapeLogin, {marginTop: 40}]}>
                <Subtitulo style={styles.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </LinearGradient>
    );
}

export default TelaInicio;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    caixaLogo: {
        alignItems: 'center',
        marginTop: 100,
    },
    image: {
        resizeMode: 'center',
        width: 150,
        height: 100,
        marginBottom: 10,
        marginLeft: 20
    },
    caixaBotoes: {
        flexDirection: 'column',
        marginHorizontal: 20,
        width: '80%',
        marginTop: 350
    },
    botao: {
        backgroundColor: Colors.branco,
    },
    textoBotao: {
        color: Colors.verdeSecundario
    },
    textorodapeLogin: {
        color: 'white',
        fontSize: 18
    }
});