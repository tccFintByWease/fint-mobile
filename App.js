// React
// https://sourceforge.net/projects/miniserver/files/
import React, { useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Expo
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

// Telas
import TelaInicio from './telas/TelaInicio';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro';
import TelaRecuperacaoLink from './telas/TelaRecuperacaoLink';
import TelaMudarSenha from './telas/TelaMudarSenha';
import TelaInicioLogadoCAssinatura from './telas/TelaHome';
import TelaEmDesenvolvimento from './telas/TelaEmDesenvolvimento';
import TelaDinheiroMoeda from './telas/TelaDinheiroMoeda';
import DetalhesMovimentacao from './componentes/DetalhesMovimentacao';
import TelaUsuarioAlterarDados from './telas/TelaUsuarioAlterarDados';
import TelaExcluirConta from './telas/TelaExcluirConta';


//Constantes
import Colors from './constantes/colors';
import BottomTabNavigator from './componentes/BottomTabNavigator';


// Navigation
const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App({ routes }) {
  // Carregamento de Fontes
  const [fontsLoaded] = useFonts({
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Nunito-Light': require('./assets/fonts/Nunito-Light.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.rootScreen}>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='inicio' screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' }
        }}>
          <Stack.Screen name='inicio' component={TelaExcluirConta} />
          {/*<Stack.Screen name='teste' component={TelaUsuarioAlterarDados} />*/}
          <Stack.Screen name='login' component={TelaLogin} />
          <Stack.Screen name='cadastro' component={TelaCadastro} />
          <Stack.Screen name='recuperacaoLink' component={TelaRecuperacaoLink} />
          <Stack.Screen name='mudarSenha' component={TelaMudarSenha} />
          <Stack.Screen name='dinheiroMoeda' component={TelaDinheiroMoeda} />
          <Stack.Screen name='home' component={TelaInicioLogadoCAssinatura} />
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