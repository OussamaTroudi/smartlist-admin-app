import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  const Adress = navigation.getParam('Adress');
  const Port = navigation.getParam('Port');

  console.log(Adress);
  console.log(Port);
  return (
<<<<<<< HEAD
    <View style={styles.text}>
      <Button style={styles.button} title="BarCode Scanner" onPress={() => navigation.navigate('Components', {Adress, Port})}>
      </Button>
      <View style={styles.space} />
      <Button style={styles.button} title="Consult Database" onPress={() => {
        navigation.navigate('List', {Adress, Port})
      }}>
      </Button>
=======
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
>>>>>>> dev0
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  space: {
    width: 10,
    height: 10,
  }
});

export default HomeScreen;