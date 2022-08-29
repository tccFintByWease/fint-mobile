import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TelaSimulador() {
    return (
        <View style={styles.caixa}>
            <Text>Estou em Desenvolvimento!</Text>
        </View>
    );
}

export default TelaSimulador;

const styles = StyleSheet.create({
    caixa:{
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 350
    }
});