// React
import { StyleSheet, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// Expo
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Ionicons from '@expo/vector-icons/Ionicons';

// Telas
import TelaInicio from './telas/TelaInicio';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro'; 
import TelaRecuperacaoLink from './telas/TelaRecuperacaoLink';
import TelaMudarSenha from './telas/TelaMudarSenha';
import TelaInicioLogadoCAssinatura from './telas/TelaInicioLogadoCAssinatura';
import TelaControleGastos from './telas/TelaControleGastos';
import TelaEmDesenvolvimento from './telas/TelaEmDesenvolvimento';

//Constantes
import Colors from './constantes/colors';

// Navigation
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

export default function App() {
  // Carregamento de Fontes
  const [fontsLoaded] = useFonts({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.rootScreen}>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='inicio' screenOptions={{
          headerShown: false,
          cardStyle:{backgroundColor: 'white'}
        }}>
          <Stack.Screen name='inicio' component={TelaInicio} />
          <Stack.Screen name='login' component={TelaLogin}/>
          <Stack.Screen name='cadastro' component={TelaCadastro}/>
          <Stack.Screen name='recuperacaoLink' component={TelaRecuperacaoLink}/>
          <Stack.Screen name='mudarSenha' component={TelaMudarSenha} />
          <Stack.Screen name='telainiciologadocassinatura' component={TelaInicioLogadoCAssinatura} />
          <Stack.Screen name='telacontrolegastos' component={TelaControleGastos} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});