// Telas
import TelaInicio from '../../telas/TelaInicio';
import TelaLogin from '../../telas/TelaLogin';
import TelaCadastro from '../../telas/TelaCadastro';
import TelaRecuperacaoLink from '../../telas/TelaRecuperacaoLink';
import TelaAlterarSenha from '../../telas/TelaAlterarSenha';
import TelaDinheiroMoeda from '../../telas/TelaDinheiroMoeda';
import TelaHome from '../../telas/TelaHome';
import TelaCodigoRecuperacao from '../../telas/TelaCodigoRecuperacao';
import TelaSimulador from '../../telas/TelaSimulador';
import TelaNotificacao from '../../telas/TelaNotificacoes';
import BottomTabNavigator from '../../componentes/Navegadores/BottomTabNavigator';
import TelaNotificacoes from '../../telas/TelaNotificacoes';
import TelaUsuario from '../../telas/TelaUsuario';
import TelaSelecionarGraficos from '../../telas/TelaSelecionarGraficos';
import DetalhesMovimentacao from '../DetalhesMovimentacao';

// Navigation
import { createStackNavigator } from '@react-navigation/stack';
import CadastroMovimentacao from '../CadastroMovimentacao';
const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='inicio' screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'white' }
        }}>
            <Stack.Screen name='inicio' component={BottomTabNavigator} />
            <Stack.Screen name='login' component={TelaLogin} />
            <Stack.Screen name='cadastro' component={TelaCadastro} />
            <Stack.Screen name='recuperacaoLink' component={TelaRecuperacaoLink} />
            <Stack.Screen name='recuperacaoCodigo' component={TelaCodigoRecuperacao} />
            <Stack.Screen name='mudarSenha' component={TelaAlterarSenha} />
            <Stack.Screen name='dinheiroMoeda' component={TelaDinheiroMoeda} />
            <Stack.Screen name='notificacoes' component={TelaNotificacoes} />
            <Stack.Screen name='perfil' component={TelaUsuario} />
            <Stack.Screen name='selecionarGraficos' component={TelaSelecionarGraficos} options={{
                presentation: 'modal'
            }} />
            <Stack.Screen name='detalhesMovimentacao' component={DetalhesMovimentacao} options={{
                presentation: 'modal'
            }} />
            <Stack.Screen name='cadastroMovimentacao' component={CadastroMovimentacao} options={{
                presentation: 'modal'
            }} />
            <Stack.Screen name='home' component={BottomTabNavigator} />
        </Stack.Navigator>
    );
}

export default StackNavigator;