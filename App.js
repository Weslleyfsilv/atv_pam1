import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import drawerMenu from "./drawerMenu/DrawerMenu";
import Categoria from "./screens/Categoria";
import Produtos from "./screens/Produtos";

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="DrawerMenu">
    
    <Stack.Screen
        name="DrawerMenu"
        component={drawerMenu}
        options={{title:'', headerShown:false}}
        />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"HOME"}}
        />


    </Stack.Navigator>
    </NavigationContainer>
  )

}