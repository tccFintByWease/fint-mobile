import React from 'react';
import { View, TextInput, Text, Image, StyleSheet } from "react-native";
import patternStyle from '../constantes/style';
import InputSenha from '../componentes/InputSenha';
import Subtitulo from '../componentes/Subtitulo';
import BotaoInicio from '../componentes/BotaoInicio';
import Colors from '../constantes/colors';
import {Ionicons} from '@expo/vector-icons';

class TelaLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        fetch('http://192.168.15.47/bdfint/api/login.php', {
            method: 'POST',
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // id: APP.UserId
                email: this.state.email,
                password: this.state.password
            })
        })
        .then((response) => response.json())
        .then((json) => {
            if (json.success == true) {
                console.warn('Bem-Vindo a Fint!', json.id)
                
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
                    <InputSenha
                        placeholder="Senha"
                        onChangeText={(text) => { this.setState({password:text})} }
                    />
                    <BotaoInicio onPress={() => {this.submit()}} styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Entrar</BotaoInicio>
                    <Text onPress={() => this.props.navigation.navigate('recuperacaoLink')} style={patternStyle.texto}>Esqueceu a senha?</Text>
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
                    <Text onPress={() => this.props.navigation.navigate('cadastro')} style={patternStyle.texto}>Crie uma nova conta</Text>
                </View>
                <View style={patternStyle.rodapeLogin}>
                    <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                </View>
            </View>
        );
    }
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