import { View, Text, StyleSheet, TextInput, Pressable, Keyboard, KeyboardAvoidingView, ScrollView, Alert, TouchableWithoutFeedback } from 'react-native'
import { RadioButton } from 'react-native-paper';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputMask } from 'react-native-masked-text';
import { movimentacaoSchema } from '../store/schemas/movimentacao-schema';

function DetalhesMovimentacao({ navigation }) {
    function voltar() {
        navigation.goBack();
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(movimentacaoSchema)
    });

    // Excluir Movimentação
    async function excluirMovimentacao(data) {
        try {
            let dataMovimentacao = data.dataMovimentacao.toLocaleDateString();

            console.log(dataMovimentacao);

            const ano = data.dataMovimentacao.getFullYear();
            const dia = dataMovimentacao.split('/')[0];
            const mes = dataMovimentacao.split('/')[1];



            console.log(ano);

            dataMovimentacao = `${ano}-${mes}-${dia}`;



            data.dataMovimentacao = dataMovimentacao;

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Alterar Movimentação
    async function alterarMovimentacao(data) {
        try {
            if (checked === 'Receita') {
                data.idTipoMovimentacao = 1;
            } else if (checked === 'Despesa') {
                data.idTipoMovimentacao = 2;
            }
            delete data.tipoMovimentacao;
            let dataMovimentacao = data.dataMovimentacao.toLocaleDateString();

            console.log(dataMovimentacao);

            const ano = data.dataMovimentacao.getFullYear();
            const dia = dataMovimentacao.split('/')[0];
            const mes = dataMovimentacao.split('/')[1];



            console.log(ano);

            dataMovimentacao = `${ano}-${mes}-${dia}`;

            console.log(dataMovimentacao);

            data.dataMovimentacao = dataMovimentacao;

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Radio Button
    const [checked, setChecked] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, height: 300, paddingTop: 100 }} >
                <ScrollView style={{ flex: 1 }}>
                    <View style={{flex: 1}}>
                        <View style={{ flexDirection: 'row', display: 'flex' }}>
                            <View style={{ flex: 4 }}>
                                <Text style={{ marginLeft: 15, fontFamily: 'roboto-bold', fontSize: 24 }}>Alterar/Excluir</Text>
                            </View>
                            <Pressable style={{ flex: 1, alignItems: 'flex-end' }} onPress={voltar}>
                                <View style={{ paddingRight: 15 }}>
                                    <Ionicons name='close' color='black' size={35} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={styles.viewTopo}>
                            <Controller
                                name='descricaoMovimentacao'
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={patternStyle.input2}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Título Movimentação"
                                        maxLength={200}
                                    />
                                )}
                            />
                            {errors.descricaoMovimentacao && <Text style={patternStyle.labelError}>{errors.descricaoMovimentacao?.message}</Text>}
                        </View>
                        <View>
                            <View style={styles.viewAdjacente}>
                                <Text style={styles.textoCinza}>Descrição</Text>
                                <Controller
                                    name='observacaoMovimentacao'
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInput
                                            style={patternStyle.input2}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder="Observação Movimentação (opcional)"
                                            maxLength={300}
                                            multiline={true}
                                        />
                                    )}
                                />
                                {errors.observacaoMovimentacao && <Text style={patternStyle.labelError}>{errors.observacaoMovimentacao?.message}</Text>}
                            </View>
                            <View style={styles.viewAdjacente}>
                                <Text style={styles.textoCinza}>Data</Text>
                                <Controller
                                    name='dataMovimentacao'
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextInputMask
                                            style={patternStyle.input2}
                                            onChangeText={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                            placeholder="Data Movimentação"
                                            maxLength={15}
                                            type='datetime'
                                            options={{
                                                format: 'DD/MM/YYYY'
                                            }}
                                        />
                                    )}
                                />
                                {errors.dataMovimentacao && <Text style={patternStyle.labelError}>{errors.dataMovimentacao?.message}</Text>}
                            </View>
                            <View style={styles.viewAdjacente}>
                                <Text style={styles.textoCinza}>Tipo da Movimentação</Text>
                                <Controller
                                    name='tipoMovimentacao'
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <RadioButton
                                                    value="Receita"
                                                    status={checked === 'Receita' ? 'checked' : 'unchecked'}
                                                    onPress={() => setChecked('Receita')}
                                                />
                                                <Text style={{ alignSelf: 'center' }}>Receita</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <RadioButton
                                                    value="Despesa"
                                                    status={checked === 'Despesa' ? 'checked' : 'unchecked'}
                                                    onPress={() => setChecked('Despesa')}
                                                />
                                                <Text style={{ alignSelf: 'center' }}>Despesa</Text>
                                            </View>
                                        </View>
                                    )}

                                />
                            </View>
                            <View style={styles.viewAdjacente}>
                                <Text style={styles.textoCinza}>Valor</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ alignSelf: 'center', fontSize: 18, marginLeft: 10 }}>R$ </Text>
                                    <Controller
                                        name='valorMovimentacao'
                                        control={control}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInputMask
                                                style={patternStyle.input2}
                                                onChangeText={onChange}
                                                onBlur={onBlur}
                                                value={value}
                                                placeholder="Valor Movimentação"
                                                maxLength={12}
                                                type='money'
                                                options={{
                                                    unit: '',
                                                    precision: 2,
                                                    separator: ',',
                                                    delimiter: '.',
                                                }}
                                            />
                                        )}
                                    />
                                    {errors.valorMovimentacao && <Text style={patternStyle.labelError}>{errors.valorMovimentacao?.message}</Text>}
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', display: 'flex', marginTop: 10, flexDirection: 'row', paddingHorizontal: 25 }}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <BotaoInicio
                                        onPress={handleSubmit(excluirMovimentacao)}
                                        styleExterno={patternStyle.botaoExterno}
                                        styleCorpo={styles.botaoInterno}
                                        styleTexto={patternStyle.textoBotao}>
                                        <Ionicons name='trash-outline' color='white' size={20} />
                                        Excluir
                                    </BotaoInicio>
                                </View>
                                <View style={{ flex: 1, alignItems:'center' }}>
                                    <BotaoInicio
                                        onPress={handleSubmit(alterarMovimentacao)}
                                        styleExterno={patternStyle.botaoExterno}
                                        styleCorpo={[styles.botaoInterno, { backgroundColor: Colors.verdePrincipal }]}
                                        styleTexto={patternStyle.textoBotao}>
                                        <Ionicons name='refresh-outline' color='white' size={20} />
                                        Alterar
                                    </BotaoInicio>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default DetalhesMovimentacao;

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
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
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