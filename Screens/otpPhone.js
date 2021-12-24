import React, {useContext, useState, useRef} from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { AppContext } from '../API/contextAPI';
import PhoneInput from "react-native-phone-number-input";
import Button from '../components/Button'
import {useNavigation} from '@react-navigation/native'

const otpPhone = () => {
    const {darkMode, phoneNumber, setphoneNumber} = useContext(AppContext)
    const navigation = useNavigation()

    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const phoneInput = useRef(null);
    return (
        <View style={{...styles.container, backgroundColor: darkMode?'#212121':'#e0e0e0'}}>
            <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => {
                setphoneNumber(text);
                }}
                onChangeFormattedText={(text) => {
                setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
                autoFocus
          />
          <Button onPress={()=>navigation.navigate("otplogin")} buttontext="Request OTP"/>
        </View>
    )
}

export default otpPhone

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
})
