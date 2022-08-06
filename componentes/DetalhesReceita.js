import { View, Text, StyleSheet, TextInput } from 'react-native'


import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';

function DetalhesReceita() {

    return <View style={{ marginTop: 30, flex: 1 }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> Nome Receita</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                <View style={{ backgroundColor: Colors.vermelhoGoogle, paddingHorizontal: 10, paddingVertical: 3, marginVertical: 6, width: 80 }}>
                    <Text style={{ color: Colors.branco, fontSize: 14, }}>X Salário</Text>
                </View>
                <View style={{ backgroundColor: Colors.cinzaContorno, marginLeft: 6, paddingLeft: 6, borderRadius: 20, marginVertical: 8, width: 20 }}>
                    <Text style={{ color: Colors.branco, fontSize: 14, }}>+</Text>
                </View>
            </View>
        </View>
        <View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Descrição</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'Descrição opcional da despesa'} />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Data</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'23/03'} keyboardType='numeric' maxLength={5} />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Período</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'Mensal'} />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Valor</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.textoPretoDentro}>R$</Text>
                    <TextInput style={styles.textoPretoDentro} defaultValue={'142,54'} keyboardType='numeric' />
                </View>
            </View>
            <View style={{ alignItems: 'center', padding: 6 }}>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={styles.botaoInterno} styleTexto={patternStyle.textoBotao}>Excluir Receita</BotaoInicio>
            </View>
        </View>
    </View >
}

export default DetalhesReceita;

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
        letterSpacing: 1.4
    },
    textoXTopo: {
        fontSize: 40,
        color: '#707070',
    },
    textoTracoCat: {
        fontSize: 40,
        color: Colors.preto,
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