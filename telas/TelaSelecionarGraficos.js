import { View, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import CardGrafico from '../componentes/CardGrafico';

function TelaSelecionarGraficos({navigation}) {
    function voltar(){
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, marginTop: 40 }}>
            <ScrollView>
                <Pressable onPress={voltar}>
                    <View style={{width: '100%', paddingRight: 15}}>
                        <Ionicons style={{alignSelf: 'flex-end'}} name='close' color='black' size={40}/>
                    </View>
                </Pressable>
                <View style={patternStyle.rootContainer2}>
                    <View style={{ width: '100%', paddingLeft: 10 }}>
                        <Text style={styles.textoAnteGrafico}>
                            Selecionar Gráficos
                        </Text>
                    </View>
                    <CardGrafico />
                    <CardGrafico />
                    <CardGrafico />
                </View>
            </ScrollView >
        </View >
    );
}

export default TelaSelecionarGraficos;

const styles = StyleSheet.create({
    alertaBox: {
        width: '92%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 12,
        paddingVertical: 20,
        elevation: 4
    },
    textoNovo: {
        backgroundColor: Colors.verdePrincipal,
        color: Colors.branco,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginBottom: 2,
        fontFamily: 'roboto-regular',
        marginLeft: 10,
    },
    botaoInterno: {
        backgroundColor: Colors.cinzaContorno,
        paddingVertical: 10
    },
    boxTitle: {
        marginTop: 42,
        marginLeft: 10,
        paddingBottom: 8
    },
    textTitle: {
        fontSize: 28,
        color: Colors.preto,
        letterSpacing: 1.8,
        fontFamily: 'roboto-regular',
    },
    imgBall: {
        height: 60,
        width: 60,
        padding: 10
    },
    textoEnorme: {
        fontSize: 34,
        fontFamily: 'Nunito-SemiBold',
        position: 'absolute',
        right: 0,
        marginRight: 10,
        marginTop: -10
    },
    textoEnormeVerde: {
        fontSize: 34,
        fontFamily: 'Nunito-SemiBold',
        position: 'absolute',
        color: Colors.verdePrincipal,
        right: 0,
        marginRight: 10,
        marginTop: -10
    },
    textoAnteGrafico: {
        fontSize: 25,
        fontFamily: 'roboto-bold',
        letterSpacing: 1.4,
        textAlign: 'left',
        marginLeft: 15
    },
    textoGrande: {
        color: Colors.preto,
        fontSize: 20,
        marginTop: 4,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
        textAlign: 'center'
    },
    textoPequeno: {
        color: Colors.cinzaContorno,
        fontSize: 16,
        marginVertical: 8,
        marginLeft: 20,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
    },
    boxList: {
        flexDirection: 'row',
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 1,
        padding: 10
    },
    botaoExterno: {
        width: '40%'
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