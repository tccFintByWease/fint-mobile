import { View, Text, StyleSheet, Alert, TextInput, ScrollView } from 'react-native'
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UPDATE_CATEGORY_URL, DELETE_CATEGORY_URL } from '../store/api-urls';
import axios from 'axios';

function AlterarCategoria({}) {
    const { control, handleSubmit, formState: { errors } } = useForm({});

    async function alterarCategoria(data){
        try {
            data.idUsuario = 1;
            data.corCategoria = cor;
            data.idTipoMovimentacao = idTipoMovimentacao;
            // const response = await axios.post(UPDATE_CATEGORY_URL, data);
            console.log(data);
            setSucessoAlterar(true);
            Alert.alert("Categoria alterada! ✅");
        } catch (error) {
            console.log(error);
        }
    }

    async function excluirCategoria(data){
        try {
            delete data.idTipoMovimentacao;
            delete data.descricaoCategoria;
            delete data.corCategoria;

            data.idCategoria = 1;
            setSucessoExcluir(true);
            // const response = await axios.post(UPDATE_CATEGORY_URL, data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const [sucessoAlterar, setSucessoAlterar] = useState(false);
    const [sucessoExcluir, setSucessoExcluir] = useState(false);

    // Radio Button
    const [idTipoMovimentacao, setIdTipoMovimentacao] = useState(2);
    const [cor, setCor] = useState('#f05a4f');

    return(
        <ScrollView>
            <View style={styles.rootContainer}>
                <View style={styles.viewTopo}>
                    <Text style={styles.textoTopo}>Alterar/Exluir Categoria</Text>
                </View>
                <View>
                    <View style={styles.viewAdjacente}>
                        <Text style={styles.textoCinza}>Nome</Text>
                        <View>
                            <Controller 
                                name='descricaoCategoria'
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={patternStyle.input}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                        placeholder="Nome Categoria"
                                        maxLength={50}
                                        defaultValue={'Teste'}
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.viewAdjacente}>
                        <Text style={styles.textoCinza}>Cor</Text>
                        <View style={{marginTop: 5}}>
                            <Controller 
                                name='corCategoria'
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={{flexDirection: 'row', display: 'flex'}}>
                                        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f05a4f', borderRadius: 15, marginHorizontal: 3}}>
                                            <RadioButton
                                                value="#f05a4f"
                                                status={cor === '#f05a4f' ? 'checked' : 'unchecked'}
                                                onPress={() => setCor('#f05a4f')}
                                            />
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f5bc38', borderRadius: 15, marginHorizontal: 3}}>
                                            <RadioButton
                                                value="#f5bc38"
                                                status={cor === '#f5bc38' ? 'checked' : 'unchecked'}
                                                onPress={() => setCor('#f5bc38')}
                                            />
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f0ed59', borderRadius: 15, marginHorizontal: 3}}>
                                            <RadioButton
                                                value="#f0ed59"
                                                status={cor === '#f0ed59' ? 'checked' : 'unchecked'}
                                                onPress={() => setCor('#f0ed59')}
                                            />
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#8aafde', borderRadius: 15, marginHorizontal: 3}}>
                                            <RadioButton
                                                value="#8aafde"
                                                status={cor === '#8aafde' ? 'checked' : 'unchecked'}
                                                onPress={() => setCor('#8aafde')}
                                            />
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#7da374', borderRadius: 15, marginHorizontal: 3}}>
                                            <RadioButton
                                                value="#7da374"
                                                status={cor === '#7da374' ? 'checked' : 'unchecked'}
                                                onPress={() => setCor('#7da374')}
                                            />
                                        </View>
                                        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#f5a9e1', borderRadius: 15, marginHorizontal: 3}}>
                                            <RadioButton
                                                value="#f5a9e1"
                                                status={cor === '#f5a9e1' ? 'checked' : 'unchecked'}
                                                onPress={() => setCor('#f5a9e1')}
                                            />
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.viewAdjacente}>
                        <Text style={styles.textoCinza}>Tipo Movimentação</Text>
                        <View>
                            <Controller 
                                name='idTipoMovimentacao'
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <RadioButton
                                                value={1}
                                                status={idTipoMovimentacao === 1 ? 'checked' : 'unchecked'}
                                                onPress={() => setIdTipoMovimentacao(1)}
                                            />
                                            <Text style={{ alignSelf: 'center' }}>Receita</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <RadioButton
                                                value={2}
                                                status={idTipoMovimentacao === 2 ? 'checked' : 'unchecked'}
                                                onPress={() => setIdTipoMovimentacao(2)}
                                            />
                                            <Text style={{ alignSelf: 'center' }}>Despesa</Text>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                    <View style={{marginTop: 25, display: 'flex', flexDirection: 'row'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <BotaoInicio 
                                onPress={handleSubmit(alterarCategoria)}
                                styleExterno={patternStyle.botaoExterno} 
                                styleCorpo={styles.botaoInterno} 
                                styleTexto={patternStyle.textoBotao}>
                                    Alterar
                            </BotaoInicio>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <BotaoInicio 
                                onPress={handleSubmit(excluirCategoria)}
                                styleExterno={patternStyle.botaoExterno} 
                                styleCorpo={[styles.botaoInterno, {backgroundColor: Colors.vermelhoGoogle}]} 
                                styleTexto={patternStyle.textoBotao}>
                                    Excluir
                            </BotaoInicio>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    ); 
}

export default AlterarCategoria;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        width: 300,
    },
    viewTopo: {
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 30,
        marginBottom: 20,
        marginTop: 75
    },
    textoTopo: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
    },
    botaoInterno: {
        backgroundColor: Colors.verdePrincipal,
        paddingVertical: 10,
    },
    viewAdjacente: {
        padding: 5,
    },
    textoCinza: {
        fontSize: 15,
        fontFamily: 'roboto-regular',
        color: Colors.cinzaContorno,
        letterSpacing: 1.2,
        marginTop: 2
    },
})