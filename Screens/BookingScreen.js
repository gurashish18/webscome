import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native'
import {AppContext} from '../API/contextAPI'
import { SubServices } from '../API/api'
import Icon from 'react-native-vector-icons/MaterialIcons'

const BookingScreen = () => {
    const {darkMode} = useContext(AppContext)
    return (
        <FlatList
                style={{backgroundColor: darkMode ? '#212121' : '#e0e0e0'}}
                ListHeaderComponent={
                    <>
                        <Text style={{fontSize: 24, color: darkMode?'#ffffff':'#000000', paddingVertical: 20, marginLeft: 30, fontWeight: 'bold'}}>Your Bookings</Text>
                    </>
                }
                horizontal={false} 
                data={SubServices} 
                renderItem={({item, index}) => (
                    <SafeAreaView style={{padding: 10, margin: 10, borderRadius: 20, backgroundColor: darkMode?'#424242':'#f5f5f5'}}>
                        <Image source={item.image} style={{height: 250,width: 250, resizeMode: 'contain', alignSelf: 'center', borderRadius: 10}}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
                            <View>
                                <Text style={{color: '#FFB800', fontWeight:'bold', fontSize: 16}}>UP TO {item.off}% OFF</Text>
                                <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{fontSize: 16, color: 'grey'}}>{item.stars}</Text>
                                    <Icon name='star' size={24} style={{color: darkMode?'#ffffff':'#000000'}}/>
                                </View>
                                <Text style={{fontSize: 16, color: 'grey'}}>{item.rating}+ ratings</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>₹{item.price}</Text>
                                    <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 20, fontWeight: 'bold', marginRight: 15}}>.</Text>
                                    <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 20, fontWeight: 'bold'}}>{item.time} mins</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{fontSize: 20, padding: 15, color: '#D0342C', fontWeight: 'bold'}}>Request Cancel</Text>
                    </SafeAreaView>
                )}
                keyExtractor={item => item.id}    
            />
    )
}

export default BookingScreen

const styles = StyleSheet.create({})
