import { useState } from "react";
import { View, Image, TextInput, Text, Switch, Linking, Modal, Alert, Pressable, StyleSheet } from "react-native";

import Colors from "../constantes/colors";
import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import patternStyle from '../constantes/style';
import InputSenha from "../componentes/InputSenha";
import { LinearGradient } from "expo-linear-gradient";

function TelaCadastro({navigation}) {
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
    function PressHandler(){
        console.log('Cadastrado');
    }

    //Texto "Conecte-se"
    function buttonHandler1(){
        navigation.navigate('login');
    }

    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={patternStyle.inputContainer}>
                <TextInput
                    style={patternStyle.input}
                    maxLength={50}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email'
                />
                <TextInput
                    style={patternStyle.input}
                    maxLength={50}
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Nome Completo'
                />
                <InputSenha placeholder="Senha"/>
                <InputSenha placeholder="Confirmar senha"/>
                <View style={{flexDirection: 'row', width: '85%'}}>
                    <Switch
                        trackColor={{ false: Colors.cinzaContorno, true: Colors.verdeSecundario }}
                        thumbColor={estaHabilitado ? Colors.verdePrincipal : Colors.branco}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={mexerBotao}
                        value={estaHabilitado}
                    />
                    <Text 
                    style={[patternStyle.texto, {fontSize: 15}]}>
                        Concordo com os <Text onPress={() => {Linking.openURL('https://pt-br.reactjs.org/');}}>Termos de Uso</Text> e <Text onPress={() => {Linking.openURL('https://reactnative.dev/');}}> Políticas de Privacidade </Text>
                    </Text>
                </View>
                
                <BotaoInicio onPress={estaHabilitado ?  PressHandler : () => setModalVisible(true)} styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Cadastrar-se</BotaoInicio>
                <View style={styles.centeredView}>
                    <Aviso />
                </View>
            </View>
            <View style={patternStyle.caixaTexto}>
                <Text style={patternStyle.texto} onPress={buttonHandler1}>Já possui uma conta? Conecte-se</Text>
            </View>
            <View style={patternStyle.rodapeLogin}>
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