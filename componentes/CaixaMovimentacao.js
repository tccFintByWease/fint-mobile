import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constantes/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

function CaixaMovimentacao(props) {
    return (
        <View style={styles.boxList}>
            <Ionicons style={{ marginVertical: 4 }} name="trending-up" color="#000" size={40} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textoGrande}>{props.descMov}</Text>
                <Text style={styles.textoPequeno}>{props.maisMenos} R$ {props.valor}</Text>
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                <Pressable>
                    <Ionicons name='chevron-forward-outline' size={40} style={{ margin: 15 }} />
                </Pressable>
            </View>
        </View>
    );
}

export default CaixaMovimentacao;

const styles = StyleSheet.create({
    textoEnorme: {
        fontSize: 35,
        marginRight: 15,
        marginTop: 5
    },
    textoGrande: {
        color: Colors.preto,
        fontSize: 20,
        marginLeft: 20,
        letterSpacing: 1.2,
        fontFamily: 'roboto-regular',
    },
    textoPequeno: {
        color: Colors.cinzaContorno,
        fontSize: 15,
        marginTop: 2,
        marginLeft: 20,
        letterSpacing: 1.2,
        fontFamily: 'roboto-italic',
    },
    boxList: {
        flexDirection: 'row',
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 0.5,
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 0.5,
        padding: 10
    },
});