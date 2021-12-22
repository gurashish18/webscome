import React, { useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {AppContext} from '../API/contextAPI'
import Icon from 'react-native-vector-icons/MaterialIcons'

const premiuimCustomers = [
    {
        id: '1',
        image: require('../assets/person.png'),
        name: 'Vishal Sharma',
        joinedon: 'Oct 2020',
        message: 'Fully satisfied... Saved few thousands till now... I will recommmend Webscome company',
        savings: 1559
    },
    {
        id: '2',
        image: require('../assets/person.png'),
        name: 'Vishal Sharma',
        joinedon: 'Oct 2020',
        message: 'Fully satisfied... Saved few thousands till now... I will recommmend Webscome company',
        savings: 1559
    },
    {
        id: '3',
        image: require('../assets/person.png'),
        name: 'Vishal Sharma',
        joinedon: 'Oct 2020',
        message: 'Fully satisfied... Saved few thousands till now... I will recommmend Webscome company',
        savings: 1559
    },
    {
        id: '4',
        image: require('../assets/person.png'),
        name: 'Vishal Sharma',
        joinedon: 'Oct 2020',
        message: 'Fully satisfied... Saved few thousands till now... I will recommmend Webscome company',
        savings: 1559
    },
]

const plans = [
    {
        id: '1',
        months: 12,
        originalprice: 999,
        finalprice: 299
    },
    {
        id: '2',
        months: 6,
        originalprice: 699,
        finalprice: 249
    }
]

const premiuimDetails = [
    {
        id: '1',
        iconName: 'attach-money',
        title: '₹60 k',
        text: 'Saved by Plus members',
        color: 'rgba(116, 131, 6, 0.25)'
    },
    {
        id: '2',
        iconName: 'person-outline',
        title: '16,000+',
        text: 'Happy Plus members',
        color: 'rgba(5, 56, 137, 0.25)'
    },
    {
        id: '3',
        iconName: 'star-outline',
        title: '4.84',
        text: 'Average rating of Plus professionals',
        color: 'rgba(137, 5, 21, 0.25)'
    },
    {
        id: '4',
        iconName: 'list-alt',
        title: '6',
        text: 'Average bookings per member',
        color: 'rgba(14, 137, 5, 0.25)'
    },
]

const PremiumScreen = () => {
    const {darkMode} = useContext(AppContext)
    return (
        <ScrollView style={{backgroundColor:darkMode?'#212121':'#f5f5f5', paddingHorizontal: 10}}>
            <View style={{marginVertical: 20}}>
                <Text style={{fontSize: 24, color: '#9c27b0', fontWeight:'900'}}>Webscome Plus</Text>
                <Text style={{fontSize: 18, color: darkMode?'#ffffff':'#000000', fontWeight: '600'}}>Save 20% on every service + top rated professionals</Text>
            </View>

            <View style={{flex:1,backgroundColor: darkMode ? '#424242' : '#fafafa', borderRadius: 20, paddingVertical: 10}}>
                <Text style={{alignSelf: 'center', fontSize: 24,fontWeight: 'bold', color: darkMode ? '#ffffff' : '#000000'}}>Select your plan</Text>
                    {plans.map((p) => (
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: 'lightgrey', marginVertical: 15, padding: 15, marginHorizontal: 20}}>
                            <View>
                                <Text style={{fontSize: 18, color:darkMode?'#ffffff':'#000000', fontWeight: 'bold'}}>{p.months} months</Text>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={{fontSize:16, color:darkMode?'#ffffff':'#000000', textDecorationLine: 'line-through', textDecorationStyle: 'solid', marginRight: 10}}>₹{p.originalprice}</Text>
                                    <Text style={{fontSize:16, color:darkMode?'#ffffff':'#000000'}}>₹{p.finalprice}</Text>
                                </View>
                            </View>
                            <View style={{padding: 10, borderRadius: 20, backgroundColor:'#0063F6'}}>
                                <Text style={{color:'#ffffff', fontSize: 18}}>ADD</Text>
                            </View>
                        </View>
                    ))}
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 15, padding: 15}}>
                <View style={{maxWidth: 200}}>
                    <Text style={{fontSize: 20,fontWeight: 'bold', color: darkMode ? '#ffffff' : '#000000'}}>100% money back guarantee</Text>
                    <Text style={{fontSize: 16,color: darkMode?'#f5f5f5':'#212121', marginTop: 5}}>If you save less than the membership price, we will refund you the difference</Text>
                </View>
                <View>
                    <Image source={require('../assets/tick.png')} style={{height: 80, width: 80, resizeMode: 'contain'}}/>
                </View>
            </View>

            <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                {premiuimDetails.map((s) => (
                    <View key={s.id} style={{backgroundColor: s.color, flexDirection: 'column', alignItems: 'center',justifyContent: 'space-around', width: '50%', padding: 5, minHeight: 150}}>
                        <View>
                            <Icon name={s.iconName} style={{color: darkMode?'#ffffff':'#000000'}} size={40}/>
                        </View>
                        <View>
                            <Text style={{alignSelf: 'center', color: darkMode?'#ffffff':'#000000', fontSize: 18, fontWeight: 'bold'}}>{s.title}</Text>
                            <Text style={{color: darkMode?'#f5f5f5':'#000000'}}>{s.text}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={{marginTop: 30}}>
                <Text style={{alignSelf: 'center', fontSize: 24,fontWeight: 'bold', color: darkMode ? '#ffffff' : '#000000'}}>Hear from our Happy Customers</Text>
                {premiuimCustomers.map((s) => (
                    <View key={s.id} style={{flexDirection: 'column', marginVertical: 10, borderWidth: 0.5, borderColor: darkMode?'#f5f5f5':'#212121', padding: 5, borderRadius: 20}}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={s.image} style={{height: 60, width: 60, resizeMode: 'contain'}}/>
                                <View style={{marginLeft: 10}}>
                                    <Text style={{color: darkMode?'#ffffff':'#000000'}}>{s.name}</Text>
                                    <Text style={{color: 'grey'}}>Member since {s.joinedon}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{color: darkMode?'#ffffff':'#000000', fontStyle: 'italic', fontSize: 16}}>Saved ₹{s.savings}</Text>
                            </View>
                        </View>
                        <View style={{alignSelf: 'center', marginTop: 10}}>
                            <Text style={{fontSize: 16, color: darkMode?'#ffffff':'#000000', fontWeight: '600'}}>{s.message}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default PremiumScreen

const styles = StyleSheet.create({})
