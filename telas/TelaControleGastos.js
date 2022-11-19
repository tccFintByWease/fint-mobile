import React, { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import BotaoInicio from '../componentes/BotaoInicio';

<<<<<<< Updated upstream
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
                                Receitas {/* Basicamente transformar isso em algo como o bottomTabNavigator, que muda só o Gráfico. */}
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
=======
    let receitaMensal = 0;
    let despesaMensal = 0;

    return (
        <View>
            <ScrollView>
                <Header />
                <View >
                    <View style={{ flex: 1, flexDirection: 'row', display: 'flex', marginHorizontal: 5}}>
                        <View style={styles.caixaMensal}>
                            <Text style={styles.caixaMensalTitulo}>
                                Receita Mensal
                            </Text>
                            <Text style={styles.caixaMensalValor}>
                                R$ {receitaMensal}
                            </Text>
                        </View>
                        <View style={styles.caixaMensal}>
                            <Text style={styles.caixaMensalTitulo}>
                                Despesa Mensal
                            </Text>
                            <Text style={styles.caixaMensalValor}>
                                R$ {despesaMensal}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={abrirCadastroMovimentacao}>
                        <View style={styles.botaoCadastro}>
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
                        </ScrollView>
                        :
                        <ScrollView style={{ maxHeight: 300 }}>
                            {resultsDespesa}
                        </ScrollView>
                    }
                </View>
>>>>>>> Stashed changes
            </ScrollView >
        </View >
    );
}

<<<<<<< Updated upstream
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
=======
export default TelaControleGastos;

const styles = StyleSheet.create({
    boxTitle: {
        marginVertical: 15,
        marginHorizontal: 10,
        paddingHorizontal: 5,
>>>>>>> Stashed changes
    },
    textTitle: {
        fontSize: 20,
        color: Colors.preto,
        letterSpacing: 1.5,
        fontFamily: 'roboto-bold',
    },
    botaoCadastro:{
        height: 50,
        alignItems: 'center',
        marginVertical: 25,
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        borderRadius: 50,
        backgroundColor: Colors.verdePrincipal,
        elevation: 3
    },
    caixaMensal:{
        flex: 1, 
        alignItems: 'center', 
        padding: 10, 
        backgroundColor: Colors.verdeSecundario, 
        borderTopWidth: 1,
        borderTopColor: Colors.branco,
        borderRadius: 15,
        marginHorizontal: 5
    },
    caixaMensalTitulo:{
        fontSize: 16, 
        fontFamily: 'roboto-bold', 
        color: Colors.branco, 
        letterSpacing: 1.5, 
        textAlign: 'center' 
    },
    caixaMensalValor:{
        fontSize: 18, 
        color: Colors.branco, 
        letterSpacing: 1.2, 
        textAlign: 'center', 
        marginTop: 10 
    }
})