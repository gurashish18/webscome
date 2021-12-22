import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../Screens/MainScreen'
import BookingScreen from '../Screens/BookingScreen';
import SafetyScreen from '../Screens/SafetyScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import PremiumScreen from '../Screens/PremiumScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import {AppContext} from '../API/contextAPI'

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    return (
        <Tab.Navigator
            initialRouteName="Main Screen"
            screenOptions={{
                tabBarActiveTintColor: darkMode ? '#ffffff' : '#000000',
                headerShown: false,
                tabBarStyle: { backgroundColor: darkMode ? '#212121' : '#ffffff' },
            }}>
                <Tab.Screen
                    name="Main Screen"
                    component={MainScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={30} />
                        ),
                }}/>
                <Tab.Screen
                    name="Booking Screen"
                    component={BookingScreen}
                    options={{
                        tabBarLabel: 'Bookings',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="library-books" color={color} size={30} />
                        ),
                        // tabBarBadge: 3,
                    }}/>
                <Tab.Screen
                    name="Safety Screen"
                    component={SafetyScreen}
                    options={{
                    tabBarLabel: 'WC Safe',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="shield" color={color} size={30} />
                    ),
                }}/>
                <Tab.Screen
                    name="Premium Screen"
                    component={PremiumScreen}
                    options={{
                    tabBarLabel: 'WC+',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="attach-money" color={color} size={30} />
                    ),
                }}/>
                <Tab.Screen
                    name="Profile Screen"
                    component={ProfileScreen}
                    options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({ color, size }) => (
                    <Icon name="supervised-user-circle" color={color} size={30} />
                    ),
                }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigation
