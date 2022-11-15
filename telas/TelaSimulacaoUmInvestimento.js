import React, { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet, TextInput } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';

function TelaSimulacaoUmInvestimento() {
    return (
        <View>
            <Header />
            <ScrollView style={{ marginTop: 70, padding: 6 }}>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        {nomeInvestimento}
                    </Text>
                </View>

                <View style={patternStyle.rootContainer2}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>

                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Dados
                    </Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 5, flexDirection: 'column' }}>
                        <Text style={styles.textoPreto}>
                            Valor investido
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textoVerdeFora}>
                                {moeda}
                            </Text>
                            <Text style={styles.textoVerde}>
                                {valorInvestido}
                            </Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, marginVertical: 10, marginHorizontal: 5, flexDirection: 'column' }}>
                        <Text style={styles.textoPreto}>
                            Período de tempo
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textoVerde}>
                                {periodoTempo}
                            </Text>
                            <Text style={styles.textoPretoG}>
                                meses
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginBottom: 10, marginHorizontal: 5 }}>
                    <Text style={styles.textoPreto}>
                        Taxa de Corretagem
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textoVerde}>
                            {taxaDeCorretagem}
                        </Text>
                        <Text style={styles.textoPretoG}>
                            %
                        </Text>
                    </View>
                    <View style={{ marginTop: 20, paddingTop: 20, borderTopColor: Colors.cinzaContorno, borderTopWidth: 1 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textoPreto}>
                                Em x meses, você terá
                            </Text>
                            <Text style={styles.textoPretoG}>
                                {lucroSimulado} {moeda}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                            <Text style={styles.textoPreto}>
                                Com o ganho de
                            </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.textoPretoG}>
                                    {lucro} {moeda}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                    <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}> Salvar Simulação </BotaoInicio>
                </View>
            </ScrollView >
        </View >
    );
}
let valorInvestido = 420.69;
let taxaDeCorretagem = 2.21;
let periodoTempo = 24;
const porCento = 1 + taxaDeCorretagem / 100;
const jurosTotal = Math.pow(porCento, periodoTempo);
const lucroSimulado = (valorInvestido * jurosTotal).toFixed(2);
const lucro = (lucroSimulado - valorInvestido).toFixed(2);
let moeda = "R$ ";
// let valorInvestido = 429.52;
let nomeInvestimento = "Nome do Investimento";

export default TelaSimulacaoUmInvestimento;

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
        width: '92%',
        marginTop: 15,
        alignContent: 'center',
        borderRadius: 30
    },
    textoGrafico: {
        color: '#c0c0c0',
        fontSize: 30,
        fontFamily: 'roboto-italic',
        textAlign: 'center',
        marginTop: 110
    },
    boxTitle: {
        marginTop: 10,
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
    },
    textoPreto: {
        color: Colors.preto,
        fontSize: 14,
        letterSpacing: 1.2,
    },
    textoVerdeFora: {
        color: Colors.verdePrincipal,
        fontSize: 17,
        fontWeight: 'bold'
    },
    textoVerde: {
        color: Colors.verdePrincipal,
        fontSize: 17,
        fontWeight: 'bold'
    },
    textoPretoG: {
        color: Colors.preto,
        fontSize: 17,
        letterSpacing: 1.5,
        marginLeft: 4
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