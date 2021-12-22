import React, {useContext} from 'react'
import { Image, ScrollView, StyleSheet, Text, View,ImageBackground, TouchableOpacity,Dimensions, FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {AppContext} from '../API/contextAPI'
import CustomerReviews from '../components/CustomerReviews'
import Workers from '../components/Workers'
import { SafeAreaView } from 'react-native-safe-area-context'
import {jobs} from '../API/api'
import {services} from '../API/api'
import Services from '../components/Services'

const WINDOW_WIDTH = Dimensions.get("window").width
const CARD_WIDTH = Math.round(WINDOW_WIDTH * 0.3)

const CARD_WIDTH2 = Math.round(WINDOW_WIDTH)

const ServiceScreen = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const navigation = useNavigation();
    return (
        <ScrollView style={{backgroundColor: darkMode ? '#212121' : '#E0E0E0'}}>
            <ImageBackground source={services.image} style={{width: '100%', height: 250, resizeMode: 'contain'}}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: '#ffffff', fontWeight: 'bold'}}>{services.name}</Text>
                    <Text style={{fontSize: 18, color: '#ffffff'}}>{services.title}</Text>
                </View>
            </ImageBackground>

            <View style={{margin: 10, backgroundColor: darkMode ? '#424242' : '#f5f5f5', borderRadius: 20, paddingVertical: 10}}>
                <Text style={{color: darkMode ? '#ffffff' : '#000000', fontSize: 24, marginLeft: 20, fontWeight: 'bold'}}>Select a Service</Text>
                <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                        {jobs.map((s) => (
                            <TouchableOpacity key={s.id} style={{flexDirection: 'column', alignItems: 'center', width: '50%', padding: 5}} onPress={() => navigation.navigate(s.dest)}>
                                <View>
                                    <Image source={s.imageuri} style={{height: 80,width: 80, resizeMode: 'contain', borderRadius: 50}} />
                                </View>
                                <View>
                                    <Text style={{color: darkMode?'#ffffff':'#000000'}}>{s.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>

            <View style={{width: '100%', flexDirection: 'column', justifyContent: 'center'}}>
                <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 24, marginLeft: 30, fontWeight: 'bold'}}>Best-in-class safety measures</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', margin: 10, borderRadius: 20}}>
                    <View style={{flex:0.25, flexDirection: 'column', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/mask.png')}/>
                        <Text style={{color: '#000000'}}>Usage of masks & gloves</Text>
                    </View>
                    <View style={{flex:0.25, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/thermometer.png')}/>
                        <Text style={{color: '#000000'}}>Temperature checks</Text>
                    </View>
                    <View style={{flex:0.25, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/senitiser.png')}/>
                        <Text style={{color: '#000000'}}>Sanitization of tools & area</Text>
                    </View>
                    <View style={{flex:0.25, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={require('../assets/setu.png')}/>
                        <Text style={{color: '#000000'}}>Arogya setu to ensure safety</Text>
                    </View>
                </View>
            </View>

            <View style={{margin: 10, backgroundColor: darkMode ? '#424242' : '#f5f5f5', borderRadius: 20, paddingVertical: 10}}>
                <Workers />
            </View>

            <View style={{margin: 10, backgroundColor: darkMode ? '#424242' : '#f5f5f5', borderRadius: 20, paddingVertical: 10}}>
                <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 24, marginLeft: 20, fontWeight: 'bold'}}>What users are saying about us</Text>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                        <Image source={require('../assets/star.png')} />
                        <View style={{marginLeft: 20}}>
                            <Text style={{color: darkMode?'#ffffff':'#000000', fontWeight: 'bold'}}>4.8 out of 5 stars</Text>
                            <Text style={{fontStyle: 'italic', color: 'grey'}}>Average rating of our service</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                        <Image source={require('../assets/msg.png')}/>
                        <View style={{marginLeft: 20}}>
                            <Text style={{color: darkMode?'#ffffff':'#000000', fontWeight: 'bold'}}>36,000+ reviews</Text>
                            <Text style={{fontStyle: 'italic',color: 'grey'}}>Of our service by users</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{margin: 10, backgroundColor: darkMode ? '#424242' : '#f5f5f5', borderRadius: 20, paddingVertical: 10}}>
                <CustomerReviews />
            </View>
        </ScrollView>
    )
}

export default ServiceScreen

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 5,
    },
    card_container: {
        alignItems:'center',
        justifyContent: 'center',
        height: 130,
        width: CARD_WIDTH,
    },
    Image: {
        height: 60,
        resizeMode: 'contain',
    },
    item:{
        width: 140,
        padding: 10,
        margin: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item2:{
        padding: 10,
        margin: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card_container2: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        height: 100,
        width: CARD_WIDTH2,
        borderRadius: 10,
        margin: 5,
      },
    Image2: {
        height: 80,
        resizeMode: 'contain',
      }
})
