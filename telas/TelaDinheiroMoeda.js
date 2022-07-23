import { View, Image, TextInput, Text, StyleSheet } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import Colors from '../constantes/colors';
import patternStyle from '../constantes/style';
import Header from '../componentes/Header';

function TelaDinheiroMoeda() {

    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={styles.textoBox}>
                <Text style={styles.texto}>
                    Cadastre seu saldo inicial e sua
                    moeda padrão.
                </Text>
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={styles.dropText}>
                    <TextInput
                        style={styles.input}
                        maxLength={10}
                        keyboardType='decimal-pad'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='Quantia'
                        placeholderTextColor={Colors.preto}
                        defaultValue='0'
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={4}
                        keyboardType='default'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder='Moeda'
                        placeholderTextColor={Colors.preto}
                        defaultValue='BRL'
                    />
                </View>
                <Text style={patternStyle.texto}>Essas informações poderão ser alteradas há qualquer
                    momento nas configurações do aplicativo. </Text>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Confirmar</BotaoInicio>
            </View>
            <View style={patternStyle.rodapeLogin}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaDinheiroMoeda;

const styles = StyleSheet.create({
    dropText: {
        flexDirection: 'row',
        paddingBottom: 30,
        marginTop: 0
    },
    input: {
        width: 80,
        marginHorizontal: 10,
        height: 40,
        fontSize: 20,
        color: Colors.preto,
        marginVertical: 5,
        textAlign: 'left',
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        textAlign: 'center',
        backgroundColor: Colors.branco,
    },
    texto: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
        color: Colors.preto,
        width: '90%'
    },
    textoBox: {
        width: '90%',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20
    }
})
