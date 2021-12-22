import React, { useContext } from 'react'
import { StyleSheet, Text, View, Share } from 'react-native'
import {AppContext} from '../API/contextAPI'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Refer = () => {
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
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: darkMode ? '#000000' : '#ffffff'}}>
            <View style={{}}>
                <Text style={{fontSize: 24, alignSelf: 'center', color: darkMode?'#ffffff':'#000000',fontWeight: 'bold'}}>How it works?</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                    <Icon name="mark-email-read" style={{fontSize: 30, marginRight: 50, color: darkMode?'#ffffff':'#000000'}}/>
                    <Text style={{fontSize: 18, maxWidth: 250, color: darkMode?'#ffffff':'#000000'}}>Invite your friends to Webscome company</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',  marginVertical: 20}}>
                    <Icon name="mark-email-read" style={{fontSize: 30, marginRight: 50, color: darkMode?'#ffffff':'#000000'}}/>
                    <Text style={{fontSize: 18, maxWidth: 250, color: darkMode?'#ffffff':'#000000'}}>Invite your friends to Webscome company</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                    <Icon name="mark-email-read" style={{fontSize: 30, marginRight: 50, color: darkMode?'#ffffff':'#000000'}}/>
                    <Text style={{fontSize: 18, maxWidth: 250, color: darkMode?'#ffffff':'#000000'}}>Invite your friends to Webscome company</Text>
                </View>
            </View>

            <View style={{flex:1, backgroundColor: darkMode?'#000000':'#ffffff', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: darkMode?'#ffffff':'#000000', fontSize: 18,borderRadius: 20, borderWidth: 1, borderColor: darkMode?'#ffffff':'#000000',padding: 10}} onPress={onShare}>Refer your friends</Text>
            </View>
        </View>
    )
}

export default Refer

const styles = StyleSheet.create({})
