import React, {useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './AuthNav'
import AppNav from './AppNav'
import { AuthContext } from '../API/AuthProvider'

const Route = () => {
    const {user, setUser} = useContext(AuthContext);
    return (
        <NavigationContainer>
            {user ? <AppNav /> : <AuthNav />}
        </NavigationContainer>
    )
}

export default Route
