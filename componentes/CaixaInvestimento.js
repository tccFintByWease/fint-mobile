import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import Colors from '../constantes/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import { DELETE_SIMULATION_URL } from '../store/api-urls';


function CaixaInvestimento(props) {

    let idSimulacao = props.idSimulacao

    async function setinhaReceiver() {

        console.log(idSimulacao)

        console.log(typeof idSimulacao)



        const response = await axios.delete(DELETE_SIMULATION_URL, { data: { idSimulacao: idSimulacao } })

        console.log(response)

        console.log(response.data)

        Alert.alert("Investimento excluído")

    };



    return (
        <View style={styles.boxList}>
            <Ionicons style={{ marginVertical: 4 }} name="trending-up" color="#000" size={40} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textoGrande}>{props.texto}</Text>
                <Text style={styles.textoPequeno}>Valor Investido: R$ {props.valorI}</Text>
                <Text style={styles.textoPequeno}>Meses: {props.tempo}</Text>
                <Text style={styles.textoPequeno}>Lucro: R$ {props.lucro}</Text>
                <Text style={styles.textoPequeno}>Montante: R$ {props.valorF}</Text>
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                <Pressable onPress={() => Alert.alert(
                    "Confirmar",
                    "Tem certeza que quer deletar esse investimento?",
                    [
                        {
                            text: "Cancelar",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        {
                            text: "Sim",
                            onPress: setinhaReceiver,
                        }
                    ],
                    { cancelable: false }
                )}>
                    <Ionicons name='trash-bin' size={40} style={{ margin: 15 }} />
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