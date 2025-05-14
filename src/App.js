import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PainelScreen from './screens/PainelScreen';
import CadastroScreen from './screens/CadastroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Painel">
        <Drawer.Screen name="Painel" component={PainelScreen} />
        <Drawer.Screen name="Cadastro" component={CadastroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}