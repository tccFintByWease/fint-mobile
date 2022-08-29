import React from 'react';
import { View,Text,Pressable,StyleSheet } from 'react-native';
import Colors from '../constantes/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

function CaixaInvestimento({children}) {
    function setinhaReceiver() {
        console.log('>');
    };
    return (
        <View style={styles.boxList}>
            <Ionicons style={{marginVertical: 4}} name="home" color="#000" size={40}/>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.textoGrande}>{children}</Text>
                <Text style={styles.textoPequeno}>Valor: (valor)</Text>
            </View>
            <View style={{ position: 'absolute', right: 0 }}>
                <Pressable onPress={setinhaReceiver}>
                    <Text style={styles.textoEnorme}> &gt; </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default CaixaInvestimento;

const styles = StyleSheet.create({
    textoEnorme:{
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