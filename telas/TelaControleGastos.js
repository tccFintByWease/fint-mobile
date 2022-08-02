import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';

function TelaControleGastos() {

    function verMaisReceiver() {
        console.log('Ver mais');
    };
    function setinha1Receiver() {
        console.log('>1');
    };
    function setinha2Receiver() {
        console.log('>2');
    };
    function setinha3Receiver() {
        console.log('>3');
    };
    function despesasReceiver() {
        console.log('Despesas');
    };
    function receitasReceiver() {
        console.log('Receitas');
    };
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 110, marginBottom: 76 }}>
                <View style={patternStyle.rootContainer2}>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>
                <View style={{ flex: 1, borderBottomColor: Colors.cinzaClaro, borderBottomWidth: 1, borderTopColor: Colors.cinzaClaro, borderTopWidth: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderRightColor: Colors.cinzaClaro, borderRightWidth: 1, alignItems: 'center', padding: 14 }}>
                        <Text style={{ fontSize: 16, color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Receita Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ 2469,23
                        </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', padding: 14 }}>
                        <Text style={{ fontSize: 16, color: Colors.preto, letterSpacing: 1.5, textAlign: 'center' }}>
                            Receita Mensal
                        </Text>
                        <Text style={{ fontSize: 22, color: Colors.verdePrincipal, letterSpacing: 1.2, textAlign: 'center', marginTop: 10 }}>
                            R$ 2469,23
                        </Text>
                    </View>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Receitas e Despesas
                    </Text>
                </View>
                <View style={{ borderTopColor: Colors.cinzaClaro, borderTopWidth: 1, flex: 1, flexDirection: 'row' }}>
                    <Pressable style={{ flex: 1, }} onPress={receitasReceiver}>
                        <View style={{ borderBottomColor: Colors.verdePrincipal, borderBottomWidth: 1, alignItems: 'center', paddingBottom: 6, padding: 6 }}>
                            <Text style={{ color: Colors.verdePrincipal, fontSize: 15, textAlign: 'center' }}>
                                Receitas
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={{ flex: 1, }} onPress={despesasReceiver}>
                        <View style={{ borderBottomColor: Colors.preto, borderBottomWidth: 1, alignItems: 'center', paddingBottom: 6, padding: 6 }}>
                            <Text style={{ color: Colors.preto, fontSize: 15, textAlign: 'center' }}>
                                Despesas
                            </Text>
                        </View>
                    </Pressable>
                </View>
                <View>
                    <View style={styles.boxList}>
                        <Image source={require('../assets/icons/house-solid.png')} style={styles.imgBall} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textoGrande}>Receita 1</Text>
                            <Text style={styles.textoPequeno}>Valor: R$ 142,54</Text>
                        </View>
                        <View style={{ position: 'absolute', right: 0 }}>
                            <Pressable onPress={setinha1Receiver}>
                                <Text style={styles.textoEnorme}> &gt; </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={require('../assets/icons/house-solid.png')} style={styles.imgBall} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textoGrande}>Receita 2</Text>
                            <Text style={styles.textoPequeno}>Valor: R$ 37,89</Text>
                        </View>
                        <View style={{ position: 'absolute', right: 0 }}>
                            <Pressable onPress={setinha2Receiver}>
                                <Text style={styles.textoEnorme}> &gt; </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.boxList}>
                        <Image source={require('../assets/icons/house-solid.png')} style={styles.imgBall} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textoGrande}>Receita 3</Text>
                            <Text style={styles.textoPequeno}>Valor: R$ 50,20</Text>
                        </View>
                        <View style={{ position: 'absolute', right: 0 }}>
                            <Pressable onPress={setinha3Receiver}>
                                <Text style={styles.textoEnorme}> &gt; </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Pressable onPress={verMaisReceiver}>
                            <View style={{ flex: 1, paddingVertical: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 20, letterSpacing: 1.5, color: Colors.verdePrincipal, marginLeft: 10 }}>
                                        Ver mais
                                    </Text>
                                </View>
                                <View style={{ position: 'absolute', right: 0 }}>
                                    <Text style={{ fontSize: 32, fontFamily: 'Nunito-SemiBold', color: Colors.verdePrincipal }}> &gt; </Text>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </ScrollView >
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <Footer />
            </View>
        </View >
    );
}

export default TelaControleGastos;

const styles = StyleSheet.create({
    alertaBox: {
        width: '92%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 12,
        paddingVertical: 20,
        elevation: 5
    },
    botaoInterno: {
        backgroundColor: Colors.verdeSecundario,
        paddingVertical: 10
    },
    viewGrafico: {
        backgroundColor: '#F3F3F3',
        height: 260,
        width: '100%',
        alignContent: 'center'
    },
    textoGrafico: {
        color: Colors.verdePrincipal,
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 96
    },
    boxTitle: {
        marginTop: 20,
        marginLeft: 10,
        paddingBottom: 8
    },
    textTitle: {
        fontSize: 28,
        color: Colors.preto,
        letterSpacing: 1.8,
        fontFamily: 'roboto-regular',
    },
    imgBall: {
        height: 60,
        width: 60,
        padding: 10
    },
    textoEnorme: {
        fontSize: 34,
        fontFamily: 'Nunito-SemiBold',
        marginTop: 16
    },
    textoGrande: {
        color: Colors.preto,
        fontSize: 20,
        marginLeft: 20,
        marginTop: 4,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
    },
    textoPequeno: {
        color: Colors.cinzaContorno,
        fontSize: 16,
        marginVertical: 8,
        marginLeft: 20,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
    },
    boxList: {
        flexDirection: 'row',
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        padding: 10
    },
    botaoExterno: {
        width: '40%'
    },
    xButton: {
        height: 50,
        width: 40,
        marginRight: 6,
        color: Colors.branco,
        fontSize: 35,
        fontFamily: 'Nunito-SemiBold',
    },
    botaoAlerta: {
        borderRadius: 30,
        backgroundColor: Colors.branco,
        width: 200,
        height: 40,
        marginTop: 12,
        padding: 7
    },
    txtBotaoAlerta: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        textAlign: 'center'
    }
})