import { View, Image, TextInput, Text, StyleSheet } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import Colors from '../constantes/colors';
import patternStyle from '../constantes/style';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'; 
import {startingValueSchema} from '../store/schemas/sign-up-schemas';
import SelectList from 'react-native-dropdown-select-list';

//Validações


function TelaDinheiroMoeda({ navigation }) {
    //Funções de abertura de tela
    function abreHome() {
        navigation.navigate('home');
    }

    //Formulário de Quantia inicial
    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(startingValueSchema)
    })

    async function inserirValor(data){
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Dropdown de moedas
    const [selected, setSelected] = useState("");

    const moedas = [
        {key: '1', value: 'BRL'},
        {key: '2', value: 'EUR'},
        {key: '3', value: 'USD'},
        {key: '4', value: 'JPY'},
        {key: '5', value: 'KRW'},
        {key: '6', value: 'INR'},
        {key: '7', value: 'GBP'},
        {key: '8', value: 'CAD'},
        {key: '9', value: 'CNY'},
        {key: '10', value: 'NZD'}
    ];

    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={styles.textoBox}>
                <Text style={styles.texto}>
                    Cadastre seu saldo inicial e sua
                    moeda padrão.
                </Text>
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={styles.dropText}>
                    <View style={[styles.caixinha, {flex: 1}]}>
                        <SelectList 
                            data={moedas}
                            setSelected={setSelected}
                            boxStyles={{width: '70%'}}
                            placeholder=""
                        />
                    </View>
                    <View style={[styles.caixinha, {flex: 1}]}>
                        <Controller 
                            name='valorInicial'
                            control={control}
                            render={({field: {onChange, onBlur, value}}) => (
                                <TextInput 
                                    style={[patternStyle.input, {fontSize: 14}]}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Valor Inicial"
                                    maxLength={10}
                                    keyboardType='numeric'
                                />  
                            )}
                        />
                        {errors.valorInicial && <Text style={patternStyle.labelError}>{errors.valorInicial?.message}</Text>}
                    </View>
                </View>
                <Text style={styles.texto2}>Essas informações poderão ser alteradas há qualquer
                    momento nas configurações do aplicativo. </Text>
                <BotaoInicio
                    styleExterno={[patternStyle.botaoExterno, styles.botao]}
                    styleCorpo={patternStyle.botaoInterno}
                    styleTexto={patternStyle.textoBotao}
                    onPress={handleSubmit(inserirValor)}>
                    Confirmar
                </BotaoInicio>
            </View>
            <View style={[patternStyle.rodapeLogin, { marginTop: 105 }]}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaDinheiroMoeda;

const styles = StyleSheet.create({
    dropText: {
        flexDirection: 'row',
        textAlign: 'center',
        marginBottom: 40,
        display: 'flex',
        width: '80%'
    },
    sus: {
        width: '90%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        fontSize: 18,
        color: Colors.preto,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    texto2: {
        color: Colors.cinzaContorno,
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'center',
        width: '90%',
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.preto,
        width: '90%'
    },
    textoBox: {
        width: '90%',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20
    },
    caixinha: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    botao: {
        marginTop: 25,
    }
})
