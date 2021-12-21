import React, {useContext} from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import ImageSlider from '../components/ImageSlider'
import Services from '../components/Services'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InfoCard from '../components/InfoCard'
import {AppContext} from '../API/contextAPI'
import {images} from '../API/api'
import VaccineInfo from '../components/VaccineInfo'
import { useNavigation } from '@react-navigation/native'
import { data } from '../API/api'



const offers = [
    {
      id: '1',
      title: '10% off on Electronics Repair',
    },
    {
      id: '2',
      title: '10% off on Electronics Repair',
    },
    {
        id: '3',
        title: '10% off on Electronics Repair',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title2}>{title}</Text>
    </View>
  );

const MainScreen = () => {
    const navigation = useNavigation()
    const {darkMode, setdarkMode} = useContext(AppContext);
    return (
        <ScrollView style={{backgroundColor: darkMode ? '#000000' : '#E0E0E0'}}>

            <View>
                <SearchBar />
            </View>
            <ImageSlider data={images}/>
            
            <View style={{flex:1,margin: 10, backgroundColor: darkMode ? '#212121' : '#ffffff', borderRadius: 20, paddingVertical: 10, position: 'relative',zIndex: -1}}>
                <Text style={{...styles.title, color: darkMode ? '#ffffff' : '#000000'}}>Services</Text>
                <Services data={data}/>
            </View>

            <ImageSlider data={images}/>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',margin: 10, backgroundColor: darkMode ? '#212121' : '#ffffff', borderRadius: 20, padding: 10}}>
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: darkMode ? '#ffffff' : '#000000'}}>Plumbers</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: darkMode ? '#ffffff' : '#000000'}}>Electricians</Text>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: darkMode ? '#ffffff' : '#000000'}}>Carpenters</Text>
                </View>
                <Image source={require('../assets/people.png')} style={{height: 200, resizeMode: 'contain'}}/>
            </View>
               
            <View style={{backgroundColor: '#003B95', paddingVertical: 15}}>
                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', padding: 10}}>
                    <Image source={require('../assets/logo.png')} />
                </View>
                <FlatList
                    horizontal={true} 
                    data={offers} 
                    renderItem={({item, index}) => (
                        <View style={styles.item}>
                            <Text style={styles.title2}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}    
                />
                <View style={{backgroundColor: '#ffffff', marginHorizontal: 20,paddingVertical: 10, alignItems: 'center', borderRadius: 10}}>
                    <Text style={{color: '#0066FF'}}>View Membership</Text>
                </View>
            </View>

            <View style={{padding: 15}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    {/* Top */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/guard.png')}/>
                        <Text style={{marginLeft: 5, fontSize: 18, color: darkMode ? '#ffffff' : '#000000'}}>Webscome Safe</Text>
                    </View>
                    <Icon name="keyboard-arrow-right" size={30} style={{color: darkMode ? '#ffffff' : '#000000'}} onPress={()=>navigation.navigate("Safety Screen")}/>
                </View>
                
                {/* <VaccineInfo /> */}
            </View>

            <InfoCard image={require('../assets/money.png')} title="Help your friends get a safe service" text="Refer & earn upto RS 5000"/>
            <InfoCard image={require('../assets/shield.png')} title="Webscome Company Insurance Protection Program" text="Upto Rs 10000 insurance protection with every service request"/>
            <InfoCard image={require('../assets/heart.png')} title="Anti Discrimination Policy" text="Upto Rs 10000 insurance protection with every service request"/>
        </ScrollView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20
    },
    item: {
        backgroundColor: '#0066FF',
        width: 140,
        padding: 20,
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title2: {
        color:'#ffffff',
        fontWeight: 'bold'
    }
})
