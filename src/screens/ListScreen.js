import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import axios from 'axios';


/*const api = axios.create({
  baseURL: 'http://192.168.1.17:5000/products/'
})*/

const ListScreen = () => {

  const [data, setData] = useState([{name: "First Title"}])
  
  axios({
    method: 'get',
    url: 'http://192.168.1.17:5000/products',
    headers: { 'content-type': "application/json",
               'x-api-key': "hjm3SE9rhH6I8VB9jx3Roz6uP9r6tghn" } })
               .then(({data}) => {
                console.log(data);
                setData(data);
              });
  
  /*constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data)
    });
  }*/

/*  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://192.168.1.17:5000/products?x-api-key=hjm3SE9rhH6I8VB9jx3Roz6uP9r6tghn'

    })
                
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log("error"))

  }, [])*/

  return (
    <FlatList
      keyExtractor={item => '${item.idProduct}'}
      data={data}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Produit: {item.description} - Description: {item.nameCategory}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;