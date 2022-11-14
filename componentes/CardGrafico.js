import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import BotaoInicio from './BotaoInicio';
import Colors from '../constantes/colors';
import patternStyle from '../constantes/style';

function CardGrafico(){
    const [selecionado, setSelecionado] = useState(false);
    return(
        <View style={styles.rootContainer}>
            <View style={styles.caixaTituloGrafico}>
                <View style={{flex: 3, justifyContent: 'center'}}>
                    <Text style={styles.tituloGrafico}> Nome do Gráfico</Text>
                </View>
                <View style={{flex: 1, padding: 10}}>
                    {selecionado ?
                        <Ionicons onPress={() => setSelecionado(!selecionado)} style={{alignSelf: 'flex-end'}} name='radio-button-on' size={25} color='black'/>
                        :
                        <Ionicons onPress={() => setSelecionado(!selecionado)} style={{alignSelf: 'flex-end'}} name='radio-button-off' size={25} color='black'/>
                    }
                </View>
            </View>
            <View style={styles.caixaGrafico}>

            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <BotaoInicio 
                    styleExterno={styles.botaoFora} 
                    styleCorpo={patternStyle.botaoInterno} 
                    styleTexto={patternStyle.textoBotao}>
                    Ativar
                </BotaoInicio>
            </View>
        </View>
    );
}

export default CardGrafico;

const styles = StyleSheet.create({
    rootContainer: {
        width: '85%',
        backgroundColor: Colors.branco,
        borderRadius: 20,
        marginVertical: 20,
        elevation: 6,
        height: 300
    },
    caixaTituloGrafico: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        marginTop: 10,
    },
    tituloGrafico: {
        color: Colors.preto,
        fontSize: 20,
        fontFamily: 'roboto-bold',
        letterSpacing: 1.6,
        paddingHorizontal: 6,
        paddingVertical: 4,
    },
    caixaGrafico:{
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        height: 160
    },
    botaoFora: {
        width: 200,
    },
});