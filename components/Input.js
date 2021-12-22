import React, { useContext } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { AppContext } from '../API/contextAPI'

const Input = ({value, setvalue, placeholder, icon, secureTextEntry}) => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    return (
        <View style={{...styles.container, backgroundColor: darkMode?'#424242':'#f5f5f5'}}>
            <Icon name={icon} style={{...styles.icon, color: darkMode?'lightgrey':'grey'}}/>
            <TextInput value={value} onChangeText={setvalue} placeholder={placeholder} placeholderTextColor={darkMode?'lightgrey':'grey'} secureTextEntry={secureTextEntry} style={{...styles.input, color: darkMode?'#f5f5f5':'#212121'}} />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 30,
        elevation: 20,
        shadowColor: '#000000',
        shadowOffset: {width: -2, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    input: {
        fontSize: 16,
    },
    icon: {
        fontSize: 24
    }
})
