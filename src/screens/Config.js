import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';

const Config = ({navigation}) => {
    const [Adress, setAdress] = useState(null);
    const [Port, setPort] = useState(null);
    return (
        <View justifyContent='center'>
            <TextInput
                style={styles.text}
                onChangeText={text => setAdress(text)}
                placeholder={'Adress'}
                placeholderTextColor={'grey'}>
            </TextInput>

            <TextInput
                style={styles.text}
                onChangeText={text => setPort(text)}
                placeholder={'Port'}
                placeholderTextColor={'grey'}>
            </TextInput>
            <Pressable
                style={[styles.button, styles.button0]}
                onPress={() => {
                    navigation.navigate('Home', {Adress, Port})
                    console.log(Adress)
                    console.log(Port)
                }}>
                <Text style={styles.text}>Enter</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button0: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "#2196F3",
  }
});

export default Config;