import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native'


import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';

function FiltrosMovimentacao() {

    return <View style={{ marginTop: 30, flex: 1 }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> Receita 1</Text>
            <View style={{ position: 'absolute', right: 0, paddingRight: 10 }}>
                <Text style={styles.textoXTopo}> X </Text>
            </View>
        </View>
        <View>
            <View style={styles.viewAdjacente}>
                <View style={styles.viewBarras3}>
                    <Pressable>
                        <Image style={styles.barras3} source={require('../assets/icons/bars-solid.png')} />
                    </Pressable>
                </View>
                <View style={{ marginLeft: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image style={{height: 16, width: 14, marginTop:3, marginLeft: 4,}} source={require('../assets/icons/square-check-solid.png')} />
                        <Text style={styles.textoCinza}> Categoria</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                        <View style={{ backgroundColor: Colors.verdePrincipal, paddingHorizontal: 8, paddingVertical: 3, marginVertical: 6}}>
                            <Text style={{ color: Colors.branco, fontSize: 14, }}>X Salário</Text>
                        </View>
                    </View>
                </View>
                <View style={{ position: 'absolute', right: 0, paddingRight: 2 }}>
                    <Text style={styles.textoTracoCat}> &gt; </Text>
                </View>
            </View>
            <View style={styles.viewAdjacente}>
                <View style={styles.viewBarras3}>
                    <Pressable>
                        <Image style={styles.barras3} source={require('../assets/icons/bars-solid.png')} />
                    </Pressable>
                </View>
                <View style={{ marginLeft: 5 }}>
                    <View style={{ flexDirection: 'row' }}>
                            <Image style={{height: 16, width: 14, marginTop:3, marginLeft: 4,}} source={require('../assets/icons/square-check-solid.png')} />
                        <Text style={styles.textoCinza}> Categoria</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 4 }}>
                        <TextInput style={styles.textoPretoDentro} defaultValue={'23/03'} keyboardType='numeric' maxLength={5} />
                    </View>
                </View>
                <View style={{ position: 'absolute', right: 0, paddingRight: 2 }}>
                    <Text style={styles.textoTracoCat}> &gt; </Text>
                </View>
                </View>
            <View>
                <View style={{ alignItems: 'center', padding: 6 }}>
                    <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Filtrar</BotaoInicio>
                </View>
            </View>
        </View>
    </View>
}

export default FiltrosMovimentacao;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'column',
        paddingTop: 24,
        paddingBottom: 10,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 6,
        alignContent: 'center'
    },
    textoTopo: {
        fontFamily: 'roboto-regular',
        fontSize: 26,
        color: Colors.preto,
        letterSpacing: 1.4,
        marginBottom:10
    },
    viewBarras3: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 6
    },
    barras3: {
        width: 36,
        height: 36,
    },
    textoXTopo: {
        fontSize: 40,
        color: '#707070',
        marginTop: 10
    },
    textoTracoCat: {
        fontSize: 40,
        color: Colors.preto,
        marginTop: 6
    },
    botaoInterno: {
        backgroundColor: Colors.verdePrincipal,
        paddingVertical: 10
    },
    viewAdjacente: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 4,
        flexDirection: 'row'
    },
    textoCinza: {
        fontSize: 15,
        fontFamily: 'roboto-regular',
        color: Colors.cinzaContorno,
        letterSpacing: 1.2,
    },
    textoPretoDentro: {
        fontSize: 22,
        letterSpacing: 1.3,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginTop: 4
    },
    textoPretoDentroInput: {
        width: '70%',
        fontSize: 25,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginTop: 4
    }
})