import { View, Image, TextInput, StyleSheet, Pressable, } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';
import React from 'react';
import InputSenha from '../componentes/InputSenha';


function TelaExcluirConta() {

    async function excluirConta(data) {
        try {
            delete data.confirmarSenha;
            data.idUsuario = 1
            data.statusUsuario = 1
            data.idMoeda = 1
            data.foneUsuario = "(79)2131-7210"
            data.nomeUsuario = "João Gilberto"
            data.emailUsuario = "joaog@gmail.com"
            data.cpfUsuario = "683.342.360-10"
            data.dataNascUsuario = "1990-01-01 00:00:00"
            data.dataCadastroUsuario = "2022-01-01 00:00:00"

            //chamado um por email
            //


            console.log(data);

            const response = await axios.put(UPDATE_USER_URL, data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
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
                <InputSenha
                    placeholder="Senha"
                    onChangeText={(text) => { this.setState({ password: text }) }}
                />
                <InputSenha
                    placeholder="Confirma Senha"
                    onChangeText={(text) => { this.setState({ password: text }) }}
                />
                <BotaoInicio
                    onPress={handleSubmit(excluirConta)}
                    styleExterno={patternStyle.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Excluir Conta</BotaoInicio>
            </View>
            <View style={patternStyle.rodapeLogin}>
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
    },
    botaoInterno: {
        backgroundColor: Colors.vermelhoGoogle,
        paddingVertical: 10
    },
})

export default TelaExcluirConta;