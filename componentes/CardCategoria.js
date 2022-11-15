import { StyleSheet, View, Text } from "react-native";

function CardCategoria({children, backgroundColor}){
    return(
        <View style={[styles.rootContainer, {backgroundColor:backgroundColor}]}>
            <Text style={{color: 'white'}}>{children}</Text>
        </View>
    );
}

export default CardCategoria;

const styles = StyleSheet.create({
    rootContainer:{
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});