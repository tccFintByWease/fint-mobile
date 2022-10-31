import { View, Image, TextInput, Text, StyleSheet, Keyboard } from 'react-native';
import React from 'react';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'; 
import * as yup from 'yup';

//Validações
const schema = yup.object({
    codigoRecuperacao: yup.number().min(6, "O código de conter no mínimo 6 dígitos")
})

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

    //Formulário
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function enviarCodigo(data){
        console.log(data); 
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
                    <Controller 
                        name='codigoRecuperacao'
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput 
                                style={[patternStyle.input, {letterSpacing: 6, textAlign: 'center', width: '50%'}]}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="123456"
                                maxLength={6}
                                keyboardType='number-pad'
                            />  
                        )}
                    />
                    {errors.codigoRecuperacao && <Text style={patternStyle.labelError}>{errors.codigoRecuperacao?.message}</Text>}
                </View>
                <BotaoInicio 
                    onPress={handleSubmit(enviarCodigo)}
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
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30
    },
})