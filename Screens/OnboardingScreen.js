import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Context from '../API/contextAPI'
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation()
    const onDone = () => {
        navigation.navigate("Login")
    };
    const onSkip = () => {
        navigation.navigate("Login")
    };
    const RenderItem = ({item}) => {
        return (
              <View style={{flex: 1, backgroundColor: item.backgroundColor,alignItems: 'center',justifyContent: 'center'}}>
                <Image
                  style={styles.introImageStyle}
                  source={item.image} />
                <Text style={styles.introTextStyle}>
                  {item.text}
                </Text>
              </View>
        );
      };
    
    
      const RenderSkipButton = () => {
        return (
            <View style={{paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
              <Text style={{color: '#ffffff', fontSize: 18}}>Skip</Text>
            </View>
        );
      };
    
      const RenderNextButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
                <Text style={{color: '#ffffff', fontSize: 18}}>Next</Text>
                <Icon name="arrow-right-alt" style={{color: '#ffffff', fontSize: 18}}/>
              </View>
        );
      };
    
      const RenderDoneButton = () => {
        return (
              <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical:5, paddingHorizontal: 10, borderRadius: 10, backgroundColor: '#3284FF'}}>
                <Text style={{color: '#ffffff', fontSize: 18}}>Done</Text>
                <Icon name="done" style={{color: '#ffffff', fontSize: 18}}/>
              </View>
        );
      };
    
      return (
        
              <AppIntroSlider
                data={slides}
                renderItem={RenderItem}
                onDone={onDone}
                showSkipButton={true}
                onSkip={onSkip}
                renderNextButton={RenderNextButton}
                renderSkipButton={RenderSkipButton}
                renderDoneButton={RenderDoneButton}
                dotStyle={{backgroundColor: 'lightblue'}}
                activeDotStyle={{backgroundColor: '#3284FF'}}
              />          
      );
}

export default OnboardingScreen

const styles = StyleSheet.create({
    introImageStyle: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
      },
      introTextStyle: {
        fontSize: 16,
        color: '#3284FF',
        textAlign: 'center',
        paddingVertical: 30,
      }
})

const slides = [
    {
      key: 's1',
      text: 'Book Professional from your mobile · Services we provide · AC Repair · Bike Service · Car Service · Carpenter · House Cleaners · Electrician · Appliance Repire.',
      title: 'Mobile Recharge',
      image: require('../assets/webscomelogo.png'),
      backgroundColor: '#ffffff',
    },
    {
      key: 's2',
      title: 'Flight Booking',
      text: 'Book Professional from your mobile · Services we provide · AC Repair · Bike Service · Car Service · Carpenter · House Cleaners · Electrician · Appliance Repire.',
      image: require('../assets/Service2.png'),
      backgroundColor: '#ffffff',
    },
  ]
