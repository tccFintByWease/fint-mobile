import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import TelaInicioLogadoCAssinatura from '../telas/TelaInicioLogadoCAssinatura';
import TelaControleGastos from '../telas/TelaControleGastos';
import TelaEmDesenvolvimento from '../telas/TelaEmDesenvolvimento';

import Colors from '../constantes/colors';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator(){
    return(
        <BottomTab.Navigator screenOptions={{
        headerStyle: {backgroundColor: Colors.verdePrincipal, height: 40},
        headerTitle: '',
        tabBarActiveTintColor: Colors.verdePrincipal,
        tabBarInactiveTintColor: Colors.verdeSecundario,
        tabBarStyle: {backgroundColor: Colors.branco}
        }}>
        <BottomTab.Screen name='Home' component={TelaInicioLogadoCAssinatura} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="home" color={color} size={size}/>
            ),
        }}/>
        <BottomTab.Screen name='Gastos' component={TelaControleGastos} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="wallet" color={color} size={size}/>
            )
        }}/>
        <BottomTab.Screen name='Simulador' component={TelaEmDesenvolvimento} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="cash" color={color} size={size}/>
            )
        }}/>
        <BottomTab.Screen name='Investimentos' component={TelaEmDesenvolvimento} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="analytics" color={color} size={size}/>
            )
        }}/>
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;