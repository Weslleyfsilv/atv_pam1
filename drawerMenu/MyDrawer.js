import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Produtos from '../screens/Produtos';
import Categoria from '../screens/Categoria';

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
    return (
        <Drawer.Navigator initialRouteName="Inicio">
            <Drawer.Screen
            name='Inicio'
            component={Home}
            options={
                {
                    title:'Inicio ',
                    headerTitleStyle:{color:'trasparent'}
            }
            }
            />

        <Drawer.Screen
            name='Produtos'
            component={Produtos}
            options={
                {
                    title:'Produtos',
                    headerTitleStyle:{color:'trasparent'},
            }
            }
            />

        <Drawer.Screen
            name='Categorias'
            component={Categoria}
            options={
                {  
                    title:'Categoria',
                    headerTitleStyle:{color:'trasparent'}
            }
            }
            />
        </Drawer.Navigator>
    );
}
