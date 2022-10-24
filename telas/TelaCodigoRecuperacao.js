import { View, Image, TextInput, Text, StyleSheet, Keyboard } from 'react-native';
import React from 'react';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function TelaCodigoRecuperacao({navigation}) {
    //Funções de abertura de telas
    function abreLogin(){
        navigation.navigate('login');
    }
    function abreCadastro(){
        navigation.navigate('cadastro');
    }
    function abreMudarSenha(){
        navigation.navigate('mudarSenha');
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
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        maxLength={6}
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='ex: 123456'
                    />
                </View>
                <BotaoInicio 
                    onPress={abreMudarSenha}
                    styleExterno={patternStyle.botaoExterno} 
                    styleCorpo={patternStyle.botaoInterno} 
                    styleTexto={patternStyle.textoBotao}>
                        Inserir Código
                </BotaoInicio>
                <Text style={patternStyle.texto}>Insira o código enviado pelo método de recuperação
                    selecionado para recuperar sua conta </Text>
            </View>
            <View style={patternStyle.caixaTexto}>
                <Text onPress={abreCadastro} style={patternStyle.texto}>Criar uma nova conta ou
                    <Text onPress={abreLogin} style={patternStyle.texto}> Conectar-se</Text>
                </Text>
            </View>
            <View style={[patternStyle.rodapeLogin, {marginTop: 190}]}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaCodigoRecuperacao;

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: '60%',
        fontSize: 18,
        letterSpacing: 6, 
        color: Colors.preto,
        marginVertical: 10,
        textAlign: 'center',
        borderRadius: 40,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30
    },
})