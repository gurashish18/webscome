import React, { useContext } from 'react'
import { StyleSheet, Text, View, Share } from 'react-native'
import {AppContext} from '../API/contextAPI'

const ShareScreen = () => {
  const {darkMode} = useContext(AppContext)
    const onShare = async () => {
        try {
          const result = await Share.share({
            title: 'App link',
            message: 'Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en', 
            url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
    return (
        <View style={{flex:1, backgroundColor: darkMode?'#000000':'#ffffff', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 18,borderRadius: 20, borderWidth: 1, borderColor: darkMode?'#ffffff':'#000000',padding: 10}} onPress={onShare}>Share Webscome Company</Text>
        </View>
    )
}

export default ShareScreen

const styles = StyleSheet.create({})
