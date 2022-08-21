import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import Colors from "../constantes/colors";
import patternStyle from '../constantes/style';
import InputSenha from "../componentes/InputSenha";

function TelaLogin({navigation}) {
    //Texto 'Esqueceu a senha?'
    function buttonHandler1(){
        navigation.navigate('linkRecuperacao');
    }

    //Texto 'Criar uma nova conta'
    function buttonHandler2(){
        navigation.navigate('cadastro');
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
                <InputSenha placeholder="Senha"/>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Entrar</BotaoInicio>
                <Text onPress={buttonHandler1} style={patternStyle.texto}>Esqueceu a senha?</Text>
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
                <Text onPress={buttonHandler2} style={patternStyle.texto}>Crie uma nova conta</Text>
            </View>
            <View style={patternStyle.rodapeLogin}>
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