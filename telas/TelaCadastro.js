import React from "react";
import { useState } from "react";
import { View, Image, TextInput, Text, Switch, Linking, Modal, Alert, Pressable, StyleSheet } from "react-native";


import Colors from "../constantes/colors";
import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import patternStyle from '../constantes/style';
import InputSenha from "../componentes/InputSenha";
import { LinearGradient } from "expo-linear-gradient";

// Botão Switch
// Tivemos de remover a funcionalidade do botão Switch e tirar a checagem no botão de submit, pois não conseguimos aplicar a constante / checagens no lugar correto.

class TelaCadastro extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nome: '',
            password: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }
    
    submit() {
        // TO DO
        // esse é o IP da máquina que está rodando o uniserver, quando for rodar em outro computador, é preciso trocar isso.
        // quem sabe armazenar essa url em uma variável global App.urlApi ?
        fetch('http://192.168.15.47/bdfint/api/cadastro.php', {
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // id: APP.UserId
                email: this.state.email,
                nome: this.state.nome,
                password: this.state.password
            })
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.success == true) {
                console.warn('vai fio, muda de tela//cadastrado', json.id)
                // TO DO 
                // Armazenar globalmente o json.id como App.UserId para em outras telas executar queries no banco
            } else {
                console.warn(json.message);
            }
        })
        .catch((error) => {
            console.warn(error);
        });
    }

    render() {
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
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        />
                    <TextInput
                        style={patternStyle.input}
                        maxLength={50}
                        keyboardType='default'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='Nome Completo'
                        onChangeText={(text) => { this.setState({ nome: text }) }}
                        />
                    <InputSenha
                        placeholder="Senha"
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        />
                    <InputSenha placeholder="Confirmar senha"/>
                    <View style={{flexDirection: 'row', width: '85%'}}>
                        <BotaoSwitch />
                        <Text 
                        style={[patternStyle.texto, {fontSize: 15}]}>
                            Concordo com os <Text onPress={() => {Linking.openURL('https://pt-br.reactjs.org/');}}>Termos de Uso</Text> e <Text onPress={() => {Linking.openURL('https://reactnative.dev/');}}> Políticas de Privacidade </Text>
                        </Text>
                    </View>
                    
                    <BotaoInicio onPress={() => { this.submit() }} styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Cadastrar-se</BotaoInicio>
                    <View style={styles.centeredView}>
                        <Aviso />
                    </View>
                </View>
                <View style={patternStyle.caixaTexto}>
                    <Text onPress={() => this.props.navigation.navigate('login')} style={patternStyle.texto}>Já possui uma conta? Conecte-se</Text>
                </View>
                <View style={patternStyle.rodapeLogin}>
                    <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                </View>
            </View>
        );
    }
}


export default TelaCadastro;

function BotaoSwitch(){
    //Botão Switch
    const [estaHabilitado, setEstaHabilitado] = useState(false);
    const mexerBotao = () => setEstaHabilitado(previousState => !previousState);

    return(
        <Switch
            trackColor={{ false: Colors.cinzaContorno, true: Colors.verdeSecundario }}
            thumbColor={estaHabilitado ? Colors.verdePrincipal : Colors.branco}
            ios_backgroundColor="#3e3e3e"
            onValueChange={mexerBotao}
            value={estaHabilitado}
        />
    );
}

function Aviso() {
    const [modalVisible, setModalVisible] = useState(false);
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