import React, { useState } from 'react';
import { View, Image, Pressable, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import BotaoInicio from '../componentes/BotaoInicio';
import Ionicons from '@expo/vector-icons/Ionicons';

function TelaControleGastos({navigation}) {
    const [selecionado, setSelecionado] = useState(true);

    function abrirDetalhesMovimentacao(){
        navigation.navigate('detalhesMovimentacao')
    }
    function abrirCadastroMovimentacao(){
        navigation.navigate('cadastroMovimentacao')
    }
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>
                <View style={patternStyle.rootContainer2}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', borderBottomColor: Colors.cinzaContorno, borderBottomWidth: 1 }}>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, backgroundColor: '#ededed', borderRightColor: Colors.cinzaContorno, borderRightWidth: 1}}>
                        <Text style={{ fontSize: 16, fontFamily: 'roboto-bold', color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Receita Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ (valor)
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', padding: 10, backgroundColor: '#ededed' }}>
                        <Text style={{ fontSize: 16, fontFamily: 'roboto-bold', color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Despesa Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ (valor)
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
                            <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontFamily: 'roboto-bold', fontSize: 18, color: Colors.branco}}>Adicionar movimentação</Text>
                            </View>
                            <View style={{flex: 1,marginRight: 5}}>
                                <Ionicons style={{alignSelf: 'center'}} name='add' color='white' size={32}/>
                            </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Receitas e Despesas
                    </Text>
                </View>
                <View style={{ borderTopColor: Colors.cinzaClaro, borderTopWidth: 1, flex: 1, flexDirection: 'row' }}>
                    <Pressable onPress={() => setSelecionado(true)} style={{ flex: 1 }}>
                        <View style={[
                            selecionado ? 
                                {borderBottomColor: Colors.verdePrincipal}
                                :
                                {borderBottomColor: Colors.preto},                         
                            {borderBottomWidth: 1, 
                            alignItems: 'center', 
                            paddingBottom: 6, 
                            padding: 6 }]
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
                                {borderBottomColor: Colors.preto}
                                :
                                {borderBottomColor: Colors.verdePrincipal},                    
                            {borderBottomWidth: 1, 
                            alignItems: 'center', 
                            paddingBottom: 6, 
                            padding: 6 }]
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
                    <View>
                        <CaixaInvestimento onPress={abrirDetalhesMovimentacao}>{texto1}</CaixaInvestimento>
                        <CaixaInvestimento onPress={abrirDetalhesMovimentacao}>{texto1}</CaixaInvestimento>
                        <CaixaInvestimento onPress={abrirDetalhesMovimentacao}>{texto1}</CaixaInvestimento>
                    </View>
                    :
                    <View>
                        <CaixaInvestimento onPress={abrirDetalhesMovimentacao}>{texto2}</CaixaInvestimento>
                        <CaixaInvestimento onPress={abrirDetalhesMovimentacao}>{texto2}</CaixaInvestimento>
                        <CaixaInvestimento onPress={abrirDetalhesMovimentacao}>{texto2}</CaixaInvestimento>
                    </View>
                }
                <Pressable>
                    <View style={{height: 50, justifyContent: 'center', paddingHorizontal: 20}}>
                        <Text style={{fontFamily: 'roboto-bold', fontSize: 18}}>Ver mais</Text>
                    </View>
                </Pressable>
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