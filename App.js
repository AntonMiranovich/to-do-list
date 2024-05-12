import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'Купить молоко', key: '1' },
    { text: 'Купить картошку', key: '2' },
    { text: 'Купить машину', key: '3' },
    { text: 'Купить дом', key: '4' },
  ])

  const addHendler = (text) => {
    setListOfItems([{ text: text, key: Math.random().toString(36).substring(7) }, ...listOfItems])
  }

  const deleteHendler = (key) => {
    setListOfItems(listOfItems.filter((el) => el.key != key))
  }

  return (
    <View>
      <Header />
      <Form addHendler={addHendler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} deleteHendler={deleteHendler} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
