import { StyleSheet, Text, View } from "react-native";
import Colors from "../constantes/colors";

function CardTermo({titulo, significado}){
    return(
        <View style={styles.caixaTermo}>
            <Text style={styles.tituloTermo}>{titulo}</Text>
            <View style={{width: '90%', marginTop: 5}}>
                <Text style={styles.significadoTermo}>{significado}</Text>
            </View>
        </View>
    );
}

export default CardTermo;

const styles = StyleSheet.create({
    caixaTermo:{
        justifyContent: 'center',
        borderTopColor: Colors.cinzaContorno,
        borderTopWidth: 1,
        padding: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },  
    tituloTermo:{
        fontFamily: 'roboto-bold',
        fontSize: 18
    },
    significadoTermo:{
        margin: 5,
        fontFamily: 'roboto-regular',
        fontSize: 16
    }
});