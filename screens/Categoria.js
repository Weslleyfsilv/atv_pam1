import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const categoria = [
{

    codigo_produto:1,
    categoria: 'BICICLETAS WOEN - FIXA',
    parcelas: '3x R$ 1.544,66',
    preco_bike: 'ou 4.634,34',
},
{
    codigo_produto:2,
    categoria:  'BICICLETA WOEN - SINGLE',
    parcelas: '3x R$ 1.544,66',
    preco_bike: 'ou 4.634,34',
},
{
    codigo_produto:3,
    categoria: 'BICICLETA WOEN - BULLHORN',
    parcelas: '3x R$ 1.544,66',
    preco_bike: 'ou 4.634,34',
},
{
    codigo_produto:4,
    categoria: 'BICICLETA WOEN - RISER',
    parcelas: '3x R$ 1.544,66',
    preco_bike: 'ou 4.634,34',
},
{
    codigo_produto:5,
    categoria:  'BICICLETA WOEN - FULL',
    parcelas: '3x R$ 1.544,66',
    preco_bike: 'ou 4.634,34',
},
];

const bikeItem = ({item}) => { return (
<View style={styles.bike_container}>

    <View styles={styles.bike}>
        <Text style={styles.bike_data}>{item.categoria}</Text>
        <Text style={styles.bike_author}>{item.parcelas}</Text>
        <Text style={styles.bike_data}>{item.preco_bike}</Text>
        <Text style={styles.descriçao}>{item.descriçao}</Text>

    <TouchableOpacity style={styles.bike_button_details}>
        <Text style={styles.bike_button_text}>DETALHE</Text>
    </TouchableOpacity>

    </View>

</View>
)
}

export default function Categoria() {
return (
    <SafeAreaView style={styles.container}>

        <FlatList
            data={categoria}
            renderItem={bikeItem}
            ListEmptyComponent={<Text>A LISTA DE CATEGORIAS ESTÁ VAZIA</Text>}
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
bike_container:{
    flex:1,
    flexDirection:'row',
    padding:10,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#999',
    marginBottom:10,
    backgroundColor:'#fff',
},
bike:{
    width:200,
    justifyContent:'center',
},
bike_data:{
    fontSize:20,
    fontWeight:'600',
    width:'100%',
    textAlign:'left',
},
bike_author:{
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
    marginTop:5,
    width:280,
},
bike_button_text:{
    color:'#FFF',
    fontSize:16,
    fontWeight:'bold',
},
});
