import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import BotaoInicio from '../componentes/BotaoInicio';
import patternStyle from '../constantes/style';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Header from '../componentes/Header';
import BottomTabNavigator from '../componentes/BottomTabNavigator';

function TelaUsuarioAlterarDados() {

    user = "Usuário"
    temporestante = "3 meses restantes"
    moeda = "BRL"
    cpf = "111.111.111-11"
    email = "ababa@cdcdcd.como"
    telefone = "(11)94002-8922"
    dataNasc = "02/05/2005"
    genero = "Neutro"

    return <View style={{ marginTop: 30, flex: 1 }}>
        <Header />
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> {this.user}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <View style={{ backgroundColor: Colors.verdePrincipal, paddingHorizontal: 10, paddingVertical: 3, marginVertical: 20 }}>
                    <Text style={{ color: Colors.branco, fontSize: 14, }}>PREMIUM</Text>
                </View>
            </View>
            <View style={{ marginLeft: 12 }}>
                <Text style={{ color: Colors.cinzaContorno, fontSize: 12, }}>{this.temporestante}</Text>
            </View>
        </View>
        <View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>MOEDA</Text>
                <Text style={styles.textoPretoDentro}>{this.moeda}</Text>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>CPF</Text>
                <Text style={styles.textoPretoDentro}>{this.cpf}</Text>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>EMAIL</Text>
                <Text style={styles.textoPretoDentro}>{this.email}</Text>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>TELEFONE</Text>
                <Text style={styles.textoPretoDentro}>{this.telefone}</Text>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>DATA DE NASCIMENTO</Text>
                <Text style={styles.textoPretoDentro}>{this.dataNasc}</Text>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>GÊNERO</Text>
                <Text style={styles.textoPretoDentro}>{this.genero}</Text>
            </View>
            <View style={styles.viewAdjacente}>
                <Pressable>
                    <Text style={styles.textoPreto}>Alterar Senha</Text>
                </Pressable>
            </View>
            <View style={styles.viewAdjacente}>
                <Pressable>
                    <Text style={styles.textoVermelho}>Excluir conta</Text>
                </Pressable>
            </View>
        </View>
        {/* <BottomTabNavigator />*/}
    </View >
}

export default TelaUsuarioAlterarDados;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'column',
        paddingBottom: 10,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 6,
        alignContent: 'center',
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
        backgroundColor: Colors.vermelhoGoogle,
        paddingVertical: 10
    },
    viewAdjacente: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        width: '100%',

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
    textoPreto: {
        fontSize: 22,
        letterSpacing: 1.3,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginVertical: 12
    },
    textoVermelho: {
        fontSize: 22,
        letterSpacing: 1.3,
        fontFamily: 'roboto-regular',
        color: Colors.vermelhoGoogle,
        marginVertical: 12
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