import { View, Text, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import BotaoInicio from '../componentes/BotaoInicio';
import patternStyle from '../constantes/style';
import Header from '../componentes/Header';

function TelaUsuarioConfiguracao() {

    user = "usuário"
    temporestante = "3 meses restantes"

    return (
        <SafeAreaView style={{ marginTop: 20 }}>
            <Header />
            <View style={styles.viewTopo}>
                <Text style={styles.textoTopo}>Configurações</Text>
            </View>
            <View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Tema</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Camada de Proteção</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Notificações</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Termos de Uso</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Versão 1.0</Text>
                </View>
            </View>
            {/* <BottomTabNavigator />*/}
        </SafeAreaView >
    )
}


export default TelaUsuarioConfiguracao;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'column',
        paddingVertical: 24,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 6,
        alignContent: 'center',
        marginTop: 50
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
        paddingTop: 2,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 4
    },
    textoPreto: {
        fontSize: 18,
        letterSpacing: 1.6,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginTop: 4,
        fontWeight: 'bold',

    },
})