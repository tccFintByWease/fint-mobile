import {FlatList, StyleSheet, Text, View} from 'react-native';
import CardTermo from '../componentes/CardTermo';
import Termos from '../store/glossario-termos';

function TelaGlossario(){
    return(
        <View style={{flex: 1}}>
            <View style={{padding: 10, marginTop: 25}}>
                <Text style={styles.titulo}>Glossário</Text>
            </View>
            <FlatList 
                data={Termos}
                renderItem={(itemData) => {
                    return <CardTermo titulo={itemData.item.titulo} significado={itemData.item.significado}/>
                }}
                keyExtractor={(itemData) => {
                    return itemData.id;
                }}
            />
        </View>
    );
}

export default TelaGlossario;

const styles = StyleSheet.create({
    titulo:{
        fontFamily: 'roboto-bold',
        fontSize: '20',
        letterSpacing: 1.5
    }
});