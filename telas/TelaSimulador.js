import React, { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaSimulador from '../componentes/CaixaSimulador';
import { Suspense } from 'react/cjs/react.production.min';

function TelaSimulador() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Meus investimentos
                    </Text>
                </View>

                <CaixaSimulador texto={texto} valor={valor}></CaixaSimulador>
                <View style={patternStyle.rootContainer2}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>

                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Mais Populares
                    </Text>
                </View>

                <CaixaSimulador texto={texto2} valor={valor2}></CaixaSimulador>
                <View style={[patternStyle.rootContainer2, { marginBottom: 10 }]}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>

            </ScrollView >
        </View >
    );
}

let texto = "Investimento Pica";
let texto2 = "investimento Médio";
let valor = 521.23;
let valor2 = 124.01;

export default TelaSimulador;

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