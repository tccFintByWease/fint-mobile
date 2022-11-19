import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';
import { LOOK_FOR_EMAIL_URL } from '../store/api-urls';

import Colors from '../constantes/colors';
import axios from 'axios';

function Header({ }) {

    const [userName, setUserName] = useState([]);

    async function perfilResponse() {
        console.log('oi')
    };
    async function nomeUser() {
        let data = new Object();

        data.emailUsuario = await SecureStore.getItemAsync("email")
        const response = await axios.post(LOOK_FOR_EMAIL_URL, data)

        console.log(response.data);
        setUserName(response.data.result.nomeUsuario)
    }

    useEffect(() => {
        nomeUser();

    }, [])

    return <SafeAreaView style={{ flex: 1, position: 'relative', height: 300 }}>
        <View style={styles.container}>
            <View style={styles.caixaPessoa}>
                <Pressable onPress={perfilResponse}>
                    <Ionicons name='person' size={25} />
                </Pressable>
            </View>
            <View style={styles.caixaDinheiro}>
                <Text style={styles.txtSaldo}>
                    Olá,
                </Text>
                <View style={styles.caixaSaldo}>
                    <Text style={styles.txtValor}>
                        {userName}!
                    </Text>
                </View>
            </View>
        </View >
    </SafeAreaView>
};

export default Header;

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.cinzaContorno,
        height: 70,
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    caixaPessoa: {
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        padding: 10,
        borderRadius: 35
    },
    caixaSaldo: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    txtSaldo: {
        fontSize: 14,
        fontFamily: 'roboto-bold',
        color: Colors.verdeSecundario,
        marginLeft: 20,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    txtValor: {
        color: Colors.preto,
        fontSize: 16,
        fontFamily: 'roboto-regular'
    },
    viewNotific: {
        alignSelf: 'center',
        marginRight: 20,
        position: 'absolute',
        right: 0
    },
})