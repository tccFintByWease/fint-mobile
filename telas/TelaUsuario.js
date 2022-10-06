import { View, Text, StyleSheet, TextInput, SafeAreaView, Image } from 'react-native'
import React from 'react';

import Colors from '../constantes/colors'
import BotaoInicio from '../componentes/BotaoInicio';
import patternStyle from '../constantes/style';
import Header from '../componentes/Header';

function TelaUsuario() {
    return (
        <SafeAreaView style={{ marginTop: 20 }}>
            <Header />
            <View style={styles.viewTopo}>
                <Text style={styles.textoTopo}> Nome {this.user}</Text>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View style={{ backgroundColor: Colors.verdePrincipal, paddingHorizontal: 10, paddingVertical: 3, marginVertical: 6 }}>
                        <Text style={{ color: Colors.branco, fontSize: 14, }}>Salário</Text>
                    </View>
                    <View style={{ marginLeft: 12, marginVertical: 10 }}>
                        <Text style={{ color: Colors.cinzaContorno, fontSize: 12, }}>{this.temporestante}</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Dados</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Assinatura</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Tarefas e Créditos</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Cartões de Crédito</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Configurações</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Sobre</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoPreto}>Suporte</Text>
                    <View style={{ position: 'absolute', right: 0, marginRight: 10 }}>
                        <Image source={require('../assets/icons/angle-right-solid.png')} style={{ height: 28, width: 14, marginTop: 4 }} />
                    </View>
                </View>
            </View>
            {/* <BottomTabNavigator />*/}
        </SafeAreaView >
    )
}

export default TelaUsuario;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'column',
        paddingTop: 24,
        paddingBottom: 10,
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