import { View, Image, TextInput, StyleSheet, Pressable, } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import InputSenha from '../componentes/formulario/InputSenha';
import Colors from '../constantes/colors';
import React from 'react';

function TelaMudarSenha() {
    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={patternStyle.inputContainer}>
                <InputSenha
                    placeholder="Senha"
                />
                <InputSenha
                    placeholder="Confirma Senha"
                />
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Alterar Senha</BotaoInicio>
            </View>
            <View style={[patternStyle.rodapeLogin, {marginTop: 375}]}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 18,
        color: Colors.preto,
        textAlign: 'left',
        marginLeft: 10,
        paddingHorizontal: 10,
    },
    inputButton: {
        marginVertical: 5,
        borderRadius: 30,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
    }
})

export default TelaMudarSenha;