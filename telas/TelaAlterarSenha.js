import { View, Image, TextInput, StyleSheet, Text, } from 'react-native';
import axios from 'axios';
import api from "../services/api";

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../store/schemas/forgot-password-schema';
import { UPDATE_USER_URL } from "../store/api-urls";

function TelaAlterarSenha() {
    //Formulário de Alteração de Senha
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(resetPasswordSchema)
    })

    async function alterarSenha(data) {
        try {
            delete data.confirmarSenha;
            data.idUsuario = 1
            data.statusUsuario = 0
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