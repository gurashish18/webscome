import React, { useContext } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {AppContext} from '../API/contextAPI'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: '1',
        icon: 'message',
        text: 'Help Center',
        dest: 'Help'
    },
    {
        id: '2',
        icon: 'share',
        text: 'Share Webscome Company',
        dest: 'Share'
    },
    {
        id: '3',
        icon: 'monetization-on',
        text: 'Refer & Earn',
        dest: 'Refer'
    },
    {
        id: '4',
        icon: 'card-giftcard',
        text: 'My Gift Cards',
        dest: 'GiftCard'
    },
    {
        id: '5',
        icon: 'star',
        text: 'Rate Webscome Comany',
        dest: 'GiftCard'
    },
    {
        id: '6',
        icon: 'settings',
        text: 'Settings',
        dest: 'Settings'
    },
    {
        id: '7',
        icon: 'add-alert',
        text: 'Press Only In Emergency Situation',
        dest: 'GiftCard'
    },
]

const ProfileScreen = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const navigation = useNavigation()

    // const handleNav = (dest) => {
    //     navigation.navigate(dest)
    // }

    const toggleSwitch = () => setdarkMode(!darkMode);
    return (
            <FlatList
                style={{backgroundColor: darkMode?'#000000':'#E0E0E0'}}
                ListHeaderComponent={
                    <>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20}}>
                            <View style={{flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 24, color: darkMode ? '#ffffff' : '#000000', marginBottom: 10}}>Verified Customer</Text>
                                <Text style={{color: 'grey'}}>+91 123200903047</Text>
                            </View>
                            <View>
                                <Icon name="edit" size={28} style={{color: darkMode ? '#ffffff' : '#000000'}}/>
                            </View>
                            </View>
                        </>
                    }
                horizontal={false} 
                data={data} 
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.dest)} style={{backgroundColor: darkMode?'#000000':'#ffffff', flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderWidth: 0.5, margin: 10, borderRadius: 20, borderColor: darkMode ? '#ffffff': '#ffffff' }}>
                        <Icon name={item.icon} size={30} style={{paddingHorizontal: 20, color: darkMode ? '#ffffff' : '#000000'}}/>
                        <Text style={{fontSize: 18, color: darkMode ? '#ffffff' : '#000000'}}>{item.text}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <>
                        <View style={{flex: 1,alignItems: 'center',justifyContent:'center', marginVertical: 20}}>
                            <Switch
                                trackColor={{ false: "#000000", true: "#81b0ff" }}
                                thumbColor={darkMode ? "#f5dd4b" : "#ffffff"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={darkMode}
                                style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                            />
                        </View>

                        <View style={{ alignItems: 'center', borderRadius: 30, padding: 20, marginHorizontal: 50, backgroundColor: '#D0342C', marginVertical: 20}}>
                            <Text style={{fontSize: 18,color: '#ffffff', fontWeight: 'bold'}}>Logout</Text>
                        </View>
                    </>
                }    
            />
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})
