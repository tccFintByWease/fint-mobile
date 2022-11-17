import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import TelaHome from '../../telas/TelaHome';
import TelaControleGastos from '../../telas/TelaControleGastos';
import TelaInvestimentos from '../../telas/TelaInvestimentos';
import TelaEmDesenvolvimento from '../../telas/TelaEmDesenvolvimento';

import Colors from '../../constantes/colors';
import TelaSimulador from '../../telas/TelaSimulador';
import TelaDinheiroMoeda from '../../telas/TelaDinheiroMoeda';
import DetalhesMovimentacao from '../DetalhesMovimentacao';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.verdePrincipal, height: 40 },
            headerTitle: '',
            tabBarActiveTintColor: Colors.verdePrincipal,
            tabBarInactiveTintColor: Colors.verdeSecundario,
            tabBarStyle: { backgroundColor: Colors.branco }
        }}>
            <BottomTab.Screen name='home' component={TelaHome} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
                tabBarLabel: 'Home'
            }} />
            <BottomTab.Screen name='gastos' component={TelaControleGastos} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="wallet" color={color} size={size} />
                ),
                tabBarLabel: 'Gastos',
            }} />
            <BottomTab.Screen name='simulador' component={TelaSimulador} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="cash" color={color} size={size} />
                ),
                tabBarLabel: 'Simulador'
            }} />
            <BottomTab.Screen name='investimentos' component={TelaInvestimentos} options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="analytics" color={color} size={size} />
                ),
                tabBarLabel: 'Investimentos'
            }} />
        </BottomTab.Navigator>
    );
}

export default BottomTabNavigator;