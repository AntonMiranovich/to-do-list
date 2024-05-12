import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Form({ addHendler }) {
    const [text, setText] = useState('')

    const onChange = (textInput) => {
        setText(textInput)
    }

    const pressButton = () => {
        if (text) {
            addHendler(text)
            setText('')
        } else {
            alert('Напишите название задачи')
        }
    }

    useEffect(() => {}, [text])

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу' value={text} />
            <Button color='green' onPress={pressButton} title='Добавить задачу' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});