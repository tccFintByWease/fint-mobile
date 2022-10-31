import { View, Image, TextInput, StyleSheet, Pressable, Text } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'; 
import * as yup from 'yup';

//Validações
const schema = yup.object({
    pin: yup.number().min(4, "O pin deve conter 4 dígitos").required("Informe o pin"),
})

function TelaSenhaLogin() {
    function olhoReceiver() {
        console.log('olho')
    }
    function loginReceiver() {
        console.log('login')
    }
    function senhaReceiver() {
        console.log('senha')
    }

    //Formulário de pin
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    function enviarPin(data){
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
                <View style={styles.textoBox}>
                    <Text style={styles.text}>
                        Insira o pin para acessar o
                        aplicativo.
                    </Text>
                </View>
                <View style={styles.inputButton}>
                    <Controller 
                        name='pin'
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput
                                style={[patternStyle.input, {letterSpacing: 5, width: '50%', textAlign: 'center'}]}
                                maxLength={4}
                                keyboardType='number-pad'
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder='Pin'
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            /> 
                        )}
                    />
                    {errors.pin && <Text style={patternStyle.labelError}>{errors.pin?.message}</Text>}
                </View>
                <Text style={styles.texto}>É possível desativar a camada de proteção há qualquer
                    momento nas configurações do aplicativo. </Text>
                <BotaoInicio onPress={loginReceiver} styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Entrar</BotaoInicio>
                <Pressable onPress={senhaReceiver}>
                    <Text style={styles.texto}>Esqueceu a senha?</Text>
                </Pressable>
            </View>
            <View style={[patternStyle.rodapeLogin, {marginTop: 150}]}>
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
    textoBox: {
        width: '70%',
        marginTop: 16,
        paddingBottom: 30
    },
    texto: {
        textAlign: 'center',
        width: '90%',
        color: Colors.cinzaContorno,
        fontSize: 15,
        marginTop: 10,
        marginBottom: 30
    },
    text: {
        fontSize: 22,
        color: Colors.preto,
        textAlign: 'center',

    },
    inputButton: {
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
    }
})

export default TelaSenhaLogin;