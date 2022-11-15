import { View, Text, StyleSheet, Pressable, TextInput, ScrollView } from 'react-native'
import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import Colors from '../constantes/colors'
import BotaoInicio from './BotaoInicio';
import patternStyle from '../constantes/style';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

function CriarCategoria({}) {
    const { control, handleSubmit, formState: { errors } } = useForm({});

    async function criarCategoria(data){
        try {
            // const response = await axios.post();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    // Radio Button
    const [checked, setChecked] = useState('');

    return(
        <ScrollView style={styles.rootContainer}>
            <View style={styles.viewTopo}>
                <Text style={styles.textoTopo}>Criar Categoria</Text>
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
                                    style={patternStyle.input2}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Nome Categoria"
                                    maxLength={50}
                                    defaultValue={'salário'}
                                />
                            )}
                        />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoCinza}>Cor</Text>
                    <View>
                        <Controller 
                            name='corCategoria'
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={patternStyle.input2}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Cor Categoria"
                                    maxLength={50}
                                    defaultValue={'verde'}
                                />
                            )}
                        />
                    </View>
                </View>
                <View style={styles.viewAdjacente}>
                    <Text style={styles.textoCinza}>Tipo Movimentação</Text>
                    <View>
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
                </View>
                <View style={{marginTop: 5}}>
                    <View style={{ alignItems: 'center'}}>
                        <BotaoInicio 
                            onPress={handleSubmit(criarCategoria)}
                            styleExterno={patternStyle.botaoExterno} 
                            styleCorpo={styles.botaoInterno} 
                            styleTexto={patternStyle.textoBotao}>
                                Criar
                        </BotaoInicio>
                    </View>
                </View>
            </View>
        </ScrollView>
    ); 
}

export default CriarCategoria;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        width: 250,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5,
    },
    viewTopo: {
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 20
    },
    textoTopo: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
    },
    botaoInterno: {
        backgroundColor: Colors.verdeSecundario,
        paddingVertical: 10,
    },
    viewAdjacente: {
        padding: 5,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
    },
    textoCinza: {
        fontSize: 15,
        fontFamily: 'roboto-regular',
        color: Colors.cinzaContorno,
        letterSpacing: 1.2,
        marginTop: 2
    },
})