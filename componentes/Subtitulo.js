import {Text, StyleSheet} from 'react-native';
import Colors from '../constantes/colors';

function Subtitulo({children, style}){
    return(
        <Text style={[styles.subtitulo, style]}>{children}</Text>
    );
}

export default Subtitulo;

const styles = StyleSheet.create({
    subtitulo:{
        fontFamily: 'roboto-regular',
        fontSize: 16,
        color: Colors.branco,
        textAlign: 'center',
    }
});