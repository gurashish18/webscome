import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServiceScreen from '../Screens/ServiceScreen';
import BottomTabNavigation from '../components/BottomTabNavigation';
import SubServicesScreen from '../Screens/SubServicesScreen';
import GiftCard from '../Screens/GiftCard';
import Help from '../Screens/Help';
import ShareScreen from '../Screens/Share';
import Refer from '../Screens/Refer';
import Settings from '../Screens/Settings';
import OnboardingScreen from '../Screens/OnboardingScreen';

const AppNav = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {/* <Stack.Screen name="BottomTab" component={BottomTabNavigation} /> */}
                <Stack.Screen name="Onboard" component={OnboardingScreen} />
                {/* <Stack.Screen name="Service" component={ServiceScreen} />
                <Stack.Screen name="SubService" component={SubServicesScreen} />
                <Stack.Screen name="GiftCard" component={GiftCard} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Share" component={ShareScreen} />
                <Stack.Screen name="Refer" component={Refer} />
                <Stack.Screen name="Settings" component={Settings} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNav
