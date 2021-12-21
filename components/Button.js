import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const Button = ({buttontext, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{buttontext}</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        width: '60%',
        maxWidth: 300,
        backgroundColor: '#3284FF',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 20,
    },
    text: {
        fontSize: 20,
        color: '#ffffff'
    }
})
