import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import EscolhaTela from "./screens/escolhatela";
import Alimentos from "./screens/alimentos";
import Menu from "./screens/menu";
import Cadastro from "./screens/cadastro";
import Edicao from './screens/edicao';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Menu" screenOptions = {{headerShown:false}}>
        <Stack.Screen name="EscolhaTela" component={EscolhaTela}/>
        <Stack.Screen name="Alimentos" component={Alimentos}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Edicao" component={Edicao}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
