import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import patternStyle from '../constantes/style';
import Notificacao from '../componentes/Notificacao';

function TelaNotificacao() {
    return <View style={{ flex: 1 }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> Notificações </Text>
        </View>
        <View>
            <Notificacao />
        </View>
    </View >
}

let tempo = '20 minutos';

let mensagem = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';


export default TelaNotificacao;

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
        fontSize: 16,
        letterSpacing: 1.15,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        maxWidth: '85%'
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