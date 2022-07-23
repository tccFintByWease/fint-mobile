import { View, Image, TextInput, Text, StyleSheet } from 'react-native';

import Colors from '../constantes/colors';
import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';

function TelaCodigoRecuperacao() {
    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder=''
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder=''
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder=''
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder=''
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder=''
                    />
                    <TextInput
                        style={styles.input}
                        maxLength={1}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholder=''
                    />
                </View>
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Inserir Código</BotaoInicio>
                <Text style={patternStyle.texto}>Insira o código enviado pelo método de recuperação
                    selecionado para recuperar sua conta </Text>
            </View>
            <View style={patternStyle.caixaTexto}>
                <Text style={patternStyle.texto}>Criar uma nova conta ou Conectar-se</Text>
            </View>
            <View style={patternStyle.rodapeLogin}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaCodigoRecuperacao;

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 40,
        fontSize: 18,
        color: Colors.preto,
        marginVertical: 5,
        textAlign: 'left',
        borderRadius: 40,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.branco,
        textAlign: 'center',
        marginHorizontal: 4
    },
    inputContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30
    },
})