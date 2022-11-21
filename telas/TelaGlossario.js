import {View, Text, FlatList, StyleSheet, TextInput, Pressable, TouchableWithoutFeedback, Keyboard} from 'react-native';
import CardTermo from '../componentes/CardTermo';
import Termos from '../store/glossario-termos';
import Ionicons from '@expo/vector-icons/Ionicons';
import patternStyle from '../constantes/style';
import { useEffect, useState } from 'react';

function TelaGlossario({navigation}){
    function voltar(){
        navigation.goBack();
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
                <View style={{padding: 25, marginTop: 25, display: 'flex', flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.titulo}>Glossário</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Pressable onPress={voltar}>
                            <Ionicons name='close' color='black' size={30}/>
                        </Pressable>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginVertical: 10}}>
                    <TextInput 
                        style={[patternStyle.input, {borderRadius: 5, width: '90%'}]} 
                        placeholder='Pesquise um termo'
                    />
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
        </TouchableWithoutFeedback>
    );
}

export default TelaGlossario;

const styles = StyleSheet.create({
    titulo:{
        fontFamily: 'roboto-bold',
        fontSize: 22,
        letterSpacing: 1.5
    }
});