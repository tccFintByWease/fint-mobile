import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from '../constantes/colors';

function Header({perfil}) {
    const [hideSaldo, setHideSaldo] = useState(true);

    return <SafeAreaView style={{ flex: 1, position: 'relative', height: 300 }}>
        <View style={styles.container}>
            <View style={styles.caixaPessoa}>
                <Pressable onPress={perfil}>
                    <Ionicons name='person' size={25} />
                </Pressable>
            </View>
            <View style={styles.caixaDinheiro}>
                <Text style={styles.txtSaldo}>
                    Saldo
                </Text>
                <View style={styles.caixaSaldo}>
                    <Text style={styles.txtValor}>
                        {hideSaldo ?
                            "R$22,50"
                            :
                            "Oculto"
                        }
                    </Text>
                    <TouchableOpacity style={styles.icon} onPress={() => setHideSaldo(!hideSaldo)}>
                        {hideSaldo ?
                            <Ionicons name="eye" color='#000' size={25} />
                            :
                            <Ionicons name="eye-off" color='#000' size={25} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewNotific}>
                <Pressable>
                    <Ionicons name='notifications' size={35} />
                </Pressable>
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