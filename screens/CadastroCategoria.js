import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';

export default function CadastroCategoria() {

  const [codCategoria, setcodCategoria] = useState('');
  const [categoriaNome, setCategoriaNome] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [imagem, setImagem] = useState(null);

  return (
    <SafeAreaView style={styles.container}> 

      <View>
        <Image
        style={styles.cadastrar}
          source={require('../assets/Imagens/cadastrar.png')}
        />
      </View>

      <Text style={styles.title}>CATEGORIA</Text>

      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          keyboardType='numeric'
          placeholder='Código Categoria'
          onChangeText={(text) => setcodCategoria(text)}
          value={categoriaNome}
          />
      </View>

      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder='Nome Categoria'
          onChangeText={(text) => setCategoriaNome(text)}
          value={categoriaNome}
          />
      </View>

      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder='Observações Categoria'
          onChangeText={(text) => setObservacoes(text)}
          value={observacoes}
          multiline
        />
      </View>

      <TouchableOpacity style={styles.btnlogin}>
        <Text style={styles.txtlogin}>Cadastrar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },

  cadastrar: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    margin: 20,
    marginBottom: 30,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30
  },
  containerTextInput:{
    flexDirection: 'row',
    borderBottomColor:'#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 20
  },
  textInput: {
    padding: 10
  },

  btnlogin: {
    backgroundColor: '#3480EB',
    borderRadius: 10,
    marginBottom: 30,
    padding: 20,
    fontSize: 15,
    marginTop: 60 
  },

  txtlogin: {
    textAlign: 'center',
    fontWeight: '700',
  },

});
