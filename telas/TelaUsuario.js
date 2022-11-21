import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constantes/colors';

function TelaUsuario({navigation}) {
    function voltar(){
        navigation.goBack();
    }
    function abrirAlterarDados(){
        navigation.navigate('alterarDados');
    }

    let nomeUsuario = 'André';
    return (
        <SafeAreaView style={{flex: 1, paddingTop: 40}}>
            <View style={styles.viewTopo}>
                <View style={{flex: 1}}>
                    <Text style={styles.textoTopo}>Olá, {nomeUsuario}</Text>
                </View>
                <Pressable onPress={voltar}>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Ionicons name='close' size={30} color='black'/>
                    </View>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={abrirAlterarDados} style={styles.viewAdjacente}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Ionicons name='person' color='#000' size={25}/>
                    </View>
                    <View style={{flex: 6, alignItems: 'flex-start'}}>
                        <Text style={styles.textoPreto}>Dados</Text>
                    </View>
                    <View style={{flex: 1}}> 
                        <Ionicons style={{alignSelf: 'flex-end'}} name='arrow-forward' size={30} color='black'/>
                    </View>
                </Pressable>
                <Pressable style={styles.viewAdjacente}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Ionicons name='flower' color='#000' size={25}/>
                    </View>
                    <View style={{flex: 6, alignItems: 'flex-start'}}>
                        <Text style={styles.textoPreto}>Configurações</Text>
                    </View>
                    <View style={{flex: 1}}> 
                        <Ionicons style={{alignSelf: 'flex-end'}} name='arrow-forward' size={30} color='black'/>
                    </View>
                </Pressable>
                <Pressable style={styles.viewAdjacente}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Ionicons name='information-circle' color='#000' size={25}/>
                    </View>
                    <View style={{flex: 6, alignItems: 'flex-start'}}>
                        <Text style={styles.textoPreto}>Sobre</Text>
                    </View>
                    <View style={{flex: 1}}> 
                        <Ionicons style={{alignSelf: 'flex-end'}} name='arrow-forward' size={30} color='black'/>
                    </View>
                </Pressable>
                <Pressable style={[styles.viewAdjacente, {borderBottomColor: Colors.cinzaContorno, borderBottomWidth: 1}]}>
                    <View style={{flex: 1, alignItems: 'flex-start'}}>
                        <Ionicons name='help-circle' color='#000' size={25}/>
                    </View>
                    <View style={{flex: 6, alignItems: 'flex-start'}}>
                        <Text style={styles.textoPreto}>Suporte</Text>
                    </View>
                    <View style={{flex: 1}}> 
                        <Ionicons style={{alignSelf: 'flex-end'}} name='arrow-forward' size={30} color='black'/>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView >
    )
}

export default TelaUsuario;

const styles = StyleSheet.create({
    viewTopo: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginVertical: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    textoTopo: {
        fontFamily: 'roboto-bold',
        fontSize: 26,
        color: Colors.preto,
        letterSpacing: 1.4
    },
    viewAdjacente: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'center',
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'row'
    },
    textoPreto: {
        fontSize: 18,
        letterSpacing: 1.6,
        fontFamily: 'roboto-bold',
        color: Colors.preto,
    },
})