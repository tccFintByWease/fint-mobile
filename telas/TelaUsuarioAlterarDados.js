import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../store/schemas/sign-up-schemas';
import Colors from '../constantes/colors'
import patternStyle from '../constantes/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';
import {UPDATE_STATUS_USER_URL, UPDATE_USER_URL} from '../store/api-urls';
import BotaoInicio from '../componentes/BotaoInicio';
import Aviso from '../componentes/Aviso';

function TelaUsuarioAlterarDados({navigation}) {
    function voltar(){
        navigation.goBack();
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema)
    })

    async function alterarUsuario(data){
        try {
            // const response = await axios.post(UPDATE_USER_URL, data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    async function excluirUsuario(data){
        try {
            delete data.nomeUsuario;
            delete data.cpfUsuario;
            delete data.foneUsuario;
            delete data.dataNascUsuario;
            data.statusUsuario = 'inativo';
            // const response = await axios.post(UPDATE_STATUS_USER_URL, data);
            console.log(data);
            setModalVisible(false);
        } catch (error) {
            console.log(error);
        }
    }

    function abrirAlterarSenha(){
        navigation.navigate('recuperacaoLink');
    }

    const [modalVisible, setModalVisible] = useState(false);

    let nomeUsuario = 'André';
    return(
        <SafeAreaView style={{flex: 1, paddingTop: 40}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={styles.viewTopo}>
                        <View style={{flex: 1}}>
                            <Text style={styles.textoTopo}>Olá, {nomeUsuario}</Text>
                        </View>
                        <Pressable onPress={voltar}>
                            <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                                <Ionicons name='close' size={30} color='black'/>
                            </View>
                        </Pressable>
                    </View>
                    <View style={{padding: 10, margin: 10}}>
                        <View style={styles.viewAdjacente}>
                            <Text style={styles.textoCinza}>Nome</Text>
                            <Controller
                                control={control}
                                name="nomeUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[patternStyle.input2, {fontSize: 14}]}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Nome Completo"
                                        maxLength={200}
                                    />
                                )}
                            />
                            {errors.nomeUsuario && <Text style={patternStyle.labelError}>{errors.nomeUsuario?.message}</Text>}
                        </View>
                        <View style={styles.viewAdjacente}>
                            <Text style={styles.textoCinza}>Email</Text>
                            <Controller
                                control={control}
                                name="emailUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={[patternStyle.input2, {fontSize: 14}]}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Email"
                                        maxLength={100}
                                    />
                                )}
                            />
                            {errors.emailUsuario && <Text style={patternStyle.labelError}>{errors.emailUsuario?.message}</Text>}
                        </View>
                        <View style={styles.viewAdjacente}>
                            <Text style={styles.textoCinza}>CPF</Text>
                            <Controller
                                control={control}
                                name="cpfUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInputMask
                                        style={[patternStyle.input2, {fontSize: 14}]}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="CPF"
                                        type="cpf"
                                    />
                                )}
                            />
                            {errors.cpfUsuario && <Text style={patternStyle.labelError}>{errors.cpfUsuario?.message}</Text>}
                        </View>
                        <View style={styles.viewAdjacente}>
                            <Text style={styles.textoCinza}>Telefone</Text>
                            <Controller
                                control={control}
                                name="foneUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInputMask
                                        style={[patternStyle.input2, {fontSize: 14}]}
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
                        <View style={styles.viewAdjacente}>
                            <Text style={styles.textoCinza}>Data de Nascimento</Text>
                            <Controller
                                control={control}
                                name="dataNascUsuario"
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInputMask
                                        style={[patternStyle.input2, {fontSize: 14}]}
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
                        </View>
                    </View>
                    <View style={{marginVertical: 25}}>
                        <View style={{display: 'flex', flexDirection: 'row'}}> 
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <BotaoInicio 
                                    onPress={handleSubmit(alterarUsuario)}
                                    styleExterno={patternStyle.botaoExterno} 
                                    styleCorpo={styles.botaoInterno} 
                                    styleTexto={patternStyle.textoBotao}>
                                        Alterar
                                </BotaoInicio>
                            </View>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <BotaoInicio 
                                    onPress={abrirAlterarSenha}
                                    styleExterno={patternStyle.botaoExterno} 
                                    styleCorpo={[styles.botaoInterno, {backgroundColor: Colors.verdeSecundario}]} 
                                    styleTexto={patternStyle.textoBotao}>
                                        Alterar Senha
                                </BotaoInicio>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView >
    );
}

export default TelaUsuarioAlterarDados;

const styles = StyleSheet.create({
    viewTopo: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginVertical: 30,
        display: 'flex',
        flexDirection: 'row'
    },
    textoTopo: {
        fontFamily: 'roboto-bold',
        fontSize: 26,
        color: Colors.preto,
        letterSpacing: 1.4
    },
    viewAdjacente: {
        paddingHorizontal: 6,
        paddingVertical: 6,
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
    textoPreto: {
        fontSize: 22,
        letterSpacing: 1.3,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginVertical: 12
    },
    textoVermelho: {
        fontSize: 22,
        letterSpacing: 1.3,
        fontFamily: 'roboto-regular',
        color: Colors.vermelhoGoogle,
        marginVertical: 12
    },
    textoPretoDentroInput: {
        width: '70%',
        fontSize: 25,
        letterSpacing: 1.5,
        fontFamily: 'roboto-regular',
        color: Colors.preto,
        marginTop: 4
    },
    botaoInterno: {
        backgroundColor: Colors.verdePrincipal,
        paddingVertical: 10,
    },
})