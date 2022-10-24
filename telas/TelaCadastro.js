import React from "react";
import axios from 'axios';
import { useState } from "react";
import { View, Image, Text, Switch, Linking, Modal, Alert, Pressable, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, TextInput} from "react-native";

import Colors from "../constantes/colors";
import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import patternStyle from '../constantes/style';
import { LinearGradient } from "expo-linear-gradient";
import { SIGN_UP_URL } from "../store/api-urls";

function TelaCadastro({navigation}) {
    //Funções de abertura de telas
    function abreInicio(){
        navigation.navigate('cadastro');
    }
    function abreLogin(){
        navigation.navigate('login');
    }

    //Botão Switch
    const [estaHabilitado, setEstaHabilitado] = useState(false);
    const mexerBotao = () => setEstaHabilitado(previousState => !previousState);

    //Botão de Cadastro
    const [modalVisible, setModalVisible] = useState(false);
    
    function Aviso(){
        return(
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <LinearGradient colors={[Colors.verdePrincipal, Colors.verdeSecundario]} style={styles.modalView}>
                        <Text style={styles.modalText}>Concorde com Termos de Uso e Políticas de Privacidade para concluir seu cadastro!</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
            </Modal>
        );
    }   

    //Função de cadastro de usuário
    function cadastrarUsuario(){
        axios.post(SIGN_UP_URL);
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
                <View>
                    {/* Espaço para o Formulário de Cadastro */}
                </View>
                <View style={{flexDirection: 'row', width: '85%'}}>
                    <View style={{ flexDirection: 'row', width: '85%' }}>
                        <Switch
                            trackColor={{ false: Colors.cinzaContorno, true: Colors.verdeSecundario }}
                            thumbColor={estaHabilitado ? Colors.verdePrincipal : Colors.branco}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={mexerBotao}
                            value={estaHabilitado}
                        />
                        <Text
                            onPress={() => { Linking.openURL('https://fint-48a30.web.app/documentacao'); }}
                            style={[patternStyle.texto, { fontSize: 15 }]}>
                            Concordo com os Termos de Uso e Políticas de Privacidade
                        </Text>
                    </View>
                </View>
                <BotaoInicio 
                    onPress={estaHabilitado ?  abreLogin : () => setModalVisible(true)} 
                    styleExterno={patternStyle.botaoExterno} 
                    styleCorpo={patternStyle.botaoInterno} 
                    styleTexto={patternStyle.textoBotao}>
                        Cadastrar-se
                </BotaoInicio>
                <View style={styles.centeredView}>
                    <Aviso />
                </View>
            </View>
            <View style={patternStyle.caixaTexto}>
                <Text onPress={abreLogin} style={patternStyle.texto}>Já possui uma conta? Conecte-se</Text>
            </View>
            <View style={[patternStyle.rodapeLogin, {marginTop: 75}]}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaCadastro;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.branco,
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        elevation: 5
    },
    button: {
        borderRadius: 30,
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: Colors.branco,
    },
    textStyle: {
        color: Colors.verdeSecundario,
        fontFamily: 'roboto-bold',
        textAlign: "center"
    },
    modalText: {
        color: Colors.branco,
        fontFamily: 'roboto-regular',
        fontSize: 16,
        marginBottom: 30,
        textAlign: "center"
    }
});