import { StyleSheet, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import AppLoading from 'expo-app-loading';
import TelaInicio from './telas/TelaInicio';
import TelaLogin from './telas/TelaLogin';
import TelaCadastro from './telas/TelaCadastro'
import TelaRecuperacaoLink from './telas/TelaRecuperacaoLink';
import TelaMudarSenha from './telas/TelaMudarSenha';
import TelaCodigoRecuperacao from './telas/TelaCodigoRecuperacao';
import TelaDinheiroMoeda from './telas/TelaDinheiroMoeda';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import TelaInicioLogadoSAssinatura from './telas/TelaInicioLogadoSAssinatura';
import TelaSenhaLogin from './telas/TelaSenhaLogin';
import TelaInicioLogadoCAssinatura from './telas/TelaInicioLogadoCAssinatura';
import TelaLogadoSelecionarGraficosExclusivosPG from './telas/TelaLogadoSelecionarGraficosExclusivosPG';
import TelaLogadoSelecionarGraficosExclusivos from './telas/TelaLogadoSelecionarGraficosExclusivos';
import TelaControleGastos from './telas/TelaControleGastos';
import CadastrarDespesa from './componentes/CadastrarDespesa';
import CadastrarReceita from './componentes/CadastrarReceita';
import DetalhesDespesa from './componentes/DetalhesDespesa';
import DetalhesReceita from './componentes/DetalhesReceita';

export default function App() {

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

  // let screen = <TelaInicio />;
  // let screen = <TelaLogin />;
  // let screen = <TelaCadastro />;
  // let screen = <TelaRecuperacaoLink />
  // let screen = <TelaMudarSenha />
  // let screen = <TelaCodigoRecuperacao />
  // let screen = <TelaDinheiroMoeda />
  // let screen = <Header />
  // let screen = <Footer />
  // let screen = <TelaInicioLogadoSAssinatura />
  // let screen = <TelaSenhaLogin />
  // let screen = <TelaInicioLogadoCAssinatura />
  // let screen = <TelaLogadoSelecionarGraficosExclusivosPG />
  // let screen = <TelaLogadoSelecionarGraficosExclusivos />
  // let screen = <TelaControleGastos />
  // let screen = <CadastrarDespesa />
  // let screen = <CadastrarReceita />
  // let screen = <DetalhesDespesa />
  let screen = <DetalhesReceita />

  return (
    <SafeAreaView style={styles.rootScreen}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  }
});
