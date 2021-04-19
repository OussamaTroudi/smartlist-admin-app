import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  const Adress = navigation.getParam('Adress');
  const Port = navigation.getParam('Port');

  console.log(Adress);
  console.log(Port);
  return (
    <View>
      <Text style={styles.text}>Admin App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Components', {Adress, Port})}>
        <Text>BarCode Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate('List', {Adress, Port})
      }}>
        <Text>Consult Database</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;