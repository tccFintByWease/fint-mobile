import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import patternStyle from '../constantes/style';

function Notificacao() {
    return <View>
        <View style={styles.viewAdjacente}>
            <View>
                <Text style={styles.textoPretoDentro}>{mensagem}</Text>
                <View style={{ position: 'absolute', right: 0, paddingRight: 14, paddingTop: 6 }}>
                    <Image source={require('../assets/icons/x-solid.png')} style={{ width: 20, height: 27 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <View style={{ backgroundColor: Colors.verdePrincipal, paddingHorizontal: 10, paddingVertical: 3, marginVertical: 6, width: 80 }}>
                    <Text style={{ color: Colors.branco, fontSize: 14, }}>Novo</Text>
                </View>
                <View style={{ marginLeft: 6, paddingLeft: 6, marginVertical: 9 }}>
                    <Text style={{ color: Colors.cinzaContorno, fontSize: 14, }}>{tempo} atrás</Text>
                </View>
            </View>
        </View>
    </View>
}

let tempo = '20 minutos';

let mensagem = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';


export default Notificacao;

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