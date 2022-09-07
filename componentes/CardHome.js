import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../constantes/colors';

function CardHome(){
    return(
        <View style={{alignItems: 'center'}}>
            <View style={styles.alertaBox}>
                <View style={{ position: 'absolute', right: 0, top: 0 }}>
                    <Pressable>
                        <View>
                            <Text style={styles.xButton} > X </Text>
                        </View>
                    </Pressable>
                </View>
                <Text style={{ 
                    width: '70%', 
                    textAlign: 'center',
                    fontFamily: 'roboto-bold', 
                    letterSpacing: 1, 
                    fontSize: 20, 
                    color: Colors.branco, 
                    marginBottom: 8
                }}>
                    Gráficos Exclusivos
                </Text>
                <Text style={{ 
                    marginLeft: 8,
                    fontFamily: 'roboto-italic', 
                    fontSize: 14, 
                    color: Colors.branco, 
                }}>
                    Sua assinatura possui gráficos especiais que podem ser exibidos na tela inicial.
                </Text>
                <View>
                    <Pressable style={styles.botaoAlerta}>
                        <View>
                            <Text style={styles.txtBotaoAlerta}>Assinar</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default CardHome;

const styles = StyleSheet.create({
    alertaBox: {
        width: '90%',
        backgroundColor: Colors.verdePrincipal,
        borderRadius: 30,
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        elevation: 5
    },
    xButton: {
        margin: 10,
        color: Colors.branco,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
    },
    botaoAlerta: {
        width: '40%',
        borderRadius: 30,
        backgroundColor: Colors.branco,
        paddingVertical: 10,
        marginTop: 15,
        backgroundColor: Colors.verdeSecundario,
    },
    txtBotaoAlerta: {
        fontFamily: 'roboto-bold',
        fontSize: 15,
        color: Colors.branco,
        textAlign: 'center'
    },
});