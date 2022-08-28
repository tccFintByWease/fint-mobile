import { StyleSheet, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import TelaInicio from './telas/TelaInicio';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro'; 
import TelaRecuperacaoLink from './telas/TelaRecuperacaoLink';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        <Stack.Navigator screenOptions={{
          headerShown: false,
          cardStyle:{backgroundColor: 'white'}
        }}>
          <Stack.Screen name='inicio' component={TelaInicio}/>
          <Stack.Screen name='login' component={TelaLogin}/>
          <Stack.Screen name='cadastro' component={TelaCadastro}/>
          <Stack.Screen name='linkRecuperacao' component={TelaRecuperacaoLink}/>
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