import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { View, Text, StyleSheet, TextInput, Pressable, Keyboard, KeyboardAvoidingView, ScrollView, Alert, TouchableWithoutFeedback } from 'react-native'

import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';



import patternStyle from '../constantes/style';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { INSERT_SIMULATION_URL } from '../store/api-urls';

import { formatDatetime, getTodayDate } from '../utils/date-utils';
import { TextInputMask } from 'react-native-masked-text';
import { simulationSchema } from '../store/schemas/simulation-schema';

// diferente de cadastro
import { RadioButton } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '../componentes/Header';
import * as SecureStore from 'expo-secure-store';




export default function TelaSimulador() {

    const dataHoje = getTodayDate();

    let ano = dataHoje.split('-')[0];
    let mes = dataHoje.split('-')[1];

    const [simulacaoFeita, setsimulacaoFeita] = useState([]); // getter / "setter"

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(simulationSchema)
    })

    function Simular(data) {
        console.log('data')
        console.log(data);

        const dataInicial = getTodayDate();
        console.log('dataInicial')
        console.log(dataInicial)

        data.dataInicialSimulacao = dataInicial.toString();

        //let dataFinalSimulacao = new Date(data.dataFinalSimulacao).toLocaleString(); //TODO -> PEGAR ESSA PORRA DE DATA, SEPARAR CERTINHO E SALVAR ELA. TOLOCALEDATESTRING NÃO TÁ FUNCIONANDO SEI LA PQ

        let dataFinalSimulacao = formatDatetime(data.dataFinalSimulacao);
        console.log('dataFinalSimulacao 1')
        console.log(dataFinalSimulacao)

        dataFinalSimulacao = dataFinalSimulacao.split('-')
        dataFinalSimulacao[2] = dataFinalSimulacao[2].replace(' 00:00:00', '');
        console.log('dataFinalSimulacao 2')
        console.log(dataFinalSimulacao)
        const ano = dataFinalSimulacao[0];
        const mes = dataFinalSimulacao[1];
        const dia = dataFinalSimulacao[2];


        dataFinalSimulacao = `${ano}-${mes}-${dia}`;
        console.log('dataFinalSimulacao 3')
        console.log(dataFinalSimulacao)

        let dataInicialSimulacao = data.dataInicialSimulacao;

        SecureStore.setItemAsync("dataInicialSimulacao", dataInicial.toString());
        SecureStore.setItemAsync("dataFinalSimulacao", dataFinalSimulacao);
        SecureStore.setItemAsync("valorInicialSimulacao", data.valorInicialSimulacao.toString());
        //SecureStore.setItemAsync("descricaoSimulacao", data.descricaoSimulacao.toString());

        console.log(Number(data.taxaCorretagemSimulacao));
        console.log(Number(data.valorInicialSimulacao));

        // const response = await axios.post(INSERT_SIMULATION_URL, data);
        // console.log(response.data);

        var dataF = new Date(dataFinalSimulacao);
        var dataI = new Date(dataInicialSimulacao);

        var total = (dataF.getFullYear() - dataI.getFullYear()) * 12 + (dataF.getMonth() - dataI.getMonth());

        const porCento = 1 + data.taxaCorretagemSimulacao / 100;
        const jurosTotal = Math.pow(porCento, total);

        const lucroSimulado = data.valorInicialSimulacao * jurosTotal;
        const lucro = lucroSimulado - data.valorInicialSimulacao;

        let simulacaoFeitaHTML = []
        simulacaoFeitaHTML.push(
            <View style={{ flex: 1 }} key="0">
                <View style={styles.viewAdjacente} key="1">
                    <Text style={styles.textoPequeno}> O valor investido foi de R$ {data.valorInicialSimulacao.toFixed(2)}</Text>
                </View>
                <View style={styles.viewAdjacente} key="2">
                    <Text style={styles.textoPequeno}> O dinheiro ficará investido por {total} meses</Text>
                </View>
                <View style={styles.viewAdjacente} key="3">
                    <Text style={styles.textoPequeno}> Com a taxa de corretagem de {data.taxaCorretagemSimulacao}% ao mês, você lucraria R$ {lucro.toFixed(2)} ao fim dos {total} meses!</Text>
                </View>
                <View style={styles.viewAdjacente} key="4">
                    <Text style={styles.textoPequeno}> O seu dinheiro final será de R$ {lucroSimulado.toFixed(2)}</Text>
                </View>
                <View style={styles.viewAdjacente} key="5">
                    <Text style={styles.textoPequeno}> Se você desejar salvar a simulação, coloque um nome para ela e salve-a! Ela aparecerá na aba "investimentos"</Text>
                </View>
                <View style={styles.viewAdjacente} key="6">
                    <Controller
                        control={control}
                        name="descricaoSimulacao"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={patternStyle.input}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Nome da Simulação a ser Salva"
                                maxLength={200}
                            />
                        )}
                    />
                    {errors.descricaoSimulacao && <Text style={patternStyle.labelError}>{errors.descricaoSimulacao?.message}</Text>}
                </View>
                <View style={{ alignContent: 'center' }} key="7">
                    <BotaoInicio
                        onPress={handleSubmit(criarSimulacao)}
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={patternStyle.botaoInterno}
                        styleTexto={patternStyle.textoBotao}>
                        Salvar Simulação
                    </BotaoInicio>
                </View>
            </View>
        );

        Alert.alert("Simulação realizada")
        setsimulacaoFeita(simulacaoFeitaHTML)
    }

    async function criarSimulacao(data) {
        console.log('criarSimulacao')

        data.dataFinalSimulacao = await SecureStore.getItemAsync("dataFinalSimulacao");
        data.dataInicialSimulacao = await SecureStore.getItemAsync("dataInicialSimulacao");
        data.idUsuario = await SecureStore.getItemAsync("id");
        data.valorInicialSimulacao = await SecureStore.getItemAsync("valorInicialSimulacao");

        const response = await axios.post(INSERT_SIMULATION_URL, data);
        console.log(response.data);

    }
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Criar uma nova simulação
                    </Text>
                </View>
                <View style={styles.viewAdjacente}>
                    <Controller
                        name='dataFinalSimulacao'
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputMask
                                style={patternStyle.input}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Data final da simulação"
                                maxLength={15}
                                type='datetime'
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                            />
                        )}
                    />
                    {errors.dataFinalSimulacao && <Text style={patternStyle.labelError}>{errors.dataFinalSimulacao?.message}</Text>}
                </View>
                <View style={styles.viewAdjacente}>
                    <Controller
                        name="valorInicialSimulacao"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInputMask
                                style={patternStyle.input}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Valor a ser Investido (R$)"
                                type='money'
                                options={{
                                    unit: '',
                                    separator: '.'
                                }}
                            />
                        )}
                    />
                    {errors.valorInicialSimulacao && <Text style={patternStyle.labelError}>{errors.valorInicialSimulacao?.message}</Text>}
                </View>
                <View style={styles.viewAdjacente}>
                    <Controller
                        name='taxaCorretagemSimulacao'
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={patternStyle.input}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Corretagem mensal (%)"
                                keyboardType='numeric'
                            />
                        )}
                    />
                    {errors.taxaCorretagemSimulacao && <Text style={patternStyle.labelError}>{errors.taxaCorretagemSimulacao?.message}</Text>}
                </View>

                <View style={{ alignContent: 'center' }}>

                    <BotaoInicio
                        onPress={handleSubmit(Simular)}
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={patternStyle.botaoInterno}
                        styleTexto={patternStyle.textoBotao}>
                        Simular!
                    </BotaoInicio>

                </View>
                {simulacaoFeita}
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    alertaBox: {
        width: '92%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 12,
        paddingVertical: 20,
        elevation: 5
    },
    viewGrafico: {
        backgroundColor: '#e3e1e1',
        height: 260,
        width: '100%',
        alignContent: 'center',
    },
    textoGrafico: {
        color: '#c0c0c0',
        fontSize: 30,
        fontFamily: 'roboto-italic',
        textAlign: 'center',
        marginTop: 110
    },
    boxTitle: {
        marginTop: 30,
        marginHorizontal: 10,
        marginBottom: 15,
        marginLeft: 20
    },
    textoPequeno: {
        fontSize: 14,
        color: Colors.preto,
    },
    textTitle: {
        fontSize: 23,
        color: Colors.preto,
        letterSpacing: 1.8,
        fontFamily: 'roboto-bold',
    },
    botaoExterno: {
        width: '40%',
    },
    botaoInterno: {
        backgroundColor: Colors.verdeSecundario,
        paddingVertical: 10
    },
    xButton: {
        height: 50,
        width: 40,
        marginRight: 6,
        color: Colors.branco,
        fontSize: 35,
        fontFamily: 'Nunito-SemiBold',
    },
    botaoAlerta: {
        borderRadius: 30,
        backgroundColor: Colors.branco,
        width: 200,
        height: 40,
        marginTop: 12,
        padding: 7
    },
    txtBotaoAlerta: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        textAlign: 'center'
    },
    viewAdjacente: {
        marginHorizontal: 12
    }
})