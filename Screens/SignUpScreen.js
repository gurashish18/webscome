import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/native'
import {AppContext} from '../API/contextAPI'

const SignUpScreen = () => {
    const {darkMode, setdarkMode} = useContext(AppContext)
    const navigation = useNavigation()
    const handleSignup = () => {
        navigation.navigate("BottomTab")
    }
    const handleSingupFacebook = () => {
        console.warn("Facebook Sign up!!!")
    } 
    const handleSignupGoogle = () => {
        console.warn("Google Sign up!!!")
    } 
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [mail, setmail] = useState('')
    return (
        <View style={{...styles.container, backgroundColor: darkMode?'#212121':'#e0e0e0'}}>
            <Text style={{...styles.title, color: darkMode?'#ffffff':'#3284FF'}}>Signup</Text>
            <Input value={username} setvalue={setusername} placeholder="Username" icon="user"/>
            <Input value={password} setvalue={setpassword} placeholder="EnterYour Password" secureTextEntry={true} icon="lock"/>
            <Input value={mail} setvalue={setmail} placeholder="EnterYour Mail" icon="link"/>
            
            <Button onPress={handleSignup} buttontext="Signup"/>

            <Text style={{color:darkMode?'#ffffff':'#000000'}}>Or</Text>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25}}>
                <SocialButton iconname="sc-facebook" buttontext="Facebook" color="#3284FF" onPress={handleSingupFacebook}/>
                <SocialButton iconname="sc-google-plus" buttontext="Google" color="#E1473D" onPress={handleSignupGoogle}/>
            </View>
            <View style={{ marginTop: 50, flexDirection: 'row'}}>
                <Text style={{color:darkMode?'#ffffff':'#000000'}}>Already have an Account? </Text>
                <Text style={{color: '#3284FF'}} onPress={() => navigation.navigate("Login")}>Login</Text>
            </View>
        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '',
        marginBottom: 30
    },

})
