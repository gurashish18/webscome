import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import{AppContext} from '../API/contextAPI'
import SwipeableTabs from "react-native-swipe-tabs"
import Received from '../components/Received'
import Sent from '../components/Sent'

const GiftCard = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const[selectedIndex, setselectedIndex] = useState(0)
    return (
        <View>
            <SwipeableTabs
                onSwipe={x => setselectedIndex(x)}
                selectedIndex={selectedIndex}>
                
                <Received />
                <Sent />
                
             </SwipeableTabs>
        </View>
    )
}

export default GiftCard

const styles = StyleSheet.create({})
