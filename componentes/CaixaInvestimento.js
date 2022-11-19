import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constantes/colors';
import Ionicons from '@expo/vector-icons/Ionicons';


function CaixaInvestimento(props) {
    function setinhaReceiver(props) {

        var dataInicial = props.dataInicial;
        var dataFinal = props.dataFinal;

        var data1 = new Date(dataInicial);
        var data2 = new Date(new Date(dataFinal));
        var total = (data2.getFullYear() - data1.getFullYear()) * 12 + (data2.getMonth() - data1.getMonth());




    };



    return (
        <View style={styles.boxList}>
            <Ionicons style={{ marginVertical: 4 }} name="trending-up" color="#000" size={40} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textoGrande}>{props.texto}</Text>
                <Text style={styles.textoPequeno}>Valor Investido: R$ {props.valor}</Text>
                <Text style={styles.textoPequeno}>Meses: {props.tempo}</Text>
                <Text style={styles.textoPequeno}>Lucro: R$ {props.lucro}</Text>
                <Text style={styles.textoPequeno}>Montante: R$ {props.valor}</Text>
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                <Pressable onPress={setinhaReceiver}>
                    <Ionicons name='chevron-forward-outline' size={40} style={{ margin: 15 }} />
                </Pressable>
            </View>
        </View>
    );
}

export default CaixaInvestimento;

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