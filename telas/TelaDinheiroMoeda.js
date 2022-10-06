import { View, Image, TextInput, Text, StyleSheet } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import Dropdown from '../componentes/Dropdown';
import Colors from '../constantes/colors';
import patternStyle from '../constantes/style';
import React from 'react';
import BottomTabNavigator from '../componentes/BottomTabNavigator';

function TelaDinheiroMoeda() {
    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={styles.textoBox}>
                <Text style={styles.texto}>
                    Cadastre seu saldo inicial e sua
                    moeda padrão.
                </Text>
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={styles.dropText}>
                    <View style={styles.caixinha}>
                        <TextInput
                            style={styles.input}
                            maxLength={10}
                            keyboardType='decimal-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder='Quantia'
                            placeholderTextColor={Colors.preto}
                        />
                    </View>
                    <View style={[styles.caixinha, { marginTop: -10 }]}>
                        <Dropdown placeholder="Selecione" />
                    </View>
                </View>
                <Text style={patternStyle.texto}>Essas informações poderão ser alteradas há qualquer
                    momento nas configurações do aplicativo. </Text>
                <BotaoInicio
                    styleExterno={[patternStyle.botaoExterno, styles.botao]}
                    styleCorpo={patternStyle.botaoInterno}
                    styleTexto={patternStyle.textoBotao}
                    onPress={this.props.navigation.navigate('home')}>
                    Confirmar
                </BotaoInicio>
            </View>
            <View style={patternStyle.rodapeLogin}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaDinheiroMoeda;

const styles = StyleSheet.create({
    dropText: {
        flexDirection: 'row',
        textAlign: 'center',
        marginBottom: 40
    },
    input: {
        width: '80%',
        height: 40,
        fontSize: 18,
        color: Colors.preto,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: Colors.preto,
        width: '90%'
    },
    textoBox: {
        width: '90%',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20
    },
    caixinha: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    botao: {
        marginTop: 25,
    }
})
