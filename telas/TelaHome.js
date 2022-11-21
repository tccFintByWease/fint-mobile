import { View, Text, StyleSheet, SafeAreaView, TextInput, Pressable, Keyboard, KeyboardAvoidingView, ScrollView, Alert, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Ionicons from '@expo/vector-icons/Ionicons';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import CaixaMovimentacao from '../componentes/CaixaMovimentacao';
import CardHome from '../componentes/CardHome';
import BottomTabNavigator from '../componentes/Navegadores/BottomTabNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GET_SIMULATION_URL } from '../store/api-urls';
import { GET_REVENUES_URL } from '../store/api-urls';
import { GET_EXPENSES_URL } from '../store/api-urls';
import * as SecureStore from 'expo-secure-store';
import { formatDatetime, formatDate, getTodayDate } from '../utils/date-utils';


function TelaHome({ navigation }) {


    const dataHoje = getTodayDate();

    let ano = dataHoje.split('-')[0];
    console.log(typeof ano);
    let mes = dataHoje.split('-')[1];

    const dataInicial = ano + '-' + mes + '-' + '01';
    console.log(dataInicial);

    mes++;

    if (mes > 12) {
        ano++;
        mes = '01';
    }

    const dataFinal = ano + '-' + mes + '-' + '01';

    console.log(dataFinal)


    const [resultsInvestimentos, setResultsInvestimentos] = useState([]); // getter / "setter"
    const [resultsReceita, setResultsReceita] = useState([]); // getter / "setter"
    const [resultsDespesa, setResultsDespesa] = useState([]); // getter / "setter"



    async function BuscarReceitas(data) {
        console.log('---------------------')
        try {
            console.log(data)
            data.idUsuario = await SecureStore.getItemAsync('id');

            const responseReceita = await axios.post(GET_REVENUES_URL, data);  // pega os dados do servidor

            console.log(responseReceita.data)

            mes--;

            let resultsReceitaHTML = [];

            if (responseReceita.data.result.length >= 1) {
                console.log('entrou')

                resultsReceitaHTML.push(
                    <CaixaMovimentacao key={[0]} dataMov={responseReceita.data.result[0].dataMovimentacao} descMov={responseReceita.data.result[0].descricaoMovimentacao} valor={responseReceita.data.result[0].valorMovimentacao} maisMenos={'+'}></CaixaMovimentacao>
                );

            } else {
                // talvez trocar o layout daqui.
                resultsReceitaHTML.push(
                    <View key="-1">
                        <View style={styles.boxTitle} >
                            <Text style={styles.textoPequeno}>
                                Nenhuma receita registrada esse mês.
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingVertical: 10,
                            borderColor: Colors.preto,
                            borderBottomWidth: 1
                        }} key='0'>
                            <BotaoInicio onPress={abrirCG} styleExterno={{ width: '50%' }} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Registrar uma </BotaoInicio>
                        </View>
                    </View>
                )
            }

            setResultsReceita(resultsReceitaHTML);
        }
        catch (error) {
            console.log(error)
        }
    }

    async function BuscarDespesas(data) {
        console.log('---------------------')
        try {
            console.log(data)
            data.idUsuario = await SecureStore.getItemAsync('id');
            console.log(data.idUsuario)

            const responseDespesa = await axios.post(GET_EXPENSES_URL, data);  // pega os dados do servidor

            console.log(responseDespesa.data)

            mes--;

            let resultsDespesaHTML = [];

            if (responseDespesa.data.result.length >= 1 && responseDespesa.data.result.dataFinal !== null) {
                console.log('entrou')


                resultsDespesaHTML.push(
                    <CaixaMovimentacao key={[0]} dataMov={responseDespesa.data.result[0].dataMovimentacao} descMov={responseDespesa.data.result[0].descricaoMovimentacao} valor={responseDespesa.data.result[0].valorMovimentacao} maisMenos={'-'}></CaixaMovimentacao>
                );


            } else {
                // talvez trocar o layout daqui.
                resultsDespesaHTML.push(
                    <View key="-1">

                        <View style={styles.boxTitle} >
                            <Text style={styles.textoPequeno}>
                                Nenhuma despesa registrada esse mês.
                            </Text>
                        </View>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            paddingVertical: 10,
                            borderColor: Colors.preto,
                            borderBottomWidth: 1
                        }} key='0'>
                            <BotaoInicio onPress={abrirCG} styleExterno={{ width: '50%' }} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Registrar uma </BotaoInicio>
                        </View>
                    </View>
                )
            }
            setResultsDespesa(resultsDespesaHTML);
        }
        catch (error) {
            console.log(error)
        }
    }

    async function BuscarInvestimentos() {
        console.log('---------------------')
        try {
            let data = new Object();
            let idUsuarioString = await SecureStore.getItemAsync('id');
            data.idUsuario = Number(idUsuarioString);

            const responseInvestimentos = await axios.post(GET_SIMULATION_URL, data);  // pega os dados do servidor

            console.log(responseInvestimentos.data)

            let resultsInvestimentosHTML = [];

            if (responseInvestimentos.data.result.length >= 1 && responseInvestimentos.data.result[0].dataFinalSimulacao !== null) {
                console.log('entrou')


                let dateI = formatDate(responseInvestimentos.data.result[0].dataInicialSimulacao);
                let dateF = formatDate(responseInvestimentos.data.result[0].dataFinalSimulacao);

                console.log(responseInvestimentos.data.result[0].idSimulacao)

                let dateIsplitYMD = dateI.split('-');
                let dateFsplitYMD = dateF.split('-');

                let meses = (dateFsplitYMD[0] - dateIsplitYMD[0]) * 12 + (dateFsplitYMD[1] - dateIsplitYMD[1]);
                let porCento = 1 + responseInvestimentos.data.result[0].taxaCorretagemSimulacao / 100;
                let jurosTotal = Math.pow(porCento, meses);
                let montante = responseInvestimentos.data.result[0].valorInicialSimulacao * jurosTotal;
                let lucro = montante - responseInvestimentos.data.result[0].valorInicialSimulacao;

                resultsInvestimentosHTML.push(
                    <CaixaInvestimento key={[responseInvestimentos.data.result[0].idSimulacao]}
                        tempo={meses}
                        texto={responseInvestimentos.data.result[0].descricaoSimulacao}
                        valorI={responseInvestimentos.data.result[0].valorInicialSimulacao}
                        lucro={lucro.toFixed(2)}
                        idSimulacao={responseInvestimentos.data.result[0].idSimulacao}
                        valorF={montante.toFixed(2)}>
                    </CaixaInvestimento>
                );


            } else {
                // talvez trocar o layout daqui.
                resultsInvestimentosHTML.push(
                    <View key="-1">
                        <View style={styles.boxTitle} >
                            <Text style={styles.textoPequeno}>
                                Nenhum resultado encontrado
                            </Text>
                        </View>

                    </View>
                )
            }

            setResultsInvestimentos(resultsInvestimentosHTML);
        }
        catch (error) {
            console.log(error)
        }
    }
    async function Reset() {
        let data = new Object();

        data.dataInicial = dataInicial + 'T03:00:00.000Z';
        data.dataFinal = dataFinal + 'T03:00:00.000Z';

        BuscarReceitas(data);
        BuscarDespesas(data);
        BuscarInvestimentos();
        //BuscarDespesas(data);
    }
    useEffect(() => {
        let data = new Object();

        data.dataInicial = dataInicial + 'T03:00:00.000Z';
        data.dataFinal = dataFinal + 'T03:00:00.000Z';

        BuscarReceitas(data);
        BuscarDespesas(data);
        BuscarInvestimentos();
        //BuscarDespesas(data);
    }, [])





    function abrirPerfil() {
        navigation.navigate('perfil');
    }
    function abrirSimulador() {
        navigation.navigate('simulador');
    }
    function abrirInvestimentos() {
        navigation.navigate('investimentos');
    }
    function abrirCG() {
        navigation.navigate('gastos')
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header perfil={abrirPerfil} />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 5 }}>
                    <Text style={styles.textTitle}>
                        Investimento mais antigo:
                    </Text>
                </View>
                <View >
                    {resultsInvestimentos}
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>

                    </View>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Receita mais recente desse mês:
                    </Text>
                </View>
                <View >
                    {resultsReceita}


                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Despesa mais recente desse mês:
                    </Text>
                </View>
                <View >
                    {resultsDespesa}
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingVertical: 10,
                    borderColor: Colors.preto,
                    borderBottomWidth: 1
                }}>
                    <BotaoInicio onPress={Reset} styleExterno={styles.botaoExterno} styleCorpo={styles.botaoReset} styleTexto={patternStyle.textoBotao}>Reset</BotaoInicio>
                </View>
            </ScrollView >
        </SafeAreaView >
    );
}

export default TelaHome;

const styles = StyleSheet.create({
    xButton: {
        margin: 10,
        color: Colors.branco,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
    },
    botaoAlerta: {
        width: '40%',
        borderRadius: 30,
        backgroundColor: Colors.branco,
        paddingVertical: 10,
        marginTop: 15,
        backgroundColor: Colors.verdeSecundario,
    },
    txtBotaoAlerta: {
        fontFamily: 'roboto-bold',
        fontSize: 15,
        color: Colors.branco,
        textAlign: 'center'
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
        marginTop: 40,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    textTitle: {
        fontSize: 23,
        color: Colors.preto,
        letterSpacing: 1.8,
        fontFamily: 'roboto-bold',
    },
    botaoExterno: {
        width: '40%',
        marginHorizontal: 10
    },
    botaoInterno: {
        backgroundColor: Colors.verdePrincipal,
    },
    textoPequeno: {
        color: Colors.cinzaContorno,
        fontSize: 16,
        marginTop: 2,
        marginLeft: 20,
        letterSpacing: 1.2,
        fontFamily: 'roboto-regular',
    },
    botaoReset: {
        backgroundColor: Colors.verdeSecundario,
    },
})