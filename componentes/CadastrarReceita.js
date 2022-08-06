import { View, Text, StyleSheet, TextInput } from 'react-native'


import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';

function CadastrarReceita() {

    return <View style={{ marginTop: 30, flex: 1 }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}> Cadastrar Receita</Text>
            <View style={{ position: 'absolute', right: 0, paddingRight: 10 }}>
                <Text style={styles.textoXTopo}> X </Text>
            </View>
        </View>
        <View style={{ top: 0 }}>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Categoria</Text>
                <View style={{ backgroundColor: Colors.verdePrincipal, paddingHorizontal: 10, color: Colors.branco, fontSize: 16, paddingVertical: 1, marginVertical: 6, width: 80 }}>
                    <Text>X Salário</Text>
                </View>
                <View style={{ position: 'absolute', right: 0, paddingRight: 2 }}>
                    <Text style={styles.textoTracoCat}> &gt; </Text>
                </View>
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Nome</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'Nome da Receita'} />
            </View>
            <View style={styles.viewAdjacente}>
                <Text style={styles.textoCinza}>Descrição</Text>
                <TextInput style={styles.textoPretoDentro} defaultValue={'Descrição opcional da receita'} />
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
                    <TextInput style={styles.textoPretoDentro} defaultValue={'0,00'} keyboardType='numeric' />
                </View>
            </View>
            <View style={{ alignItems: 'center', padding: 6 }}>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Ver Mais</BotaoInicio>
            </View>
        </View>
    </View>
}

export default CadastrarReceita;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'row',
        paddingVertical: 24,
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
    viewAdjacente: {
        paddingHorizontal: 6,
        paddingTop: 2,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        width: '100%',
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