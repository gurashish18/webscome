import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../Screens/SignUpScreen'
import LoginScreen from '../Screens/LoginScreen'
import BottomTabNavigation from './BottomTabNavigation';
import ServiceScreen from '../Screens/ServiceScreen';
import SubServicesScreen from '../Screens/SubServicesScreen';
import ServiceInfo from '../Screens/ServiceInfo';
import GiftCard from '../Screens/GiftCard';
import Help from '../Screens/Help'
import ShareScreen from '../Screens/Share';
import Refer from '../Screens/Refer';
import Settings from '../Screens/Settings'
import otplogin from '../Screens/otplogin'


const Navigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="otplogin" component={otplogin} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
                <Stack.Screen name="Service" component={ServiceScreen} />
                <Stack.Screen name="SubService" component={SubServicesScreen} />
                {/* <Stack.Screen name="ServiceInfo" component={ServiceInfo} /> */}
                <Stack.Screen name="GiftCard" component={GiftCard} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Share" component={ShareScreen} />
                <Stack.Screen name="Refer" component={Refer} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
