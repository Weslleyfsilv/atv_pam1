import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroCategoria from "./screens/CadastroCategoria";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
    
      <Stack.Screen
        name="Login" // refere  ncia a tela para acessar ela
        component={CadastroCategoria} // é a tela em si
        options={{title:"CADASTRO"}} // opções para colocar na tela
        />

    </Stack.Navigator>
    </NavigationContainer>
  )

}