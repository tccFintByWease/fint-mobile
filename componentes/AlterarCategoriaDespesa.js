import { View, Text, StyleSheet, TextInput } from 'react-native'


import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';

function AlterarCategoriaDespesa() {

    return <View style={{ marginTop: 30, flex: 1 }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> Despesa 1</Text>
            <View style={{ position: 'absolute', right: 0, paddingRight: 10 }}>
                <Text style={styles.textoXTopo}> X </Text>
            </View>
        </View>
        <View>
            <View style={styles.viewAdjacente}>
            <Text style={styles.textoCinza}>Categoria
            </Text>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <View style={{ backgroundColor: Colors.verdePrincipal, paddingHorizontal: 10, paddingVertical: 3, marginVertical: 6, width: 80 }}>
                        <Text style={{ color: Colors.branco, fontSize: 14, }}>X Salário</Text>
                    </View>
                    <View style={{ position: 'absolute', right: 0, paddingRight: 2 }}>
                        <Text style={styles.textoTracoCat}> &gt; </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewTopo}>
                <Text style={styles.textoTopo}> Categorias</Text>
            </View>
            <View style={styles.viewAdjacente}>
                    <Text style={styles.textoCinza}>Nome</Text>
                    <View style={{flexDirection:'row'}}>
                        <TextInput style={styles.textoPretoDentro} defaultValue={'Salário'} />
                        <View style={{ position: 'absolute', right: 0, paddingRight: 2 }}>
                            <Text style={styles.textoTracoCat}> &gt; </Text>
                        </View>
                    </View>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Cor</Text>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={{fontSize: 22, letterSpacing: 1.3, fontFamily: 'roboto-regular', color: Colors.verdePrincipal, marginTop: 4}} defaultValue={'Verde'} />
                    <View style={{ position: 'absolute', right: 0, paddingRight: 2 }}>
                        <Text style={styles.textoTracoCat}> &gt; </Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewAdjacente}>
                <View style={{ alignItems: 'center', padding: 6 }}>
                    <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Excluir Receita</BotaoInicio>
                </View>
            </View>
        </View>
    </View>
}

export default AlterarCategoriaDespesa;

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
    textoXTopo: {
        fontSize: 40,
        color: '#707070',
        marginTop: 10
    },
    textoTracoCat: {
        fontSize: 40,
        color: Colors.preto,
        marginTop: -10
    },
    botaoInterno: {
        backgroundColor: Colors.vermelhoGoogle,
        paddingVertical: 10
    },
    viewAdjacente: {
        paddingHorizontal: 6,
        paddingTop: 2,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 4
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