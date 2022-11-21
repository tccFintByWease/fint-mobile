import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, ScrollView, Alert, KeyboardAvoidingView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';
import CardCategoria from './CardCategoria';
import AlterarCategoria from './AlterarCategoria';
import Aviso from './Aviso';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputMask } from 'react-native-masked-text';
import { movimentacaoSchema } from '../store/schemas/movimentacao-schema';
import { INSERT_TRANSITION_URL, GET_CATEGORY_URL } from '../store/api-urls';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import CriarCategoria from './CriarCategoria';
import { RadioButton } from 'react-native-paper';


function CadastroMovimentacao({ navigation }) {
    function voltar() {
        navigation.goBack();
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(movimentacaoSchema)
    });

    // Cadastrar Movimentação
    async function adicionarMovimentacao(data) {
        try {
            let dataMovimentacao = data.dataMovimentacao.toLocaleDateString();

            data.idUsuarioString = await SecureStore.getItemAsync('id');

            data.idUsuario = Number(data.idUsuarioString);

            delete data.idUsuarioString;

            console.log(data.idUsuario)

            let dataValorMovimentacao = Number.parseFloat(data.valorMovimentacao);

            data.valorMovimentacao = dataValorMovimentacao;


            console.log(dataValorMovimentacao);
            console.log(data.valorMovimentacao);

            const ano = data.dataMovimentacao.getFullYear();
            const dia = dataMovimentacao.split('/')[0];
            const mes = dataMovimentacao.split('/')[1];


            dataMovimentacao = `${ano}-${mes}-${dia}`;

            console.log(dataMovimentacao);

            data.dataMovimentacao = dataMovimentacao;

            console.log(typeof data.valorMovimentacao)

            data.idCategoria = data.idUsuario;

            data.idTipoMovimentacao = idTipoMovimentacao;

            data.idDetalheMovimentacao = 1;

            const response = await axios.post(INSERT_TRANSITION_URL, data)

            console.log(response);

            Alert.alert("deu")
            console.log(Number(data.valorMovimentacao));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

 
    const [criarVisible, setCriarVisible] = useState(false);
    const [alterarVisible, setAlterarVisible] = useState(false);

    const pesquisaCategoria = [
        {idCategoria: 1, descricaoCategoria: 'Teste', corCategoria: 'red'}
    ];

    // Radio Button
    const [idTipoMovimentacao, setIdTipoMovimentacao] = useState();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingTop: 100, flex: 1 }}>
                    <View style={{ flexDirection: 'row', display: 'flex' }}>
                        <View style={{ flex: 4 }}>
                            <Text style={{ marginLeft: 15, fontFamily: 'roboto-bold', fontSize: 24 }}>Adicionar</Text>
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
                        <View style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}>
                            {/* Alterar/Excluir Categoria */}
                            <Pressable onPress={() => setAlterarVisible(true)}>
                                <View>
                                    {pesquisaCategoria.map(
                                        (categoria) => <CardCategoria key={categoria.idCategoria} backgroundColor={categoria.corCategoria}>{categoria.descricaoCategoria}</CardCategoria>
                                    )}
                                </View>
                            </Pressable>
                            <KeyboardAvoidingView behavior='position' enabled>
                                <View style={patternStyle.centeredView} >
                                    <Aviso backgroundColor={Colors.verdeSecundario} nomeIcone='close' modalVisible={alterarVisible} setModalVisible={setAlterarVisible}>
                                        <AlterarCategoria />
                                    </Aviso>
                                </View>
                            </KeyboardAvoidingView>
                            {/* Criar Categoria */}
                            <Pressable onPress={() => setCriarVisible(true)} style={{ flexDirection: 'row', marginLeft: 10 }}>
                                <View style={{ backgroundColor: Colors.cinzaContorno, borderRadius: 20, padding: 5, width: 35 }}>
                                    <Ionicons style={{ alignSelf: 'center' }} name='add' color='black' size={22} />
                                </View>
                            </Pressable>
                            <KeyboardAvoidingView behavior='position' enabled>
                                <View style={patternStyle.centeredView} >
                                    <Aviso backgroundColor={Colors.vermelhoGoogle} nomeIcone='close' modalVisible={criarVisible} setModalVisible={setCriarVisible}>
                                        <CriarCategoria />
                                    </Aviso>
                                </View>
                            </KeyboardAvoidingView>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
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
                            <Text style={styles.textoCinza}>Valor</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ alignSelf: 'center', fontSize: 18, marginLeft: 10 }}>R$</Text>
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
                                            type='only-numbers'
                                        />
                                    )}
                                />
                                {errors.valorMovimentacao && <Text style={patternStyle.labelError}>{errors.valorMovimentacao?.message}</Text>}
                            </View>
                        </View>
                        <View style={{ marginTop: 10, alignItems: 'center'}}>
                            <BotaoInicio
                                onPress={handleSubmit(adicionarMovimentacao)}
                                styleExterno={patternStyle.botaoExterno}
                                styleCorpo={[styles.botaoInterno, { backgroundColor: Colors.verdePrincipal }]}
                                styleTexto={patternStyle.textoBotao}>
                                <Ionicons name='add-circle-outline' color='white' size={20} />
                                Adicionar
                            </BotaoInicio>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

export default CadastroMovimentacao;

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
    },
    botaoInterno: {
        backgroundColor: Colors.vermelhoGoogle,
        paddingVertical: 10
    },
})