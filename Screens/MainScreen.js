import React, {useContext, useState, useEffect} from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, Platform, } from 'react-native'
import SearchBar from '../components/SearchBar'
import ImageSlider from '../components/ImageSlider'
import Icon from 'react-native-vector-icons/MaterialIcons'
import InfoCard from '../components/InfoCard'
import {AppContext} from '../API/contextAPI'
import {images} from '../API/api'
import { useNavigation } from '@react-navigation/native'
import { data } from '../API/api'
import Geolocation from '@react-native-community/geolocation';


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
    const [currentLongitude,setCurrentLongitude] = useState('...');
    const [currentLatitude,setCurrentLatitude] = useState('...');
    const [locationStatus,setLocationStatus] = useState('');
    const [address, setaddress] = useState('Patna, Bihar')
    const navigation = useNavigation()
    const {darkMode, setdarkMode} = useContext(AppContext);

    const getOneTimeLocation = () => {
      setLocationStatus('Getting Location ...');
      Geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
          setLocationStatus('You are Here');
  
          //getting the Longitude from the location json
          const currentLongitude = 
            JSON.stringify(position.coords.longitude);
  
          //getting the Latitude from the location json
          const currentLatitude = 
            JSON.stringify(position.coords.latitude);
  
          //Setting Longitude state
          setCurrentLongitude(currentLongitude);
          
          //Setting Longitude state
          setCurrentLatitude(currentLatitude);
        },
        (error) => {
          setLocationStatus(error.message);
        },
        {
          enableHighAccuracy: false,
          timeout: 30000,
          maximumAge: 1000
        },
      );
    };

    useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'Webscome needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                // subscribeLocationLocation();
                // getAddressFromCoordinates(currentLatitude, currentLongitude)
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        requestLocationPermission();
        return () => {
          // Geolocation.clearWatch(watchID);
        };
      }, []);

      

      // const subscribeLocationLocation = () => {
      //   watchID = Geolocation.watchPosition(
      //     (position) => {
      //       //Will give you the location on location change
            
      //       setLocationStatus('You are Here');
      //       console.log(position);
    
      //       //getting the Longitude from the location json        
      //       const currentLongitude =
      //         JSON.stringify(position.coords.longitude);
    
      //       //getting the Latitude from the location json
      //       const currentLatitude = 
      //         JSON.stringify(position.coords.latitude);
    
      //       //Setting Longitude state
      //       setCurrentLongitude(currentLongitude);
    
      //       //Setting Latitude state
      //       setCurrentLatitude(currentLatitude);
      //     },
      //     (error) => {
      //       setLocationStatus(error.message);
      //     },
      //     {
      //       enableHighAccuracy: false,
      //       maximumAge: 1000
      //     },
      //   );
      // };

      // function getAddressFromCoordinates({ latitude, longitude }) {
      //   return new Promise((resolve) => {
      //     const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=QaMTGluYN5dT2bahQPmAJTc5P657rcedX4li4PaSLeM&mode=retrieveAddresses&prox=${latitude},${longitude}`
      //     fetch(url)
      //       .then(res => res.json())
      //       .then((resJson) => {
      //         // the response had a deeply nested structure :/
      //         console.log(resJson)
      //         if (resJson
      //           && resJson.Response
      //           && resJson.Response.View
      //           && resJson.Response.View[0]
      //           && resJson.Response.View[0].Result
      //           && resJson.Response.View[0].Result[0]) {
      //           console.log(resJson.Response.View[0].Result[0].Location.Address.Label)
      //         } else {
      //           resolve()
      //         }
      //       })
      //       .catch((e) => {
      //         console.log('Error in getAddressFromCoordinates', e)
      //         resolve()
      //       })
      //   })
      // }
      
    return (
        <ScrollView style={{backgroundColor: darkMode ? '#212121' : '#e0e0e0'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', margin: 10}}>
                <Icon name="location-on" size={30} style={{color: darkMode?'#ffffff':'#000000'}}/>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{marginHorizontal: 10, color: darkMode?'#f5f5f5':'#212121'}}>{currentLatitude}</Text>
                    <Text style={{color: darkMode?'#f5f5f5':'#212121'}}>{currentLongitude}</Text>
                    {/* <Text style={{color: darkMode?'#f5f5f5':'#212121'}}>{address}</Text> */}
                </View>
            </View>

            <View>
                <SearchBar />
            </View>
            <ImageSlider data={images}/>
            
            <View style={{flex:1,margin: 10, backgroundColor: darkMode ? '#424242' : '#fafafa', borderRadius: 20, paddingVertical: 10, position: 'relative',zIndex: -1}}>
                <Text style={{...styles.title, color: darkMode ? '#ffffff' : '#000000'}}>Services</Text>
                <View style={{flex: 1,flexDirection: 'row',flexWrap: 'wrap'}}>
                        {data.map((s) => (
                            <TouchableOpacity key={s.id} style={{flexDirection: 'column', alignItems: 'center', width: '50%', padding: 5}} onPress={() => navigation.navigate(s.dest)}>
                                <View>
                                    <Image source={s.imageuri} style={{height: 60,width: 60, resizeMode: 'contain'}} />
                                </View>
                                <View>
                                    <Text style={{color: darkMode?'#ffffff':'#000000'}}>{s.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                </View>
            </View>

            <ImageSlider data={images}/>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',margin: 10, backgroundColor: darkMode ? '#424242' : '#fafafa', borderRadius: 20, padding: 10}}>
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
                <View style={{backgroundColor: '#fafafa', marginHorizontal: 20,paddingVertical: 10, alignItems: 'center', borderRadius: 10}}>
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
