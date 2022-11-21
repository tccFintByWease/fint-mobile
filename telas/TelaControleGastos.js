import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import BotaoInicio from '../componentes/BotaoInicio';
import Ionicons from '@expo/vector-icons/Ionicons';
import CaixaMovimentacao from '../componentes/CaixaMovimentacao';
import { GET_REVENUES_URL } from '../store/api-urls';
import { GET_EXPENSES_URL } from '../store/api-urls';
import { getTodayDate } from '../utils/date-utils';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

function TelaControleGastos({ navigation }) {


    let [receitaMensal, setReceitaMensal] = useState([]); // getter / "setter"
    let [despesaMensal, setDespesaMensal] = useState([]); // getter / "setter"

    const [selecionado, setSelecionado] = useState(true);

    const [resultsReceita, setResultsReceita] = useState([]); // getter / "setter"
    const [resultsDespesa, setResultsDespesa] = useState([]); // getter / "setter"

    function abrirDetalhesMovimentacao() {
        navigation.navigate('detalhesMovimentacao')
    }
    function abrirCadastroMovimentacao() {
        navigation.navigate('cadastroMovimentacao')
    }

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

    async function BuscarReceitas(data) {
        console.log('---------------------')
        try {
            console.log(data)
            data.idUsuario = await SecureStore.getItemAsync('id');

            const responseReceita = await axios.post(GET_REVENUES_URL, data);  // pega os dados do servidor

            console.log(responseReceita.data)

            mes--;

            receitaMensal = 0;

            let resultsReceitaHTML = [];

            if (responseReceita.data.result.length >= 1) {
                console.log('entrou')

                for (var i = 0; i < responseReceita.data.result.length; i++) {

                    receitaMensal = receitaMensal + Number(responseReceita.data.result[i].valorMovimentacao);

                    resultsReceitaHTML.push(
                        <CaixaMovimentacao key={[i]} dataMov={responseReceita.data.result[i].dataMovimentacao} descMov={responseReceita.data.result[i].descricaoMovimentacao} valor={responseReceita.data.result[i].valorMovimentacao} maisMenos={'+'}></CaixaMovimentacao>
                    );
                }

            } else {
                // talvez trocar o layout daqui.
                resultsReceitaHTML.push(
                    <View style={styles.boxTitle} key="-1">
                        <Text style={styles.textTitle}>
                            Nenhum resultado encontrado
                        </Text>
                    </View>
                )
            }

            setResultsReceita(resultsReceitaHTML);
            setReceitaMensal(receitaMensal);

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

            despesaMensal = 0;

            mes--;

            let resultsDespesaHTML = [];

            if (responseDespesa.data.result.length >= 1 && responseDespesa.data.result.dataFinal !== null) {
                console.log('entrou')



                for (var i = 0; i < responseDespesa.data.result.length; i++) {

                    despesaMensal = despesaMensal + Number(responseDespesa.data.result[i].valorMovimentacao);

                    resultsDespesaHTML.push(
                        <CaixaMovimentacao key={[i]} descMov={responseDespesa.data.result[i].descricaoMovimentacao} valor={responseDespesa.data.result[i].valorMovimentacao} maisMenos={'-'}></CaixaMovimentacao>
                    );
                }

            } else {
                // talvez trocar o layout daqui.
                resultsDespesaHTML.push(
                    <View style={styles.boxTitle} key="-1">
                        <Text style={styles.textTitle}>
                            Nenhum resultado encontrado
                        </Text>
                    </View>
                )
            }
            setResultsDespesa(resultsDespesaHTML);
            setDespesaMensal(despesaMensal);
        }
        catch (error) {
            console.log(error)
        }
    }

    async function Reset() {
        console.log('uai')
        let data = new Object();

        data.dataInicial = dataInicial + 'T03:00:00.000Z';
        data.dataFinal = dataFinal + 'T03:00:00.000Z';

        BuscarReceitas(data);
        BuscarDespesas(data);
    }

    useEffect(() => {
        console.log('uai')
        let data = new Object();


        data.dataInicial = dataInicial + 'T03:00:00.000Z';
        data.dataFinal = dataFinal + 'T03:00:00.000Z';

        BuscarReceitas(data);
        BuscarDespesas(data);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: Colors.cinzaContorno, borderBottomWidth: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, backgroundColor: '#ededed', borderRightColor: Colors.cinzaContorno, borderRightWidth: 1 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'roboto-bold', color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Receita Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ {receitaMensal}
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, backgroundColor: '#ededed' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'roboto-bold', color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Despesa Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.vermelhoGoogle, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ {despesaMensal}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={abrirCadastroMovimentacao}>
                    <View style={{
                        height: 50,
                        alignItems: 'center',
                        marginVertical: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        marginHorizontal: 20,
                        borderRadius: 50,
                        backgroundColor: Colors.verdePrincipal,
                        elevation: 3
                    }}>
                        <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'roboto-bold', fontSize: 18, color: Colors.branco }}>Adicionar movimentação</Text>
                        </View>
                        <View style={{ flex: 1, marginRight: 5 }}>
                            <Ionicons style={{ alignSelf: 'center' }} name='add' color='white' size={32} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Receitas e Despesas mensais
                    </Text>
                </View>
                <View style={{ borderTopColor: Colors.cinzaClaro, borderTopWidth: 1, flex: 1, flexDirection: 'row' }}>
                    <Pressable onPress={() => setSelecionado(true)} style={{ flex: 1 }}>
                        <View style={[
                            selecionado ?
                                { borderBottomColor: Colors.verdePrincipal }
                                :
                                { borderBottomColor: Colors.preto },
                            {
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                paddingBottom: 6,
                                padding: 6
                            }]
                        }>
                            <Text style={
                                selecionado ?
                                    { color: Colors.verdePrincipal, fontSize: 15, textAlign: 'center' }
                                    :
                                    { color: Colors.preto, fontSize: 15, textAlign: 'center' }
                            }>
                                Receitas
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => setSelecionado(false)} style={{ flex: 1 }}>
                        <View style={[
                            selecionado ?
                                { borderBottomColor: Colors.preto }
                                :
                                { borderBottomColor: Colors.verdePrincipal },
                            {
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                paddingBottom: 6,
                                padding: 6
                            }]
                        }>
                            <Text style={
                                selecionado ?
                                    { color: Colors.preto, fontSize: 15, textAlign: 'center' }
                                    :
                                    { color: Colors.verdePrincipal, fontSize: 15, textAlign: 'center' }
                            }>
                                Despesas
                            </Text>
                        </View>
                    </Pressable>
                </View>
                {selecionado ?
                    <ScrollView style={{ maxHeight: 300 }}>
                        {resultsReceita}
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <BotaoInicio onPress={Reset} styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Reset </BotaoInicio>
                        </View>
                    </ScrollView>
                    :
                    <ScrollView style={{ maxHeight: 300 }}>
                        {resultsDespesa}
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                            <BotaoInicio onPress={Reset} styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Reset </BotaoInicio>
                        </View>
                    </ScrollView>
                }
            </ScrollView >
        </View >
    );
}

let texto1 = "(nome da receita)";
let texto2 = "(nome da despesa)";

export default TelaControleGastos;

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
        marginTop: 5,
        marginHorizontal: 10,
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
    }
})