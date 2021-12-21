import React,{useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import{AppContext} from '../API/contextAPI'

const Settings = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    return (
        <View style={{flex:1, backgroundColor: darkMode?'#000000':'#ffffff', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 18}}>Settings</Text>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})
