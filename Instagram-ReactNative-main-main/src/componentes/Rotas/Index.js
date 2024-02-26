import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import Cadastro from '../../Telas/Cadastro';
import Login from '../../Telas/Login';
import Recuperar from '../../Telas/Recuperar';


export default function Rotas() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>

      <Stack.Screen
        name='telaLogin'
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='telaCadastro'
        component={Cadastro}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='telaRecuperar'
        component={Recuperar}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>

  );
}
