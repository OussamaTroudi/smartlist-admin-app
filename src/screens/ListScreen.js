import React, {useState} from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import Card from '../shared/card';

const ListScreen = () => {

  const [data, setData] = useState(null);
  
  axios({
    method: 'get',
    url: 'http://192.168.1.17:5000/products',
    headers: { 'content-type': "application/json",
               'x-api-key': "hjm3SE9rhH6I8VB9jx3Roz6uP9r6tghn" } })
               .then(({data}) => {
                setData(data);
              });

  return (
    <FlatList
      data={this.state.data}
      keyExtractor={item => item.idProduct.toString()}
      renderItem={({ item }) => {
        return (
          <Card>
            <Text style={styles.textStyle}>
              Produit: {item.description} - Description: {item.nameCategory}
            </Text>
          </Card>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10
  }
});

export default ListScreen;