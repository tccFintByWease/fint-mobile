import { View, StyleSheet, Text } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';
import React from 'react';

function ConfirExcluirConta() {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 30, width: '80%' }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.textoCima}>
                    Deseja realmente excluir sua conta?
                </Text>
            </View>
            <View>
                <Text style={styles.texto}>
                    Ao ser excluída, sua conta poderá ser reativada nos próximos 90 dias. Após esse período, ela será permanentemente deletada.
                </Text>
            </View>
            <View>
                <BotaoInicio styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Confirmar Exclusão</BotaoInicio>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Cancelar</BotaoInicio>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        color: Colors.preto,
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center',
        width: '90%'
    },
    textoCima: {
        color: Colors.preto,
        fontSize: 24,
        marginVertical: 10,
        marginLeft: -22,
        textAlign: 'center',
        width: '60%'
    },
    botaoExterno: {
        width: '90%',
        marginVertical: 10,
        height: 48,
    },
    inputButton: {
        marginVertical: 5,
        borderRadius: 30,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
    },
    botaoInterno: {
        backgroundColor: Colors.vermelhoGoogle,
        paddingVertical: 10
    },
})

export default ConfirExcluirConta;