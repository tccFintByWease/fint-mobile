import { View, Image, TextInput, Text, StyleSheet } from 'react-native';

import BotaoInicio from '../componentes/BotaoInicio';
import Subtitulo from '../componentes/Subtitulo';
import Dropdown from '../componentes/Dropdown';
import Colors from '../constantes/colors';
import patternStyle from '../constantes/style';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

function TelaDinheiroMoeda({ navigation }) {
    //Funções de abertura de tela
    function abreHome() {
        navigation.navigate('home');
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'ALL', value: 'ALL' },
        { label: 'AFN', value: 'AFN' },
        { label: 'ARS', value: 'ARS' },
        { label: 'AWG', value: 'AWG' },
        { label: 'AUD', value: 'AUD' },
        { label: 'AZN', value: 'AZN' },
        { label: 'BSD', value: 'BSD' },
        { label: 'BBD', value: 'BBD' },
        { label: 'BYN', value: 'BYN' },
        { label: 'BZD', value: 'BZD' },
        { label: 'BMD', value: 'BMD' },
        { label: 'BOB', value: 'BOB' },
        { label: 'BAM', value: 'BAM' },
        { label: 'BWP', value: 'BWP' },
        { label: 'BGN', value: 'BGN' },
        { label: 'BRL', value: 'BRL' },
        { label: 'BND', value: 'BND' },
        { label: 'KHR', value: 'KHR' },
        { label: 'CAD', value: 'CAD' },
        { label: 'KYD', value: 'KYD' },
        { label: 'CLP', value: 'CLP' },
        { label: 'CNY', value: 'CNY' },
        { label: 'COP', value: 'COP' },
        { label: 'CRC', value: 'CRC' },
        { label: 'HRK', value: 'HRK' },
        { label: 'CUP', value: 'CUP' },
        { label: 'CZK', value: 'CZK' },
        { label: 'DKK', value: 'DKK' },
        { label: 'DOP', value: 'DOP' },
        { label: 'XCD', value: 'XCD' },
        { label: 'EGP', value: 'EGP' },
        { label: 'SVC', value: 'SVC' },
        { label: 'EUR', value: 'EUR' },
        { label: 'FKP', value: 'FKP' },
        { label: 'FJD', value: 'FJD' },
        { label: 'GHS', value: 'GHS' },
        { label: 'GIP', value: 'GIP' },
        { label: 'GTQ', value: 'GTQ' },
        { label: 'GGP', value: 'GGP' },
        { label: 'GYD', value: 'GYD' },
        { label: 'HNL', value: 'HNL' },
        { label: 'HKD', value: 'HKD' },
        { label: 'HUF', value: 'HUF' },
        { label: 'ISK', value: 'ISK' },
        { label: 'INR', value: 'INR' },
        { label: 'IDR', value: 'IDR' },
        { label: 'IRR', value: 'IRR' },
        { label: 'IMP', value: 'IMP' },
        { label: 'ILS', value: 'ILS' },
        { label: 'JMD', value: 'JMD' },
        { label: 'JPY', value: 'JPY' },
        { label: 'JEP', value: 'JEP' },
        { label: 'KZT', value: 'KZT' },
        { label: 'KPW', value: 'KPW' },
        { label: 'KGS', value: 'KGS' },
        { label: 'LAK', value: 'LAK' },
        { label: 'LBP', value: 'LBP' },
        { label: 'LRD', value: 'LRD' },
        { label: 'MKD', value: 'MKD' },
        { label: 'MYR', value: 'MYR' },
        { label: 'MUR', value: 'MUR' },
        { label: 'MXN', value: 'MXN' },
        { label: 'MNT', value: 'MNT' },
        { label: 'MZN', value: 'MZN' },
        { label: 'NAD', value: 'NAD' },
        { label: 'NPR', value: 'NPR' },
        { label: 'ANG', value: 'ANG' },
        { label: 'NZD', value: 'NZD' },
        { label: 'NIO', value: 'NIO' },
        { label: 'NGN', value: 'NGN' },
        { label: 'NOK', value: 'NOK' },
        { label: 'OMR', value: 'OMR' },
        { label: 'PKR', value: 'PKR' },
        { label: 'PAB', value: 'PAB' },
        { label: 'PYG', value: 'PYG' },
        { label: 'PEN', value: 'PEN' },
        { label: 'PHP', value: 'PHP' },
        { label: 'PLN', value: 'PLN' },
        { label: 'QAR', value: 'QAR' },
        { label: 'RON', value: 'RON' },
        { label: 'RUB', value: 'RUB' },
        { label: 'SHP', value: 'SHP' },
        { label: 'SAR', value: 'SAR' },
        { label: 'RSD', value: 'RSD' },
        { label: 'SCR', value: 'SCR' },
        { label: 'SGD', value: 'SGD' },
        { label: 'SBD', value: 'SBD' },
        { label: 'SOS', value: 'SOS' },
        { label: 'KRW', value: 'KRW' },
        { label: 'ZAR', value: 'ZAR' },
        { label: 'LKR', value: 'LKR' },
        { label: 'SEK', value: 'SEK' },
        { label: 'CHF', value: 'CHF' },
        { label: 'SRD', value: 'SRD' },
        { label: 'SYP', value: 'SYP' },
        { label: 'TWD', value: 'TWD' },
        { label: 'THB', value: 'THB' },
        { label: 'TTD', value: 'TTD' },
        { label: 'TRY', value: 'TRY' },
        { label: 'TVD', value: 'TVD' },
        { label: 'UAH', value: 'UAH' },
        { label: 'AED', value: 'AED' },
        { label: 'GBP', value: 'GBP' },
        { label: 'USD', value: 'USD' },
        { label: 'UYU', value: 'UYU' },
        { label: 'UZS', value: 'UZS' },
        { label: 'VEF', value: 'VEF' },
        { label: 'VND', value: 'VND' },
        { label: 'YER', value: 'YER' },
        { label: 'ZWD', value: 'ZWD' },

    ]);

    return (
        <View style={patternStyle.rootContainer}>
            <View style={patternStyle.caixaLogo}>
                <Image
                    style={patternStyle.image}
                    source={require('../assets/images/logo_preto.png')}
                />
            </View>
            <View style={styles.textoBox}>
                <Text style={styles.texto}>
                    Cadastre seu saldo inicial e sua
                    moeda padrão.
                </Text>
            </View>
            <View style={patternStyle.inputContainer}>
                <View style={styles.dropText}>
                    <View style={styles.caixinha}>
                        <TextInput
                            style={styles.input}
                            maxLength={10}
                            keyboardType='decimal-pad'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholder='Quantia'
                            placeholderTextColor={Colors.preto}
                        />
                    </View>
                    <View style={styles.caixinha}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder="Selecione sua moeda"

                            listMode="SCROLLVIEW"
                            scrollViewProps={{
                                nestedScrollEnabled: true,
                                scrollEnabled: true,
                            }}
                        />
                    </View>
                </View>
                <Text style={styles.texto2}>Essas informações poderão ser alteradas há qualquer
                    momento nas configurações do aplicativo. </Text>
                <BotaoInicio
                    styleExterno={[patternStyle.botaoExterno, styles.botao]}
                    styleCorpo={patternStyle.botaoInterno}
                    styleTexto={patternStyle.textoBotao}
                    onPress={abreHome}>
                    Confirmar
                </BotaoInicio>
            </View>
            <View style={[patternStyle.rodapeLogin, { marginTop: 105 }]}>
                <Subtitulo style={patternStyle.textorodapeLogin}>Wease co.</Subtitulo>
            </View>
        </View>
    );
}

export default TelaDinheiroMoeda;

const styles = StyleSheet.create({
    dropText: {
        flexDirection: 'row',
        textAlign: 'center',
        marginBottom: 40
    },
    sus: {
        width: '90%',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        fontSize: 18,
        color: Colors.preto,
        borderBottomColor: Colors.cinzaContorno,
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        textAlign: 'center',
    },
    texto2: {
        color: Colors.cinzaContorno,
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'center',
        width: '90%',
        marginTop: 140
    },
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.preto,
        width: '90%'
    },
    textoBox: {
        width: '90%',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20
    },
    caixinha: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    botao: {
        marginTop: 25,
    }
})
