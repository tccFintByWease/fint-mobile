import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import React from 'react';

class TelaInicioLogadoCAssinatura extends React.Component {
    render(){
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={{ marginTop: 70}}>
                    <View style={patternStyle.rootContainer2}>
                        <View style={styles.alertaBox}>
                            <View style={{ position: 'absolute', right: 0, top: 0 }}>
                                <Pressable>
                                    <View>
                                        <Text style={styles.xButton} > X </Text>
                                    </View>
                                </Pressable>
                            </View>
                            <Text style={{ 
                                width: '70%', 
                                textAlign: 'center',
                                fontFamily: 'roboto-bold', 
                                letterSpacing: 1, 
                                fontSize: 20, 
                                color: Colors.branco, 
                                marginBottom: 8
                            }}>
                                Gráficos Exclusivos
                            </Text>
                            <Text style={{ 
                                marginLeft: 8,
                                fontFamily: 'roboto-italic', 
                                fontSize: 14, 
                                color: Colors.branco, 
                            }}>
                                Sua assinatura possui gráficos especiais que podem ser exibidos na tela inicial.
                            </Text>
                            <View>
                                <Pressable style={styles.botaoAlerta}>
                                    <View>
                                        <Text style={styles.txtBotaoAlerta}>Assinar</Text>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.viewGrafico}>
                            <Text style={styles.textoGrafico}> Gráfico</Text>
                        </View>
                    </View>
                    <View style={styles.boxTitle}>
                        <Text style={styles.textTitle}>
                            Últimos Investimentos
                        </Text>
                    </View>
                    <View >
                        <CaixaInvestimento>(nome do investimento)</CaixaInvestimento>
                        <CaixaInvestimento>(nome do investimento)</CaixaInvestimento>
                        <CaixaInvestimento>(nome do investimento)</CaixaInvestimento>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <BotaoInicio onPress={() => this.props.navigation.navigate('Investimentos')} styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Ver Mais </BotaoInicio>
                        </View>
                    </View>
                </ScrollView >
            </View >
        );
    }
}

export default TelaInicioLogadoCAssinatura;

const styles = StyleSheet.create({
    alertaBox: {
        width: '90%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 30,
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        elevation: 5
    },
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
})