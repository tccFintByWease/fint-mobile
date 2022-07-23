import { View, Image, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';

import Colors from '../constantes/colors';

function Header() {
    let olho = require('../assets/icons/eye-solid.png');

    function imgReturn() {
        console.log('Perfil')
    };
    function olhoReturn() {
        console.log('olhozinho')
    };
    function notificReturn() {
        console.log('notific')
    };

    let moeda = 'R$';
    let dinheiro = '22,35';

    return <SafeAreaView style={{ flex: 1, position: 'relative', maxHeight: 120 }}>
        <View style={styles.viewTotal}>
            <View>
                <Pressable onPress={imgReturn}>
                    <Image style={styles.imgPerfil} source={require('../assets/icons/user-solid.png')} />
                </Pressable>
            </View>
            <View>
                <Text style={styles.txtDinheiroMoeda}>
                    Saldo
                </Text>
                <View style={styles.viewTexto}>
                    <Text style={styles.txtSuperior1}>
                        {moeda} {dinheiro}
                    </Text>
                    <Pressable onPress={olhoReturn}>
                        <Image style={styles.imgOlho} source={olho} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.viewNotific}>
                <Pressable onPress={notificReturn}>
                    <Image style={styles.imgNotific} source={require('../assets/icons/bell-solid.png')} />
                </Pressable>
            </View>
        </View >
    </SafeAreaView>
};

export default Header;

const styles = StyleSheet.create({
    viewTotal: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.cinzaContorno,
        height: 110,
        width: '100%',
        alignSelf: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    imgPerfil: {
        width: 44,
        height: 50,
        alignSelf: 'center',
        marginTop: 28,
    },
    viewTexto: {
        height: 30,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
    },
    imgOlho: {
        width: 20,
        height: 17,
        marginLeft: 4,
        marginTop: -8
    },
    txtDinheiroMoeda: {
        height: 30,
        fontSize: 15,
        color: Colors.cinzaContorno,
        margin: 0,
        padding: 0,
        marginLeft: 20,
        marginTop: 26,
    },
    txtSuperior: {
        color: Colors.preto,
        height: 40,
        fontSize: 25,
    },
    txtSuperior1: {
        color: Colors.preto,
        maxWidth: 100,
        fontSize: 20,
        marginTop: -9
    },
    viewNotific: {
        alignSelf: 'center',
        paddingTop: 30,
        paddingRight: 20,
        position: 'absolute',
        right: 0
    },
    imgNotific: {
        width: 28,
        height: 33,
    }
})