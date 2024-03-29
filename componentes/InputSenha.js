import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import patternStyle from '../constantes/style';
import Colors from '../constantes/colors';

function InputSenha({ placeholder, onChange, onBlur, value }) {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <View style={patternStyle.inputCaixa}>
            <View style={{ flex: 3, justifyContent: 'center', paddingLeft: 15 }}>
                <TextInput
                    style={patternStyle.inputText}
                    maxLength={50}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder={placeholder}
                    secureTextEntry={hidePassword}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 20 }}>
                <TouchableOpacity style={styles.icon} onPress={() => setHidePassword(!hidePassword)}>
                    {hidePassword ?
                        <Ionicons name="eye" color='#000' size={20} />
                        :
                        <Ionicons name="eye-off" color='#000' size={20} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default InputSenha;

const styles = StyleSheet.create({
    inputTexto: {
        fontSize: 18,
        color: Colors.preto,
        marginVertical: 5,
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: '25%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});