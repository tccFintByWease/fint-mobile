import { View, Text, StyleSheet } from 'react-native'


import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';

function ConfirmMPDespesa() {

    return <View style={{ marginTop: 30, flex: 1, width: '84%', backgroundColor: Colors.branco, alignContent: 'center', marginHorizontal: '8%', paddingHorizontal: '5%', paddingVertical: 26, }}>
        <View style={styles.viewTopo}>
            <Text style={styles.textoTopo}>
                <Text>A despesa</Text>
                <Text style={{ fontWeight: 'bold' }}> Nome da Despesa </Text>
                <Text>foi planejada para hoje, 15 de agosto de 2022.</Text>
            </Text>
        </View>
        <View style={{ alignItems: 'center', padding: 6 }}>
            <BotaoInicio styleExterno={styles.botaoExterno} styleCorpo={styles.botaoInterno1} styleTexto={styles.textoBotao}>Cadastrar</BotaoInicio>
        </View>
        <View style={{ alignItems: 'center', padding: 6 }}>
            <BotaoInicio styleExterno={styles.botaoExterno2} styleCorpo={styles.botaoInterno2} styleTexto={styles.textoBotao2}>Alterar Data</BotaoInicio>
        </View>
        <View style={{ alignItems: 'center', padding: 6 }}>
            <BotaoInicio styleExterno={styles.botaoExterno3} styleCorpo={styles.botaoInterno2} styleTexto={styles.textoBotao3}>Excluir</BotaoInicio>
        </View>
    </View>
}

export default ConfirmMPDespesa;

const styles = StyleSheet.create({
    viewTopo: {
        flexDirection: 'row',
        paddingVertical: 24,
        paddingHorizontal: 6,
        alignContent: 'center'
    },
    textoTopo: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        color: Colors.preto,
        letterSpacing: 1.4,
        textAlign: 'center',
        
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
    },
    botaoExterno: {
        width: '100%',
    },
    botaoExterno2: {
        width: '100%',
        borderColor: Colors.verdePrincipal,
        borderWidth: 2,
    },
    botaoExterno3: {
        width: '100%',
        borderColor: Colors.vermelhoGoogle,
        borderWidth: 2
    },
    botaoInterno1: {
        backgroundColor: Colors.verdePrincipal,
        paddingVertical: 10
    },
    botaoInterno2: {
        backgroundColor: Colors.branco,
        paddingVertical: 10
    },
    textoBotao: {
        fontSize: 18,
        color: Colors.branco,
    },
    textoBotao2: {
        fontSize: 18,
        color: Colors.verdePrincipal
    },
    textoBotao3: {
        fontSize: 18,
        color: Colors.vermelhoGoogle
    }
})