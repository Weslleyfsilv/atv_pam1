import {SafeAreaView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      {/*IMAGEM DE HOME*/}
      <View style={styles.topo}> 
        <Image
        style={styles.home}
        source={require('../assets/Imagens/logo.png')}
        />
      </View>

      {/*TITULO DE HOME*/}
      {<Text style={styles.texto}>Bicicletas e Peças</Text>}

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20
  },
  topo: {
    alignItems: 'center'
  },
  home: {
    width: 250,
    height: 180,
  },
  texto: {
    fontSize:28,
    fontWeight:'500',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center'
  },

});