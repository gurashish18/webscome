import React, {useContext, useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './AuthNav'
import AppNav from './AppNav'
import { AuthContext } from '../API/AuthProvider'
import auth from '@react-native-firebase/auth';

const Route = () => {
    const {user, setuser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged(user) {
        setuser(user);
        if (initializing) setInitializing(false);
      }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
          <AuthNav />
        );
      }

    return (
        <AppNav />
    )
}

export default Route
