import { View, Image, Pressable, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import React from 'react';
import CardHome from '../componentes/CardHome';
import BottomTabNavigator from '../componentes/Navegadores/BottomTabNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';

function TelaHome({navigation}) {
    function abrirPerfil(){
        navigation.navigate('perfil');
    }
    function abrirSelecaoGraficos(){
        navigation.navigate('selecionarGraficos');
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header perfil={abrirPerfil}/>
            <ScrollView style={{ marginTop: 70 }}>
                <View style={{
                    width: '100%', 
                    alignSelf: 'center', 
                    paddingVertical: 10, 
                    marginTop: 10, 
                    borderBottomColor: Colors.cinzaContorno, 
                    borderBottomWidth: 1
                }}>
                    <Text style={[styles.textTitle, {marginLeft: 10}]}>Seus Gráficos</Text>
                </View>
                <View style={[patternStyle.rootContainer2, {borderBottomColor:Colors.cinzaContorno, borderBottomWidth: 1}]}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                    <View style={{width: '90%', borderRadius: 30, alignItems: 'flex-end'}}>
                        <TouchableOpacity onPress={abrirSelecaoGraficos}>
                            <Ionicons name='add-circle' size={50} color={Colors.verdePrincipal}/>
                        </TouchableOpacity>
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
                        <BotaoInicio onPress={() => this.props.navigation.navigate('investimentos')} styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Ver Mais </BotaoInicio>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView >
    );
}

export default TelaHome;

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
})