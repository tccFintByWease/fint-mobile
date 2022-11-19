import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';
import axios from 'axios';
import { getTodayDate } from '../utils/date-utils';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

function SimulacaoAlterarDados() {

    async function adicionarSimulacao() {

        const dataInicial = getTodayDate();

        data.dataFinal = dataFinal;



        var data1 = new Date(dataInicial);
        var data2 = new Date(new Date(dataFinal));
        var total = (data2.getFullYear() - data1.getFullYear()) * 12 + (data2.getMonth() - data1.getMonth());


    };

    return <View style={{ flex: 1 }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> Simulação </Text>
            <View style={{ position: 'absolute', right: 0, paddingRight: 14, paddingTop: 18 }}>
                <Image source={require('../assets/icons/x-solid.png')} style={{ width: 30, height: 40 }} />
            </View>
        </View>
        <View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Valor investido - em {moeda}</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'420,69'} keyboardType='numeric' />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Taxa de corretagem - em % ao mês</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'0,85'} keyboardType='numeric' maxLength={5} />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Período de tempo - em meses</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'24'} keyboardType='number-pad' />
            </View>
            <View style={{ alignItems: 'center', padding: 6 }}>
                <BotaoInicio onPress={handleResponse()} styleExterno={patternStyle.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Simular</BotaoInicio>
            </View>
        </View>
    </View >
}

let moeda = 'R$'


export default SimulacaoAlterarDados;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'column',
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 6,
        alignContent: 'center'
    },
    textoTopo: {
        fontFamily: 'roboto-regular',
        fontSize: 26,
        color: Colors.preto,
        letterSpacing: 1.4
    },
    textoXTopo: {
        fontSize: 40,
        color: '#707070',
    },
    textoTracoCat: {
        fontSize: 40,
        color: Colors.preto,
    },
    botaoInterno: {
        backgroundColor: Colors.verdePrincipal,
        paddingVertical: 10
    },
    viewAdjacente: {
        paddingHorizontal: 6,
        paddingTop: 2,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 4
    },
    textoCinza: {
        fontSize: 15,
        fontFamily: 'roboto-regular',
        color: Colors.cinzaContorno,
        letterSpacing: 1.2,
    },
    textoPretoDentro: {
        fontSize: 22,
        letterSpacing: 1.3,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginTop: 4
    },
    textoPretoDentroInput: {
        width: '70%',
        fontSize: 25,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginTop: 4
    }
})