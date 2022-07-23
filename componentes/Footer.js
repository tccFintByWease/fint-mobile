import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

import Colors from '../constantes/colors';

function Footer() {
    function inicioReturn() {
        console.log('Início')
    };
    function gastoReturn() {
        console.log('Gasto')
    };
    function simuladorReturn() {
        console.log('Simulador')
    };
    function investimentosReturn() {
        console.log('Investimentos')
    };

    return <View style={{ flex: 1, maxHeight: 90 }}>
        <View style={styles.viewTotal}>
            <View style={{ flex: 1 }}>
                <Pressable style={styles.viewCaixas} onPress={inicioReturn}>
                    <Image style={styles.imgs} source={require('../assets/icons/house-solid.png')} />
                    <Text style={{ fontSize: 12, fontFamily: 'roboto-regular', letterSpacing: 2 }}>Início</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1 }}>
                <Pressable style={styles.viewCaixas} onPress={gastoReturn}>
                    <Image style={styles.imgs} source={require('../assets/icons/wallet-solid.png')} />
                    <Text style={{ fontSize: 12, fontFamily: 'roboto-regular', letterSpacing: 2 }}>Gastos</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1 }}>
                <Pressable style={styles.viewCaixas} onPress={simuladorReturn}>
                    <Image style={styles.imgs} source={require('../assets/icons/money-bill-1-wave-solid.png')} />
                    <Text style={{ fontSize: 12, fontFamily: 'roboto-regular', letterSpacing: 1.1 }}>Simulador</Text>
                </Pressable>
            </View>
            <View style={{ flex: 1 }}>
                <Pressable style={styles.viewCaixas} onPress={investimentosReturn}>
                    <Image style={styles.imgs} source={require('../assets/icons/chart-line-solid.png')} />
                    <Text style={{ fontSize: 12, fontFamily: 'roboto-regular', }}>Investimentos</Text>
                </Pressable>
            </View>
        </View >
    </View>
};
export default Footer;

const styles = StyleSheet.create({
    viewTotal: {
        borderTopColor: Colors.cinzaClaro,
        borderTopWidth: 1,
        height: 76,
        alignSelf: 'center',
        paddingVertical: 4,
        paddingHorizontal: 16,
        flexDirection: 'row',
        width: '100%',
    },
    viewCaixas: {
        flex: 1,
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingTop: 8
    },
    imgs: {
        marginTop: 5,
        width: 30,
        height: 25,
    },
})