import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import Card from '../shared/card';

const ListScreen = ({ navigation }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const Adress = navigation.getParam('Adress');
    const Port = navigation.getParam('Port');

    console.log(Adress);
    console.log(Port);
    axios({
      method: 'get',
      url: `http://${Adress}:${Port}/products`,
      headers: { 'content-type': "application/json",
                 'x-api-key': "hjm3SE9rhH6I8VB9jx3Roz6uP9r6tghn" } })
                 .then(({data}) => {
                  setData(data);
                });
  }, []);
  
  

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.idProduct}
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