import { View, Image, TextInput, StyleSheet, Text, } from 'react-native';
import axios from 'axios';
import api from "../services/api";

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';
import React from 'react';
import * as SecureStore from 'expo-secure-store';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../store/schemas/forgot-password-schema';
import { UPDATE_PASSWORD_USER_URL } from "../store/api-urls";

function TelaAlterarSenha() {
    //Formulário de Alteração de Senha
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordSchema)
    })

    async function alterarSenha(data) {
        try {
            delete data.confirmarSenha;

            data.emailUsuario = await SecureStore.getItemAsync("email");
            // const response1 = await axios.pull(LOOK_FOR_EMAIL_URL, sus);
            // console.log(response1.data.idUsuario);

            console.log(data);

            console.log(data.emailUsuario)

            const response = await axios.put(UPDATE_PASSWORD_USER_URL, data);
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
                <Controller
                    name='senhaUsuario'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[patternStyle.input, { width: '90%' }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Senha"
                            maxLength={50}
                            secureTextEntry={true}
                        />
                    )}
                />
                {errors.senhaUsuario && <Text style={patternStyle.labelError}>{errors.senhaUsuario?.message}</Text>}
                <Controller
                    name='confirmarSenha'
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={[patternStyle.input, { width: '90%' }]}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder="Confirmar Senha"
                            maxLength={50}
                            secureTextEntry={true}
                        />
                    )}
                />
                {errors.confirmarSenha && <Text style={patternStyle.labelError}>{errors.confirmarSenha?.message}</Text>}
                <BotaoInicio
                    styleExterno={patternStyle.botaoExterno}
                    styleCorpo={patternStyle.botaoInterno}
                    styleTexto={patternStyle.textoBotao}
                    onPress={handleSubmit(alterarSenha)}>
                    Alterar Senha
                </BotaoInicio>
            </View>
            <View style={[patternStyle.rodapeLogin, { marginTop: 360 }]}>
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

export default TelaAlterarSenha;