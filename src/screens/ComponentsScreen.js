import React, { useState, useEffect } from 'react';
import { Text, Alert, View, StyleSheet, Button,Pressable, Modal, FlatList } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import _ from "lodash"
import Card from '../shared/card';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState(null);
  const [dataModel, setDataModel] = useState(null);
  const [type, setType] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen0, setModalOpen0] = useState(false);

  const [msg, setMsg] = useState(null);
  const [isModel, setModel] = useState(null);
  const [isId, setId] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(`${data}`);
    setType(`${type}`);


    axios({
      method: 'get',
      url: 'http://192.168.1.17:5000/models',
      headers: {
        'content-type': "application/json",
        'x-api-key': "hjm3SE9rhH6I8VB9jx3Roz6uP9r6tghn" }
    })
    .then(({data}) => {
      setDataModel({data});
      console.log(dataModel);
    })

    

    axios({
      method: 'post',
      url: 'http://192.168.1.17:5000/model/validateBarcode',
      headers: {
        'content-type': "application/json",
        'x-api-key': "hjm3SE9rhH6I8VB9jx3Roz6uP9r6tghn" },
      data: {
        barCode: `${data}`,
      }
    })
    .then(({data}) => {
      setModalOpen(true);
      setMsg(`${data.msg}`);
      console.log({data});
      setModel(`${data.Model[0].nameModel}`);
      setId(`${data.Model[0].idModel}`);
    });
};

renderItem = ({item, index}) => 
<View style={styles.textStyle}>
  <View>
   <Text style={styles.textStyle}>
     {item.description}
   </Text>
   <Text style={styles.textStyle}>{item.idModel}</Text>
 </View>
</View>

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.centeredView}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen}
        onRequestClose={() => {
          setModalOpen(!modalOpen);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bar code with type {type} and data {data} has been scanned!</Text>
            <Text style={styles.modalText}>{msg} Model: {isModel} ID: {isId}.Do you want to add it?</Text>
            <View style={styles.button}>
              <Pressable
                style={[styles.button, styles.button0]}
                onPress={() => {
                  setScanned(false)
                  setModalOpen(!modalOpen)
                  setModalOpen0(true)
                }}
              >
                <Text style={styles.textStyle}>Add it</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.button0]}
                onPress={() => {
                  setScanned(false)
                  setModalOpen(!modalOpen)
                }}
              >
                <Text style={styles.textStyle}>Scan Again</Text>
              </Pressable>
              </View>
          </View>
        </View>
      </Modal>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalOpen0}
        onRequestClose={() => {
          setModalOpen0(!modalOpen0);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <FlatList
      data={dataModel}
      keyExtractor={item => item.idModel.toString()}
      renderItem={({ item }) => {
        return (
          <Card>
            <Text style={styles.textStyle}>
              Produit: {item.description} - BarCode: {item.barCode}
            </Text>
          </Card>
        );
      }}
    />
          </View>
        </View>
      </Modal>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button1: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "#F194FF",
  },
  button0: {
    borderRadius: 20,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});