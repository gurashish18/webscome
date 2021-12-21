import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'


const SocialButton = ({iconname, buttontext, color, onPress}) => {
    return (
        <Pressable onPress={onPress} style={{...styles.container, backgroundColor: color}}>
            <Icon name={iconname} style={styles.icon}/> 
            <Text style={styles.text}>{buttontext}</Text>
        </Pressable>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        color: '#ffffff'
    },
    icon: {
        fontSize: 30,
        color: '#ffffff',
        marginRight: 5
    }
})
