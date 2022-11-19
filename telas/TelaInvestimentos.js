import { RadioButton } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard, KeyboardAvoidingView, ScrollView, Alert, TouchableWithoutFeedback } from 'react-native'
import axios from 'axios';

import patternStyle from '../constantes/style';
import Header from '../componentes/Header';
import Colors from '../constantes/colors';
import CaixaInvestimento from '../componentes/CaixaInvestimento';
import BotaoInicio from '../componentes/BotaoInicio';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInputMask } from 'react-native-masked-text';
import { investimentoSchema } from '../store/schemas/investimento-schema';
import { GET_SIMULATION_URL } from '../store/api-urls'
import * as SecureStore from 'expo-secure-store';
import { formatDatetime, formatDate } from '../utils/date-utils';


function TelaInvestimentos() {


    // function calcular(){ -----------------------------TODO
    //     var dt1 = document.getElementById("dt1").value; 
    //     var dt2 = document.getElementById("dt2").value; 

    //     var data1 = new Date(dt1); 
    //     var data2 = new Date(new Date(dt2));
    // var total = (data2.getFullYear() - data1.getFullYear()) * 12 + (data2.getMonth() - data1.getMonth());
    //     document.getElementById("result").value = total;
    //     }


    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(investimentoSchema)
    });


    const [resultsInvestimentos, setResultsInvestimentos] = useState([]); // getter / "setter"

    async function BuscarInvestimentos() {
        console.log('---------------------')
        try {
            let data = new Object();
            let idUsuarioString = await SecureStore.getItemAsync('id');
            data.idUsuario = Number(idUsuarioString);

            const responseInvestimentos = await axios.post(GET_SIMULATION_URL, data);  // pega os dados do servidor



            console.log(responseInvestimentos.data)

            let resultsInvestimentosHTML = [];

            if (responseInvestimentos.data.result.length >= 1 && responseInvestimentos.data.result[0].dataFinalSimulacao !== null) {
                console.log('entrou')

                for (var i = 0; i < responseInvestimentos.data.result.length; i++) {
                    let dateI = formatDate(responseInvestimentos.data.result[i].dataInicialSimulacao);
                    let dateF = formatDate(responseInvestimentos.data.result[i].dataFinalSimulacao);
                    console.log(responseInvestimentos.data.result[i].idSimulacao)

                    let dateIsplitYMD = dateI.split('-');
                    let dateFsplitYMD = dateF.split('-');

                    let meses = (dateFsplitYMD[0] - dateIsplitYMD[0]) * 12 + (dateFsplitYMD[1] - dateIsplitYMD[1]);

                    let porCento = 1 + responseInvestimentos.data.result[i].taxaCorretagemSimulacao / 100;
                    let jurosTotal = Math.pow(porCento, meses);
                    let montante = responseInvestimentos.data.result[i].valorInicialSimulacao * jurosTotal;
                    let lucro = montante - responseInvestimentos.data.result[i].valorInicialSimulacao;

                    resultsInvestimentosHTML.push(
                        <CaixaInvestimento key={[i]}
                            tempo={meses}
                            texto={responseInvestimentos.data.result[i].descricaoSimulacao}
                            valorI={responseInvestimentos.data.result[i].valorInicialSimulacao}
                            lucro={lucro.toFixed(2)}
                            idSimulacao={responseInvestimentos.data.result[i].idSimulacao}
                            valorF={montante.toFixed(2)}></CaixaInvestimento>
                    );
                }

            } else {
                // talvez trocar o layout daqui.
                resultsInvestimentosHTML.push(
                    <View style={styles.boxTitle} key="-1">
                        <Text style={styles.textTitle}>
                            Nenhum resultado encontrado
                        </Text>
                    </View>
                )
            }

            setResultsInvestimentos(resultsInvestimentosHTML);
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        BuscarInvestimentos();
        //BuscarDespesas(data);
    }, [])



    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView style={{ marginTop: 70 }}>

                <View style={styles.boxTitle}>
                    <Text style={styles.textTitle}>
                        Seus investimentos salvos:
                    </Text>
                </View>

                {resultsInvestimentos}
                <View style={{ alignContent: 'center', paddingBottom: 15, padding: 10, alignItems: 'center' }} key="7">
                    <BotaoInicio
                        onPress={BuscarInvestimentos}
                        styleExterno={patternStyle.botaoExterno}
                        styleCorpo={patternStyle.botaoInterno}
                        styleTexto={patternStyle.textoBotao}>
                        Atualizar Investimentos
                    </BotaoInicio>
                </View>
            </ScrollView >
        </View >
    );
}

export default TelaInvestimentos;

const styles = StyleSheet.create({
    alertaBox: {
        width: '92%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 12,
        paddingVertical: 20,
        elevation: 5
    },
    viewGrafico: {
        backgroundColor: '#e3e1e1',
        height: 260,
        width: '92%',
        marginTop: 15,
        alignContent: 'center',
        borderRadius: 30
    },
    textoGrafico: {
        color: '#c0c0c0',
        fontSize: 30,
        fontFamily: 'roboto-italic',
        textAlign: 'center',
        marginTop: 110
    },
    boxTitle: {
        marginTop: 20,
        marginHorizontal: 10,
        marginBottom: 5,
    },
    textTitle: {
        fontSize: 23,
        color: Colors.preto,
        letterSpacing: 1.8,
        fontFamily: 'roboto-bold',
    },
    botaoExterno: {
        width: '40%',
    },
    botaoInterno: {
        backgroundColor: Colors.verdeSecundario,
        paddingVertical: 10
    },
    xButton: {
        height: 50,
        width: 40,
        marginRight: 6,
        color: Colors.branco,
        fontSize: 35,
        fontFamily: 'Nunito-SemiBold',
    },
    botaoAlerta: {
        borderRadius: 30,
        backgroundColor: Colors.branco,
        width: 200,
        height: 40,
        marginTop: 12,
        padding: 7
    },
    txtBotaoAlerta: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        textAlign: 'center'
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
})