import React, { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import BotaoInicio from '../componentes/BotaoInicio';

function TelaControleGastos() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={patternStyle.rootContainer2}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: Colors.cinzaContorno, alignItems: 'center', padding: 10, margin: 5, borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'roboto-bold', color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Receita Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ (valor)
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, margin: 5, borderWidth: 1, borderColor: Colors.cinzaContorno, borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, fontFamily: 'roboto-bold', color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Despesa Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ (valor)
                        </Text>
                    </View>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Receitas e Despesas
                    </Text>
                </View>
                <View style={{ borderTopColor: Colors.cinzaClaro, borderTopWidth: 1, flex: 1, flexDirection: 'row' }}>
                    <Pressable style={{ flex: 1 }}>
                        <View style={{ borderBottomColor: Colors.verdePrincipal, borderBottomWidth: 1, alignItems: 'center', paddingBottom: 6, padding: 6 }}>
                            <Text style={{ color: Colors.verdePrincipal, fontSize: 15, textAlign: 'center' }}>
                                Receitas
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={{ flex: 1 }}>
                        <View style={{ borderBottomColor: Colors.preto, borderBottomWidth: 1, alignItems: 'center', paddingBottom: 6, padding: 6 }}>
                            <Text style={{ color: Colors.preto, fontSize: 15, textAlign: 'center' }}>
                                Despesas
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <View >
                        <CaixaInvestimento>{texto}</CaixaInvestimento>
                        <CaixaInvestimento>{texto}</CaixaInvestimento>
                        <CaixaInvestimento>{texto}</CaixaInvestimento>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <BotaoInicio styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Ver Mais </BotaoInicio>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}

let texto = "(nome da receita)";

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