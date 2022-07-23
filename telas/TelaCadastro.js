import { View, Image, TextInput, Text } from "react-native";

import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import patternStyle from '../constantes/style';

function TelaCadastro() {
    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={patternStyle.inputContainer}>
                <TextInput
                    style={patternStyle.input}
                    maxLength={50}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email'
                />
                <TextInput
                    style={patternStyle.input}
                    maxLength={50}
                    keyboardType='default'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Nome Completo'
                />
                <TextInput
                    style={patternStyle.input}
                    maxLength={50}
                    keyboardType='visible-password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Senha'
                />
                <TextInput
                    style={patternStyle.input}
                    maxLength={50}
                    keyboardType='visible-password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Confirmar Senha'
                />
                <BotaoInicio styleExterno={patternStyle.botaoExterno} styleCorpo={patternStyle.botaoInterno} styleTexto={patternStyle.textoBotao}>Cadastrar-se</BotaoInicio>
                <Text style={patternStyle.texto}>Ao cadastrar-se, você concorda com nossos Termos de Uso e Políticas de Privacidade</Text>
            </View>
            <View style={patternStyle.caixaTexto}>
                <Text style={patternStyle.texto}>Já possui uma conta? Conecte-se</Text>
            </View>
            <View style={patternStyle.rodapeLogin}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaCadastro;
