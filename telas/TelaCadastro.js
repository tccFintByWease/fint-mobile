import React from "react";
import axios from 'axios';
import api from "../services/api";
import { useState } from "react";
import { View, Image, Text, Switch, Linking, Modal, Alert, Pressable, StyleSheet, TextInput, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from "react-native";

import Colors from "../constantes/colors";
import BotaoInicio from "../componentes/BotaoInicio";
import Subtitulo from "../componentes/Subtitulo";
import Aviso from '../componentes/Aviso';
import InputSenha from '../componentes/InputSenha';
import patternStyle from '../constantes/style';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SIGN_UP_URL } from "../store/api-urls";
import { LOOK_FOR_EMAIL_URL } from "../store/api-urls";
import { UPDATE_USER_URL } from "../store/api-urls";
import { getTodayDate } from "../utils/date-utils";
import { TextInputMask } from 'react-native-masked-text';
import { signUpSchema } from '../store/schemas/sign-up-schemas';

function TelaCadastro({ navigation }) {
    //Funções de abertura de telas
    function abreLogin() {
        navigation.navigate('login');
    }

    //Botão Switch
    const [estaHabilitado, setEstaHabilitado] = useState(false);
    const mexerBotao = () => setEstaHabilitado(previousState => !previousState);

    //Botão de Cadastro
    const [modalVisible, setModalVisible] = useState(false);

    //Formulário de Cadastro
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema)
    })

    async function cadastrarUsuario(data, { navigation }) {
        try {
            delete data.confirmarSenha;

            data.idMoeda = 1;
            data.statusUsuario = "Ativo"
            data.dataCadastroUsuario = getTodayDate();

            let dataNascUsuario = data.dataNascUsuario.toLocaleDateString();

            console.log(dataNascUsuario);

            const ano = data.dataNascUsuario.getFullYear();
            const dia = dataNascUsuario.split('/')[0];
            const mes = dataNascUsuario.split('/')[1];

            console.log(ano);

            dataNascUsuario = `${ano}-${mes}-${dia}`;

            console.log(dataNascUsuario);

            data.dataNascUsuario = dataNascUsuario;
            const response1 = await axios.post(LOOK_FOR_EMAIL_URL, data);

            if (data.emailUsuario === response1.data.result.emailUsuario && response1.data.result.statusUsuario === "Inativo") {

                Alert.alert("Essa conta foi deletada!");

            }
            if (data.emailUsuario === response1.data.result.emailUsuario && response1.data.result.statusUsuario === "Ativo") {

                Alert.alert("Essa conta já existe!");

            }
            if (data.emailUsuario !== response1.data.result.emailUsuario) {

                const response = await axios.post(SIGN_UP_URL, data);
                Alert.alert("conta criada!")
                navigation.navitate('dinheiroMoeda')
                console.log(response)

            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={patternStyle.rootContainer}>
                    <View style={patternStyle.caixaLogo}>
                        <Image
                            style={patternStyle.image}
                            source={require('../assets/images/logo_preto.png')}
                        />
                    </View>
                    <View style={patternStyle.inputContainer}>
                        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center' }}>
                            <Controller
                                control={control}
                                name="nomeUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={patternStyle.input}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Nome Completo"
                                        maxLength={200}
                                    />
                                )}
                            />
                            {errors.nomeUsuario && <Text style={patternStyle.labelError}>{errors.nomeUsuario?.message}</Text>}
                            <Controller
                                control={control}
                                name="emailUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={patternStyle.input}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Email"
                                        maxLength={100}
                                    />
                                )}
                            />
                            {errors.emailUsuario && <Text style={patternStyle.labelError}>{errors.emailUsuario?.message}</Text>}
                            <Controller
                                control={control}
                                name="senhaUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputSenha 
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder='Senha'
                                    />
                                )}
                            />
                            {errors.senhaUsuario && <Text style={patternStyle.labelError}>{errors.senhaUsuario?.message}</Text>}
                            <Controller
                                control={control}
                                name="confirmarSenha"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputSenha 
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder='Confirmar Senha'
                                    />
                                )}
                            />
                            {errors.confirmarSenha && <Text style={patternStyle.labelError}>{errors.confirmarSenha?.message}</Text>}
                            <Controller
                                control={control}
                                name="cpfUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInputMask
                                        style={patternStyle.input}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="CPF"
                                        type="cpf"
                                    />
                                )}
                            />
                            {errors.cpfUsuario && <Text style={patternStyle.labelError}>{errors.cpfUsuario?.message}</Text>}
                            <Controller
                                control={control}
                                name="dataNascUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInputMask
                                        style={patternStyle.input}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Data de nascimento"
                                        maxLength={15}
                                        type='datetime'
                                        options={{
                                            format: 'DD/MM/YYYY'
                                        }}
                                    />
                                )}
                            />
                            {errors.dataNascUsuario && <Text style={patternStyle.labelError}>{errors.dataNascUsuario?.message}</Text>}
                            <Controller
                                control={control}
                                name="foneUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInputMask
                                        style={patternStyle.input}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Celular"
                                        type='cel-phone'
                                        options={{
                                            maskType: 'BRL',
                                            withDDD: true,
                                            dddMask: '(11) '
                                        }}
                                    />
                                )}
                            />
                            {errors.foneUsuario && <Text style={patternStyle.labelError}>{errors.foneUsuario?.message}</Text>}
                        </View>
                        <View style={{ flexDirection: 'row', width: '85%' }}>
                            <View style={{ flexDirection: 'row', width: '85%' }}>
                                <Switch
                                    trackColor={{ false: Colors.cinzaContorno, true: Colors.verdeSecundario }}
                                    thumbColor={estaHabilitado ? Colors.verdePrincipal : Colors.branco}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={mexerBotao}
                                    value={estaHabilitado}
                                />
                                <Text
                                    onPress={() => { Linking.openURL('https://fint-48a30.web.app/documentacao'); }}
                                    style={[patternStyle.texto, { fontSize: 15 }]}>
                                    Concordo com os Termos de Uso e Políticas de Privacidade
                                </Text>
                            </View>
                        </View>
                        <BotaoInicio
                            onPress={estaHabilitado ? handleSubmit(cadastrarUsuario) : () => setModalVisible(true)}
                            styleExterno={patternStyle.botaoExterno}
                            styleCorpo={patternStyle.botaoInterno}
                            styleTexto={patternStyle.textoBotao}>
                            Cadastrar-se
                        </BotaoInicio>
                        <View style={patternStyle.centeredView}>
                            <Aviso backgroundColor={Colors.verdePrincipal} nomeIcone='checkmark-circle' modalVisible={modalVisible} setModalVisible={setModalVisible}>
                                <Text style={patternStyle.textStyle}>Concorde com Termos de Uso e Políticas de Privacidade para concluir seu cadastro!</Text>
                            </Aviso>
                        </View>
                    </View>
                    <View style={patternStyle.caixaTexto}>
                        <Text onPress={abreLogin} style={patternStyle.texto}>Já possui uma conta? Conecte-se</Text>
                    </View>
                    <View style={[patternStyle.rodapeLogin, { marginTop: 40 }]}>
                        <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
}

export default TelaCadastro;

const styles = StyleSheet.create({

});