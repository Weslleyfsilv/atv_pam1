import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const bike = [
  {
      codigo_produto:1,
      produto: 'BICICLETA WOEN - FIXA',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto1.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:2,
      produto:  'BICICLETA WOEN - SINGLE',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto2.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:3,
      produto: 'BICICLETA WOEN - SINGLE',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto3.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:4,
      produto: 'BICICLETA WOEN - SINGLE',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto4.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:5,
      produto:  'BICICLETA WOEN - RISER',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto5.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:6,
      produto:  'BICICLETA WOEN - BULL',
      parcelas: '3x R$ 1.544,66',
      preco_bike: ' ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto6.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:7,
      produto:  'BICICLETA WOEN - SINGLE',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto7.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:8,
      produto:  'BICICLETA WOEN - FULL',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto8.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:9,
      produto:  'BICICLETA WOEN - SINGLE',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto9.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:10,
      produto:  'BICICLETA WOEN - FIXED',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto10.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:11,
      produto:  'BICICLETA WOEN - BULL',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto11.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:12,
      produto:  'BICICLETA WOEN - SINGLE',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto12.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:13,
      produto:  'BICICLETA WOEN - FIXA',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto13.jpg'),
      descriçao: 'peças feitas de carbono'
  },
  {
      codigo_produto:14,
      produto:  'BICICLETA WOEN - FIXA',
      parcelas: '3x R$ 1.544,66',
      preco_bike: 'ou 4.634,34',
      imagem_bike:require('../assets/Imagens/Bike/produto14.jpg'),
      descriçao: 'peças feitas de carbono'
  },
];
 
 
//COMPONENTE DE ITEM DE RENDERIZACAO
const bikeItem = ({item}) => { return (
  <View style={styles.book_container}>
 
 
  <Image
    style={styles.bike_image}
    source={item.imagem_bike}
  />
 
<View styles={styles.bike_container}>
  <Text style={styles.bike_data}>{item.produto}</Text>
  <Text style={styles.bike_parc}>{item.parcelas}</Text>
  <Text style={styles.bike_data}>{item.preco_bike}</Text>
  <Text style={styles.descriçao}>{item.descriçao}</Text>

  <TouchableOpacity style={styles.bike_button_details}>
    <Text style={styles.bike_button_text}>COMPRAR</Text>

  </TouchableOpacity>


</View>
 
 
 
  </View>
  )
}
 
export default function Produtos() {
  return (
    <SafeAreaView style={styles.container}>
 
      <FlatList
        data={bike}
        renderItem={bikeItem}
        ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
        keyExtractor={produtos => produtos.codigo_produto}
    />
 
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#9E9E9E',
      alignItems: 'center',
      justifyContent: 'center',
  },
  header_container:{
      flex:1,
      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
    
  },
  header_title:{
      color:'#333',
      fontSize:25,
      fontWeight:'bold',
  },
  icone:{
      width:60,
      height:60,
      marginRight:20,
  },
  book_list_header:{
      height:100,
  },
  book_container:{
      flex:1,
      flexDirection:'row',
      padding:10,
      borderWidth:2,
      borderRadius:10,
      borderColor:'#999',
      marginBottom:10,
      backgroundColor:'#fff',
  },
  bike_image:{
      width:150,
      height:220,
      marginRight:10,
      marginBottom:10,
  },
  bike_container:{
      width:200,
      justifyContent:'center',
  },
  bike_data:{
      fontSize:16,
      fontWeight:'600',
      width:'100%',
      textAlign:'left',
  },
  bike_parc:{
      fontSize:14,
      fontWeight:'400',
      width:'100%',
      textAlign:'left',
      color:'#CCC',
      marginBottom:10,
  },
  bike_button_details:{
      alignItems: 'center',
      backgroundColor: '#1760BF',
      padding: 10,
      borderRadius:5,
      marginTop:90,
      width:200,
  },
  bike_button_text:{
      color:'#FFF',
      fontSize:16,
      fontWeight:'bold',
  },
});