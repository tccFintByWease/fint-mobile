import { useState } from "react";
import {Modal, StyleSheet, View, Text, Pressable} from 'react-native';
import Colors from "../constantes/colors";
import patternStyle from "../constantes/style";
import Ionicons from '@expo/vector-icons/Ionicons';

function Aviso({children, modalVisible, setModalVisible, nomeIcone, backgroundColor}) {
    const funcao = setModalVisible;
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                funcao(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{flex: 1}}>{children}</View>
                    <Pressable
                        style={[styles.button, {backgroundColor: backgroundColor}]}
                        onPress={() => funcao(!modalVisible)}
                    >
                        <Ionicons name={nomeIcone} color='white' size={30}/>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

export default Aviso;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.branco,
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        elevation: 5
    },
    modalText: {
        color: '#000',
        fontFamily: 'roboto-regular',
        fontSize: 16,
        marginBottom: 30,
        textAlign: "center"
    },
    button: {
        borderRadius: 30,
        paddingHorizontal: 40,
        paddingVertical: 10,
        elevation: 2,
    },
});