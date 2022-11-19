import React, { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import BotaoInicio from '../componentes/BotaoInicio';

function TelaInvestimentos() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Tipos de Investimentos
                    </Text>
                </View>
                <View style={{ borderTopColor: Colors.cinzaClaro, borderTopWidth: 1, flex: 1, flexDirection: 'row' }}>
                    <Pressable style={{ flex: 1 }}>
                        <View style={{ borderBottomColor: Colors.verdePrincipal, borderBottomWidth: 1, alignItems: 'center', paddingBottom: 6, padding: 6 }}>
                            <Text style={{ color: Colors.verdePrincipal, fontSize: 15, textAlign: 'center' }}>
                                Gráfico Setores {/* Basicamente transformar isso em algo como o bottomTabNavigator, que muda só o Gráfico. */}
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={{ flex: 1 }}>
                        <View style={{ borderBottomColor: Colors.preto, borderBottomWidth: 1, alignItems: 'center', paddingBottom: 6, padding: 6 }}>
                            <Text style={{ color: Colors.preto, fontSize: 15, textAlign: 'center' }}>
                                Gráfico Linha
                            </Text>
                        </View>
                    </Pressable>
                </View>

                <CaixaInvestimento >{texto}</CaixaInvestimento>

                <View style={patternStyle.rootContainer2}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}>Gráfico - de Setores</Text>
                    </View>
                </View>

<<<<<<< Updated upstream
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Investimentos salvos
                    </Text>
=======
                <View style={{ alignItems: 'center', marginTop: 10}}>
                    <BotaoInicio
                        onPress={handleSubmit(BuscarReceitas)}
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={[styles.botaoInterno, { backgroundColor: Colors.verdePrincipal }]}
                        styleTexto={patternStyle.textoBotao}>
                        <Ionicons name='add-circle-outline' color='white' size={20} />
                        Buscar
                    </BotaoInicio>
>>>>>>> Stashed changes
                </View>

                <CaixaInvestimento>{texto}</CaixaInvestimento>

                <CaixaInvestimento>{texto}</CaixaInvestimento>

                <CaixaInvestimento>{texto}</CaixaInvestimento>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <BotaoInicio styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Ver Mais </BotaoInicio>
                </View>
            </ScrollView >
        </View >
    );
}

let texto = "(nome do investimento)";

export default TelaInvestimentos;

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
        marginTop: 20,
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