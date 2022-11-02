import React from 'react';
import { View, Image, TextInput, Text, Pressable } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'; 
import {forgotPasswordSchema} from '../store/schemas/forgot-password-schema'

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

    //Formulário de email
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(forgotPasswordSchema)
    })

    function enviarEmail(data){
        console.log(data); 
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
                    <View style={{width: '90%'}}>
                        <Controller 
                            name='emailUsuario'
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput 
                                style={patternStyle.input}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Insira seu email"
                                maxLength={100}
                                />  
                            )}
                        />
                        {errors.emailUsuario && <Text style={patternStyle.labelError}>{errors.emailUsuario?.message}</Text>}
                    </View>
                    <BotaoInicio 
                    onPress={handleSubmit(enviarEmail)}
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
