import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';

function SimulacaoSalvar() {
    return <View style={{ flex: 1 }}>
        <View style={styles.viewTopo}>
            <TextInput style={styles.textoTopo} defaultValue={'Simulação'} />
            <View style={{ position: 'absolute', right: 0, paddingRight: 14, paddingTop: 18 }}>
                <Image source={require('../assets/icons/x-solid.png')} style={{ width: 30, height: 40 }} />
            </View>
        </View>
        <View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Tipo de investimento</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'Investimento Padrão'} />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Valor investido - em {moeda}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/icons/lock-solid.png')} style={{ height: 20, width: 18, marginTop: 8, marginRight: 4 }} />
                    <Text style={styles.textoPretoDentro}>
                        {valorInvestido}
                    </Text>
                </View>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Valor investido - em {moeda}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/icons/lock-solid.png')} style={{ height: 20, width: 18, marginTop: 8, marginRight: 4 }} />
                    <Text style={styles.textoPretoDentro}>
                        {lucroSimulado}
                    </Text>
                </View>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Taxa de corretagem - em % ao mês</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/icons/lock-solid.png')} style={{ height: 20, width: 18, marginTop: 8, marginRight: 4 }} />
                    <Text style={styles.textoPretoDentro}>
                        {taxaDeCorretagem}
                    </Text>
                </View>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Período de tempo - em meses</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/icons/lock-solid.png')} style={{ height: 20, width: 18, marginTop: 8, marginRight: 4 }} />
                    <Text style={styles.textoPretoDentro}>
                        {periodoTempo}
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', padding: 6 }}>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Salvar Simulação</BotaoInicio>
            </View>
        </View>
    </View >
}
let valorInvestido = 420.69;
let taxaDeCorretagem = 2.21;
let periodoTempo = 24;
const porCento = 1 + taxaDeCorretagem / 100;
const jurosTotal = Math.pow(porCento, periodoTempo);
const lucroSimulado = valorInvestido * jurosTotal;

let moeda = 'R$'


export default SimulacaoSalvar;

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