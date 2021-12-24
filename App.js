import React, {useState, useContext, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Image,Button,} from 'react-native';
import Navigation from './components/Navigation';
import Context from './API/contextAPI'
import AuthProvider from './API/AuthProvider'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const App = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '685725021998-6o8ol1i9knktls742h5sbvi5tffgl6kl.apps.googleusercontent.com',
    });
  }, [])

  return (
    <AuthProvider>
      <Context>
        <Navigation />
      </Context>
      </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  
});


