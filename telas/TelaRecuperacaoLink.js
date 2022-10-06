import { View, Image, TextInput, Text, ScrollView } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import React from 'react';

function TelaRecuperacaoLink() {
    return (
        <View style={{ flex: 1 }}>
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
                    <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Enviar Link de Recuperação</BotaoInicio>
                    <Text style={patternStyle.texto}>Verifique seu email e acesse o link enviado para recuperar sua conta </Text>
                </View>
                <View style={patternStyle.caixaTexto}>
                    <Text onPress={() => this.props.navigation.navigate('cadastro')} style={patternStyle.texto}>Criar uma nova conta ou
                        <Text onPress={() => this.props.navigation.navigate('login')} style={patternStyle.texto}> Conectar-se</Text>
                    </Text>
                </View>
                <View style={patternStyle.rodapeLogin}>
                    <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                </View>
            </View>
        </View>
    );
}


export default TelaRecuperacaoLink;
