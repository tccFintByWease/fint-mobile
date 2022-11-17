import { View, Image, TextInput, StyleSheet, Text, } from 'react-native';
import axios from 'axios';
import api from "../services/api";

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import { useForm, Controller } from 'react-hook-form';
import Colors from '../constantes/colors';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../store/schemas/forgot-password-schema';
import { UPDATE_STATUS_USER_URL } from "../store/api-urls";
import React from 'react';
import InputSenha from '../componentes/InputSenha'


function TelaExcluirConta() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordSchema)
    })
    async function excluirConta(data) {
        try {
            delete data.confirmarSenha;
            data.idUsuario = await SecureStore.getItemAsync("id");
            data.statusUsuario = 'Inativo'

            //chamado um por email
            //

            console.log(data);

            const response = await axios.put(UPDATE_STATUS_USER_URL, data);
            console.log(response.data)
            console.log(response)

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
                <Controller
                    name='senhaUsuario'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputSenha 
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder='Senha'
                        />
                    )}
                />
                {errors.senhaUsuario && <Text style={patternStyle.labelError}>{errors.senhaUsuario?.message}</Text>}
                <Controller
                    name='confirmarSenha'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputSenha 
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder='Confirmar Senha'
                        />
                    )}
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