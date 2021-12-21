import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { AppContext } from '../API/contextAPI'
import { useNavigation } from '@react-navigation/native'

const InfoCard = ({image, title, text, link}) => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const navigation = useNavigation()
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: 10, backgroundColor: darkMode ? '#212121' : '#ffffff', borderRadius: 20, paddingVertical: 10}}>
            <Image source={image} />
            <View style={{width: 250}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 5, color: darkMode ? '#ffffff': '#000000'}}>{title}</Text>
                <Text style={{marginBottom: 5, color: darkMode ? '#ffffff': '#000000'}}>{text}</Text>
                <Text style={{color: '#0066FF'}} onPress={() => navigation.navigate("Safety Screen")}>Know More...</Text>
            </View>
        </View>
    )
}

export default InfoCard

const styles = StyleSheet.create({})
