import { View, Image, TextInput, StyleSheet, Pressable, Text } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';

function TelaSenhaLogin() {
    function olhoReceiver() {
        console.log('olho')
    }
    function loginReceiver() {
        console.log('login')
    }
    function senhaReceiver() {
        console.log('senha')
    }

    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={styles.textoBox}>
                    <Text style={styles.text}>
                        Insira sua senha para acessar o
                        aplicativo.
                    </Text>
                </View>
                <View style={styles.inputButton}>
                    <View style={{ flex: 6 }}>
                        <TextInput
                            style={styles.input}
                            maxLength={50}
                            keyboardType='visible-password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder='Senha'
                        />
                    </View>

                    <View style={{ flex: 1 }}>
                        <Pressable onPress={olhoReceiver}>
                            <View>
                                <Image source={require('../assets/icons/eye-solid.png')} style={{ width: 26, height: 23, marginLeft: 5 }}></Image>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.texto}>É possível desativar a camada de proteção há qualquer
                    momento nas configurações do aplicativo. </Text>
                <BotaoInicio onPress={loginReceiver} styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Entrar</BotaoInicio>
                <Pressable onPress={senhaReceiver}>
                    <Text style={styles.texto}>Esqueceu a senha?</Text>
                </Pressable>
            </View>
            <View style={patternStyle.rodapeLogin}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        fontSize: 18,
        color: Colors.preto,
        textAlign: 'left',
        marginLeft: 10,
        paddingHorizontal: 10,
    },
    textoBox: {
        width: '70%',
        marginTop: 16,
        paddingBottom: 30
    },
    texto: {
        textAlign: 'center',
        width: '90%',
        color: Colors.cinzaContorno,
        fontSize: 15,
        marginTop: 10,
        marginBottom: 30
    },
    text: {
        fontSize: 22,
        color: Colors.preto,
        textAlign: 'center',

    },
    inputButton: {
        marginVertical: 5,
        borderRadius: 30,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30,
    }
})

export default TelaSenhaLogin;