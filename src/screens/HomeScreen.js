import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Admin App</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Components')}>
        <Text>BarCode Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Consult DataBase</Text>
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
