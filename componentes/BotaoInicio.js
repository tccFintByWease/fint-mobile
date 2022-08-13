import {View, Text, Pressable, StyleSheet} from 'react-native';

import Colors  from '../constantes/colors';

function BotaoInicio({children, styleExterno, styleCorpo, styleTexto, onPress}){
    return(
        <View style={[styles.botaoExterno, styleExterno]}>
            <Pressable style={[styles.botaoInterno, styleCorpo]} onPress={onPress}>
                <Text style={[styles.textoBotao, styleTexto]}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default BotaoInicio;

const styles = StyleSheet.create({
    botaoExterno:{
        borderRadius: 40,
        marginVertical: 4,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: Colors.branco,
    },
    botaoInterno:{
        paddingVertical: 15,
        paddingHorizontal: 25,
    },
    textoBotao:{
        color: Colors.branco,
        textAlign: 'center',
        fontFamily: 'roboto-regular',
        fontSize: 18
    }
});