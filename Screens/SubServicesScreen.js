import React, {useState, useContext} from 'react'
import { ScrollView, StyleSheet, Text, View, ImageBackground, FlatList, Image, Button, SafeAreaView } from 'react-native'
import { subservice } from '../API/api'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import Modal from "react-native-modal";
import {AppContext} from '../API/contextAPI'
import CustomerReviews from '../components/CustomerReviews'
import { SubServices } from '../API/api'

const SubServicesScreen = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
            <FlatList
                style={{backgroundColor: darkMode ? '#212121' : '#E0E0E0'}}
                ListHeaderComponent={
                    <>
                        <ImageBackground source={subservice.image} style={{width: '100%', height: 250}}>
                            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Text style={{fontSize: 30, color: '#ffffff', fontWeight: 'bold', paddingBottom: 10}}>{subservice.name}</Text>
                            </View>
                        </ImageBackground>

                        <Text style={{fontSize: 24, color: darkMode?'#ffffff':'#000000', paddingVertical: 20, marginLeft: 30, fontWeight: 'bold'}}>Select your service</Text>
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
                            <View style={{padding: 10, borderRadius: 20, backgroundColor:'#0063F6'}}>
                                <Text style={{color:'#ffffff', fontSize: 18}}>ADD +</Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 20, padding: 15, color: '#0063F6', fontWeight: 'bold'}} onPress={toggleModal}>View Details</Text>
                        <Modal isVisible={isModalVisible} style={{backgroundColor: '#ffffff'}}>
                            <ScrollView style={{ flex: 1, backgroundColor: darkMode?'#212121':'#ffffff' }}>
                                <Icon name='close' size={30} style={{ position: 'absolute', top: 0, right: 0, color: darkMode?'#ffffff':'#000000', padding: 20}} onPress={toggleModal}/>

                                <View style={{marginTop: 50}}>
                                    <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 22, marginLeft: 20, fontWeight: 'bold'}}>What does this service include ?</Text>
                                    {item.includes.map((s) => (
                                        <Text key={s.id} style={{fontSize: 16, color: 'grey', alignSelf: 'center', marginTop: 5}}>{s.text}</Text>
                                    ))}
                                </View>

                                <View style={{marginTop: 20}}>
                                    <Text style={{color: darkMode?'#ffffff':'#000000',fontSize: 22, marginLeft: 20, fontWeight: 'bold'}}>What users are saying about us</Text>
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
                                                <Text style={{fontStyle: 'italic', color: 'grey'}}>Of our service by users</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View style={{marginTop: 20}}>
                                    <CustomerReviews />
                                </View>
                            </ScrollView>
                        </Modal>
                    </SafeAreaView>
                )}
                keyExtractor={item => item.id}    
            />
    )
}

export default SubServicesScreen

const styles = StyleSheet.create({
    item2:{
        padding: 10,
        margin: 5,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})
