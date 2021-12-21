import React, { useContext } from 'react'
import { FlatList, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import {safety} from '../API/api'
import ImageSlider from '../components/ImageSlider'
import { AppContext } from '../API/contextAPI'
import VaccineInfo from '../components/VaccineInfo'
import { vaccineInfo, safetyInfo } from '../API/api'

const SafetyScreen = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    return (
        <ScrollView style={{backgroundColor: darkMode?'#000000':'#E0E0E0'}}>
            <ImageSlider data={safety}/>
            <Text style={{color: darkMode?'#ffffff':'#000000', alignSelf: 'center', fontSize: 22, fontWeight: 'bold'}}>Commited to your safety</Text>

            <FlatList
                style={{margin: 10}}
                horizontal={true} 
                data={vaccineInfo}
                renderItem={({item, index}) => (
                    <View style={{marginHorizontal: 10}}>
                        <VaccineInfo data={item}/>
                    </View>
                )}
                keyExtractor={item => item.id}    
            />

            {safetyInfo.map((s) => (
                <View key={s.id} style={{backgroundColor: '#ffffff', padding: 10, marginVertical: 10, marginHorizontal: 5, borderRadius: 20}}>
                    <Image source={s.imageuri} style={{}}/>
                    <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>{s.title}</Text>
                    <Text style={{fontSize: 16, color: '#000000'}}>{s.text}</Text>
                </View>
            ))}

        </ScrollView>
    )
}

export default SafetyScreen

const styles = StyleSheet.create({})
