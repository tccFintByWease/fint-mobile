import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TelaEmDesenvolvimento() {
    return(
        <View style={styles.caixa}>
            <Text>Estou em Desenvolvimento!</Text>
        </View>
    );
}

export default TelaEmDesenvolvimento;

const styles = StyleSheet.create({
    caixa:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});