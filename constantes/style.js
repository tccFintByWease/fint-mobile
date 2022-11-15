import { StyleSheet } from "react-native";
import Colors from '../constantes/colors';

const patternStyle = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    rootContainer2: {
        flex: 1,
        alignItems: 'center',
    },
    caixaLogo: {
        marginTop: 100,
    },
    image: {
        resizeMode: 'center',
        width: 125,
        height: 75,
        marginLeft: 20
    },
    inputContainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        fontFamily: 'roboto-regular',
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
        paddingHorizontal: 25,
        paddingVertical: 8,
        width: '100%',
        marginVertical: 5,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        borderRadius: 40
    },
    input2:{
        fontFamily: 'roboto-regular',
        fontSize: 18,
        color: 'black',
        textAlign: 'left',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%',
        marginVertical: 5,
    },
    labelError:{
        alignSelf: 'flex-start',
        color: 'red',
        marginBottom: 8
    },
    botaoExterno: {
        width: '90%',
        height: 48,
    },
    botaoInterno: {
        backgroundColor: Colors.verdePrincipal,
        paddingVertical: 10
    },
    textoBotao: {
        fontSize: 18,
        fontFamily: 'roboto-bold'
    },
    texto: {
        color: Colors.cinzaContorno,
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'center',
        width: '90%'
    },
    caixaTexto: {
        width: '90%',
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 1,
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20
    },
    rodapeLogin: {
        bottom: 0,
    },
    textorodapeLogin: {
        color: Colors.cinzaContorno,
        fontSize: 18,
    }
});

export default patternStyle;