import {Text, StyleSheet} from 'react-native';
import Colors from '../constantes/colors';

function Titulo({children, style}){
    return <Text style={[styles.titulo, style]}>{children}</Text>;
}

export default Titulo;

const styles = StyleSheet.create({
    titulo:{
        fontFamily: 'roboto-bold',
        fontSize: 50,
        color: Colors.branco,
        textAlign: 'center',
    }
});