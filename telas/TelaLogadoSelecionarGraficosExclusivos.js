import { View, Pressable, Text, ScrollView, StyleSheet } from 'react-native';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';

function TelaLogadoSelecionarGraficosExclusivos() {

    function oReceiver() {
        console.log('owo');
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
            <ScrollView style={{ marginBottom: 76, marginTop: 110 }}>
                <View style={patternStyle.rootContainer2}>
                    <View style={{ width: '100%', paddingLeft: 10 }}>
                        <Text style={styles.textoAnteGrafico}>
                            Selecionar Gráficos
                        </Text>
                    </View>
                    <View style={styles.graficoBox}>
                        <View style={styles.viewTextosGrafico}>
                            <Text style={styles.textoGrafico}> Nome do Gráfico</Text>
                            <Text style={styles.textoNovo}>NOVO</Text>
                            <Text style={styles.textoEnorme}>o</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ marginTop: 30 }}>
                                <Text style={styles.textoGrande}> TESTE AAAAAA </Text>
                            </View>
                            <BotaoInicio styleExterno={styles.botaoFora} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Ativar</BotaoInicio>
                        </View>
                    </View>
                    <View style={styles.graficoBox}>
                        <View style={styles.viewTextosGrafico}>
                            <Text style={styles.textoGrafico}> Nome do Gráfico</Text>
                            <Text style={styles.textoEnormeVerde}>o</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ marginTop: 30 }}>
                                <Text style={styles.textoGrande}> TESTE AAAAAA </Text>
                            </View>
                            <BotaoInicio styleExterno={styles.botaoFora} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Desativar</BotaoInicio>
                        </View>
                    </View>
                    <View style={styles.graficoBox}>
                        <View style={styles.viewTextosGrafico}>
                            <Text style={styles.textoGrafico}> Nome do Gráfico</Text>
                            <Text style={styles.textoEnorme}>o</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ marginTop: 30 }}>
                                <Text style={styles.textoGrande}> TESTE AAAAAA </Text>
                            </View>
                            <BotaoInicio styleExterno={styles.botaoFora} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Ativar</BotaoInicio>
                        </View>
                    </View>
                    <View style={{ height: 50 }}>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}

export default TelaLogadoSelecionarGraficosExclusivos;

const styles = StyleSheet.create({
    alertaBox: {
        width: '92%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 12,
        paddingVertical: 20,
        elevation: 4
    },
    graficoBox: {
        width: '92%',
        backgroundColor: Colors.branco,
        borderRadius: 20,
        marginTop: 30,
        elevation: 6,
        paddingBottom: 20,
        height: 250
    },
    viewTextosGrafico: {
        paddingLeft: 10,
        flexDirection: 'row',
        paddingBottom: 4,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        marginTop: 10,
    },
    textoGrafico: {
        color: Colors.preto,
        fontSize: 22,
        fontFamily: 'roboto-regular',
        letterSpacing: 1.6,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    textoNovo: {
        backgroundColor: Colors.verdePrincipal,
        color: Colors.branco,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginBottom: 2,
        fontFamily: 'roboto-regular',
        marginLeft: 10,
    },
    botaoInterno: {
        backgroundColor: Colors.cinzaContorno,
        paddingVertical: 10
    },
    botaoFora: {
        width: 200,
        marginTop: 110
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
        position: 'absolute',
        right: 0,
        marginRight: 10,
        marginTop: -10
    },
    textoEnormeVerde: {
        fontSize: 34,
        fontFamily: 'Nunito-SemiBold',
        position: 'absolute',
        color: Colors.verdePrincipal,
        right: 0,
        marginRight: 10,
        marginTop: -10
    },
    textoAnteGrafico: {
        fontSize: 28,
        fontFamily: 'roboto-regular',
        letterSpacing: 1.4,
        textAlign: 'left',
        marginTop: 30,
        left: 0
    },
    textoGrande: {
        color: Colors.preto,
        fontSize: 20,
        marginTop: 4,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
        textAlign: 'center'
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