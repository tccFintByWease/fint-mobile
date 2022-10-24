import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import TelaHome from '../telas/TelaHome';
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
        <BottomTab.Screen name='home' component={TelaHome} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="home" color={color} size={size}/>
            ),
            tabBarLabel: 'Home'
        }}/>
        <BottomTab.Screen name='gastos' component={TelaControleGastos} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="wallet" color={color} size={size}/>
            ),
            tabBarLabel: 'Gastos'
        }}/>
        <BottomTab.Screen name='simulador' component={TelaEmDesenvolvimento} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="cash" color={color} size={size}/>
            ),
            tabBarLabel: 'Simulador'
        }}/>
        <BottomTab.Screen name='investimentos' component={TelaEmDesenvolvimento} options={{
            tabBarIcon:({color, size}) => (
            <Ionicons name="analytics" color={color} size={size}/>
            ),
            tabBarLabel: 'Investimenrtos'
        }}/>
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;