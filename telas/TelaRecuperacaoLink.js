import React from 'react';
import { View, Image, TextInput, Text, Pressable } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';

function TelaRecuperacaoLink({navigation}) {
    //Funções para a abertura de telas
    function abreInicio(){
        navigation.navigate('inicio');
    }
    function abreCadastro(){
        navigation.navigate('cadastro');
    }
    function abreLogin(){
        navigation.navigate('login');
    }
    function abreCodigo(){
        navigation.navigate('recuperacaoCodigo');
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={patternStyle.rootContainer}>
                <Pressable onPress={abreInicio}>
                    <View style={patternStyle.caixaLogo}>
                        <Image
                            style={patternStyle.image}
                            source={require('../assets/images/logo_preto.png')}
                        />
                    </View>
                </Pressable>
                <View style={patternStyle.inputContainer}>
                    <TextInput
                        style={patternStyle.input}
                        maxLength={50}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='Email'
                    />
                    <BotaoInicio 
                    onPress={abreCodigo}
                    styleExterno={patternStyle.botaoExterno} 
                    styleCorpo={patternStyle.botaoInterno} 
                    styleTexto={patternStyle.textoBotao}>
                        Enviar Link de Recuperação
                    </BotaoInicio>
                    <Text style={patternStyle.texto}>Verifique seu email e acesse o link enviado para recuperar sua conta </Text>
                </View>
                <View style={patternStyle.caixaTexto}>
                    <Text onPress={abreCadastro} style={patternStyle.texto}>Criar uma nova conta ou
                        <Text onPress={abreLogin} style={patternStyle.texto}> Conectar-se</Text>
                    </Text>
                </View>
                <View style={[patternStyle.rodapeLogin, {marginTop: 275}]}>
                    <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                </View>
            </View>
        </View>
    );
}


export default TelaRecuperacaoLink;
