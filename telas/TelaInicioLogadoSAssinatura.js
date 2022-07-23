import { View, Image, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';

function TelaInicioLogadoSAssinatura() {

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
    function xReceiver() {
        console.log('X');
    };
    function assinarReceiver() {
        console.log('Assinar');
    };
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 110, marginBottom: 76 }}>
                <View style={patternStyle.rootContainer2}>
                    <View style={styles.alertaBox}>
                        <View style={{ position: 'absolute', right: 0, top: 0 }}>
                            <Pressable onPress={xReceiver}>
                                <View>
                                    <Text style={styles.xButton} > X </Text>
                                </View>
                            </Pressable>
                        </View>
                        <Text style={{ width: '75%', fontFamily: 'roboto-regular', letterSpacing: 1.5, fontSize: 22, color: Colors.branco, paddingBottom: 8, fontWeight: '600' }}>
                            Gráficos Exclusivos
                        </Text>
                        <Text style={{ fontFamily: 'roboto-regular', letterSpacing: 1.1, fontSize: 16, color: Colors.branco, fontWeight: '600' }}>
                            Assine o Plano Premium para liberar novas
                            opções de gráfico
                        </Text>
                        <View style={styles.botaoAlerta}>
                            <Pressable onPress={assinarReceiver}>
                                <View>
                                    <Text style={styles.txtBotaoAlerta}>Assinar</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.viewGrafico}>
                        <Text style={styles.textoGrafico}> Gráfico</Text>
                    </View>
                </View>
                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Últimos Investimentos
                    </Text>
                </View>
                <View>
                    <View style={styles.boxList}>
                        <Image source={require('../assets/icons/house-solid.png')} style={styles.imgBall} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.textoGrande}>Nome do Investimento</Text>
                            <Text style={styles.textoPequeno}>Investimento: R$ 37,89</Text>
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
                            <Text style={styles.textoGrande}>Nome do Investimento</Text>
                            <Text style={styles.textoPequeno}>Investimento: R$ 37,89</Text>
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
                            <Text style={styles.textoGrande}>Nome do Investimento</Text>
                            <Text style={styles.textoPequeno}>Investimento: R$ 37,89</Text>
                        </View>
                        <View style={{ position: 'absolute', right: 0 }}>
                            <Pressable onPress={setinha3Receiver}>
                                <Text style={styles.textoEnorme}> &gt; </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <BotaoInicio onPress={verMaisReceiver} styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}> Ver Mais </BotaoInicio>
                    </View>
                </View>
            </ScrollView >
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <Footer />
            </View>
        </View >
    );
}

export default TelaInicioLogadoSAssinatura;

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
        marginTop: 15,
        alignContent: 'center'
    },
    textoGrafico: {
        color: Colors.verdePrincipal,
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 96
    },
    boxTitle: {
        marginTop: 42,
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
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 1,
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