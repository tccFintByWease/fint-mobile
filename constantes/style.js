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
        height: 40,
        width: '90%',
        fontSize: 18,
        color: Colors.preto,
        marginVertical: 5,
        textAlign: 'left',
        borderRadius: 30,
        borderColor: Colors.cinzaContorno,
        borderWidth: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.branco,
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