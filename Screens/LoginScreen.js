import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/native'
import {AppContext} from '../API/contextAPI'

const LoginScreen = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const navigation = useNavigation()
    const handleLogin = () => {
        navigation.navigate("BottomTab")
    }
    const handleLoginFacebook = () => {
        console.warn("Facebook Logged in !!!")
    }
    const handleLoginGoogle = () => {
        console.warn("Google Logged in !!!")
    }
    const [password, setpassword] = useState("")
    const [mail, setmail] = useState("")
    return (
        <View style={{...styles.container, backgroundColor: darkMode?'#000000':'#ffffff'}}>
            <Text style={{...styles.title, color: darkMode?'#ffffff':'#3284FF'}}>Login</Text>
            <Input value={mail} setvalue={setmail} placeholder="EnterYour Mail" icon="link"/>
            <Input value={password} setvalue={setpassword} placeholder="EnterYour Password" secureTextEntry={true} icon="lock"/>
            
            <Button onPress={handleLogin} buttontext="Login"/>

            <Text style={{marginBottom: 10, color: darkMode?'#ffffff':'#000000'}}>Forgot your Password?</Text>
            <Text style={{color: darkMode?'#ffffff':'#000000'}}>Or</Text>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25}}>
                <SocialButton onPress={handleLoginFacebook} iconname="sc-facebook" buttontext="Facebook" color="#3284FF"/>
                <SocialButton onPress={handleLoginGoogle} iconname="sc-google-plus" buttontext="Google" color="#E1473D"/>
            </View>
            <View style={{ marginTop: 50, flexDirection: 'row'}}>
                <Text style={{color: darkMode?'#ffffff':'#000000'}}>Don't have an Account? </Text>
                <Text style={{color: '#3284FF'}} onPress={() => navigation.navigate("Signup")}>Signup</Text>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 30
    },
})
