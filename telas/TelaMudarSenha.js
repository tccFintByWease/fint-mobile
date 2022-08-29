import { View, Image, TextInput, StyleSheet, Pressable, } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';
import React from 'react';

class TelaMudarSenha extends React.Component {
    render(){
        return (
            <View style={patternStyle.rootContainer}>
                <View style={patternStyle.caixaLogo}>
                    <Image
                        style={patternStyle.image}
                        source={require('../assets/images/logo_preto.png')}
                    />
                </View>
                <View style={patternStyle.inputContainer}>
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
                            <Pressable>
                                <View>
                                    <Image source={require('../assets/icons/eye-solid.png')} style={{ width: 26, height: 23, marginLeft: 5 }}></Image>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.inputButton}>
                        <View style={{ flex: 6 }}>
                            <TextInput
                                style={styles.input}
                                maxLength={50}
                                keyboardType='visible-password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                placeholder='Confirme a senha'
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Pressable>
                                <View>
                                    <Image source={require('../assets/icons/eye-solid.png')} style={{ width: 40, height: 34, marginLeft: 15 }}></Image>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Alterar Senha</BotaoInicio>
                </View>
                <View style={patternStyle.rodapeLogin}>
                    <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                </View>
            </View>
        );
    }
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

export default TelaMudarSenha;